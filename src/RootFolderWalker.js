'use babel';

import fs from 'fs';
import path from 'path';
import bluebird from 'bluebird';
import Editor from './Editor';

const stat = bluebird.promisify(fs.stat);

export default class RootFolderWalker {
    static fromFile(filePath) {
        return new RootFolderWalker(filePath);
    }

    constructor(filePath) {
        Object.assign(this, { filePath });
    }

    getRootFolder() {
        return this.walkFolders(this.filePath)
            .catch(() => {
                return this.defaultPath();
            });
    }

    walkFolders(folderPath) {
        return this.isRootFolder(folderPath)
            .then((isRoot) => {
                if (isRoot) {
                    return folderPath;
                } else if (this.shouldStop(folderPath)) {
                    throw new Error(`Failed to find root folder`);
                } else {
                    return this.walkFolders(path.dirname(folderPath));
                }
            });
    }

    defaultPath() {
        const paths = Editor.getWorkspaceFolders();
        if (paths.length === 0) {
            throw new Error(`No project paths`);
        }
        return paths[0];
    }

    shouldStop(folderPath) {
        return !folderPath || path.dirname(folderPath) === folderPath;
    }

    isRootFolder(folderPath) {
        const packagePath = path.join(folderPath, "package.json");
        return stat(packagePath)
            .then(fileStat => fileStat.isFile())
            .catch(() => false);
    }
}
