const fs = require('fs');
const path = require('path');
const request = require('request');
const rimraf = require('rimraf');
const unzip = require('unzip');
const csv = require('fast-csv');
const _ = require('lodash');

const argv = process.argv.slice(2);

const appPath = path.resolve('app');
const envPath = path.resolve('.env');

const name = 'handshake-app';

if (fs.existsSync(envPath)) {
  require('dotenv').config();
}

function handleDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
}

function exit(msg, code = 1) {
  if (code) {
    console.log(msg);
  } else {
    console.error(msg);
  }
  process.exit(0);
}

if (!fs.existsSync(appPath)) exit('Please clone submodules');
if (!argv.length) exit('Please give me some command');

const sourcePath = path.resolve(appPath, 'src', 'locals', 'en.js');
const copiedDir = path.resolve('dist');
const copiedPath = path.resolve(copiedDir, 'en.js');
const storeDir = path.resolve('store');
const downloadDir = path.resolve(storeDir, 'download');
const i18nDir = path.resolve('i18n');

handleDir(copiedDir);
handleDir(storeDir);
handleDir(downloadDir);
handleDir(i18nDir);

let i = 0;
let mapList = {};

function parseRow(row, key) {
  if (typeof row === 'string') {
    let translationKey = `%%%${key}%%%`;
    mapList[translationKey] = row;
    i++;
    return translationKey;
  }
  if (_.isArray(row)) {
    return row.map((item, index) => {
      return parseRow(item, `${key}.${index}`);
    });
  }
  if (typeof row === 'object') {
    return parseObject(row, key);
  }
}

function parseObject(content, parentKey = '') {
  const keys = Object.keys(content);
  const newObject = Object.assign({}, content);

  keys.map(key => {
    let row = content[key];
    newObject[key] = parseRow(row, `${parentKey}.${key}`);
  });

  return newObject;
}

function prepare() {
  fs.copyFileSync(sourcePath, copiedPath);
  try {
    const english = require(copiedPath).default;
    const parsedFile = parseObject(english);
    let csvFileData = '';

    Object.keys(mapList).map(key => {
      csvFileData = `${csvFileData}\r\n${key},"${mapList[key].replace(/"/g, '""')}"`;
    });

    fs.writeFileSync(path.resolve(storeDir, 'en.csv'), csvFileData, 'utf8');
    fs.writeFileSync(
      path.resolve(storeDir, 'en.origin.js'),
      JSON.stringify(parsedFile, null, 4),
      'utf8'
    );
    exit('done!');
  } catch (e) {
    console.error(e);
    exit('have something wrong with origin English file', 1);
  }
}

function send() {
  const englishPath = path.resolve(storeDir, 'en.csv');
  const data = {
    'files[en.csv]': fs.createReadStream(englishPath),
    'scheme': 'identifier,source_or_translation',
  };
  request.post({
    url: `https://api.crowdin.com/api/project/${name}/update-file?key=${process.env.CROWDIN_API}`,
    formData: data,
  }, function (err, response, body) {
    if (err) {
      console.log(err);
      exit('upload failed');
    }
    console.log('Upload successful! Server responded with: ', body);
    exit('done!');
  });
}

function download() {
  rimraf.sync(`${downloadDir}/*`);
  // const currentDownloadDir = path.resolve(downloadDir, `D.${Date.now()}`);
  request.get({
    url: `https://api.crowdin.com/api/project/${name}/export?key=${process.env.CROWDIN_API}`
  }, function (err, response, body) {
    if (err) {
      console.log(err);
      exit('create download failed');
    }
    request.get({
      url: `https://api.crowdin.com/api/project/${name}/download/all.zip?key=${process.env.CROWDIN_API}`
    }).pipe(fs.createWriteStream(path.resolve(downloadDir, 'all.zip')));
  });
}

function unparser() {
  const zipFile = path.resolve(downloadDir, 'all.zip');
  const unzipDir = path.resolve(downloadDir, 'unzip');
  rimraf.sync(`${downloadDir}/unzip/*`);
  rimraf.sync(`${i18nDir}/*`);

  const parsedName = {
    de: 'de',
    'es-ES': 'es',
    fr: 'fr',
    ja: 'ja',
    ko: 'ko',
    ru: 'ru',
    'zh-CN': 'zh',
    vi: 'vi'
  };
  handleDir(unzipDir);
  fs.createReadStream(zipFile)
    .pipe(
      unzip.Extract({ path: unzipDir })
        .on('close', function () {
          const languages = Object.keys(parsedName);

          languages.map(language => {
            let languageFile = fs.readFileSync(path.resolve(storeDir, 'en.origin.js'), 'utf8');

            const translatedFile = fs.readFileSync(
              path.resolve(downloadDir, 'unzip', language, 'en.csv'),
              'utf8',
            );
            csv
              .fromString(translatedFile)
              .on('data', (data) => {
                languageFile = languageFile.replace(
                  data[0], data[1] ? data[1]
                    .replace(/\\\'/g, "\\\\'")
                    .replace(/\n/g, '\\n')
                    .replace(/\"/g, '\\\"')
                    .replace(/""/g, '"')
                    : ''
                );
              })
              .on('end', () => {
                fs.writeFileSync(
                  path.resolve(i18nDir, `${parsedName[language]}.json`),
                  languageFile,
                  'utf8',
                );
              });
          });
        })
    );
}

const command = argv[0];

switch (command) {
  case 'prepare':
    prepare();
    break;
  case 'send':
    send();
    break;
  case 'download':
    download();
    break;
  case 'unparser':
    unparser();
    break;
}
