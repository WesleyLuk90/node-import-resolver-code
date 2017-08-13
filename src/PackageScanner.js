'use babel';

import bluebird from 'bluebird';
import fs from 'fs';
import path from 'path';
import builtinModules from 'builtin-modules';

const readFile = bluebird.promisify(fs.readFile);

export default class PackageScanner {
    static fromFilePath(filePath) {
        return new PackageScanner(filePath);
    }

    constructor(filePath) {
        Object.assign(this, { filePath });
    }

    getPackageList() {
        return readFile(path.join(this.filePath, 'package.json'), 'UTF-8')
            .then((file) => {
                const packageFile = JSON.parse(file);
                return [
                    ...this.getKeyAsArray(packageFile, 'dependencies'),
                    ...this.getKeyAsArray(packageFile, 'devDependencies'),
                    ...builtinModules,
                ];
            })
            .catch(() => []);
    }

    getKeyAsArray(object, key) {
        if (!object[key]) {
            return [];
        }
        return Object.keys(object[key]);
    }
}
