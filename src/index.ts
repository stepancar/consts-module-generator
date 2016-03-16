import {emitPackage} from './emitter';
import {getTsString} from './generator';
import * as path from 'path';

export default function main(configPath, configuration) {
    configPath = path.resolve(configPath);
    let typescripFileText = getTsString(require(configPath), configuration);
    return emitPackage(path.parse(configPath).name, typescripFileText);
}
