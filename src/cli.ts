
import main from './index';

export function getCLIParam(cliParamName, defaultValue) {
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i].indexOf(cliParamName) !== -1) {

            const configurationParamString = process.argv[i];
            console.log(configurationParamString);
            return configurationParamString.slice(configurationParamString.indexOf('=') + 1);
        }
        else continue;
    }
    return defaultValue;
}
main(getCLIParam('configPath', './'), getCLIParam('configuration', 'Release'));
