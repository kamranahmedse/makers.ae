#!/usr/bin/env bash

NODE_ENV=production next build
NODE_ENV=production next export
echo 'makers.ae' > out/CNAME
touch out/.nojekyll
