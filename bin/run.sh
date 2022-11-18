#!/bin/bash

cd `dirname $0`
cd ../dist

NODE_OPTIONS='--experimental-vm-modules --no-warnings' npx jest --verbose

echo `pwd`
