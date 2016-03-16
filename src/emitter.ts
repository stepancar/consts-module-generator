import * as ts from 'typescript';
import * as fs from 'fs';


function emitJs(sourceFilesPaths: Array<string>) {
    ts.createProgram(sourceFilesPaths, {
        declaration: true,
        removeComments: false
    }).emit();
}
/**
* Emits package to node module
* index.js
* index.d.ts
* package.json
*/
export function emitPackage(packageName, constsTsText) {
    const folderRelPath = './node_modules/' + packageName + '/';

    if (!fs.existsSync(folderRelPath)) {
        fs.mkdirSync(folderRelPath, 777);
    }
    const packageTemplate = {
        name: packageName,
        version: '0.0.1',
        description: packageName + 'Constants',
        main: 'index.js',
        typings: 'index'
    };
    fs.writeFileSync(folderRelPath + 'package.json', JSON.stringify(packageTemplate));
    fs.writeFileSync(folderRelPath + 'index.ts', constsTsText);
    emitJs([folderRelPath + 'index.ts']);
    fs.unlinkSync(folderRelPath + 'index.ts');
    console.log(`Generated ${packageName} package in node_modules folder.`);
    return folderRelPath + 'index.js';
}
