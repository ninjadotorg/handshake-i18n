#!/bin/bash
version=$(date +%s);
sed -e "s/\${version}/${version}/" package.template.json > package.json
