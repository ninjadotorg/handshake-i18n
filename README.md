# Handshake i18n

## Install

```
yarn
```

## Run

### All of process

```
yarn i18n
```

### Build parsed file need to i18n

```
yarn i18n-prepare
```

### Send to Crowdin

```
yarn send
```

### Build translated file and re-parsed

```
yarn handle-i18n-ed
```

## Misc notes

```
git submodule init
git submodule add git@github.com:ninjadotorg/handshake-app.git app
git submodule update
git submodule foreach git pull origin develop
```
