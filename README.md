npm i consts-module-generator

comandline:

node node_modules/consts-module-generator/lib/cli.js --configuration=Release --configPath=./consts-name.json

Or in your gruntFile o webpack:

var constsPackageGenerator = require('consts-module-generator').default;

var pathToConstsMainScript = constsPackageGenerator('sletat-api-services-consts.json', 'Test');
