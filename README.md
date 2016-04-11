npm i consts-module-generator
[attempt to solve this issue](https://github.com/Microsoft/TypeScript/issues/5376)
comandline:

node node_modules/consts-module-generator/lib/cli.js --configuration=Release --configPath=./consts-name.json

Or in your gruntFile o webpack:

var constsPackageGenerator = require('consts-module-generator').default;

var pathToConstsMainScript = constsPackageGenerator('sletat-api-services-consts.json', 'Test');
