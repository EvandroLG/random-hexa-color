#!/bin/bash

rm -rf dist/*; microbundle build --entry src/index.ts --name random-hexa-color --tsconfig tsconfig.json
