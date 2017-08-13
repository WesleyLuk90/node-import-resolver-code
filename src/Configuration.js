'use babel';
import assert from 'assert';

export default class Configuration {
    static createDefault() {
        return new Configuration()
            .setImportStyle(null)
            .setIgnoredFolders(['node_modules'])
            .setRootFolder(null);
    }

    setImportStyle(style) {
        assert(style === 'import' || style === 'require' || style == null);
        this.style = style;
        return this;
    }

    getImportStyle() {
        return this.style;
    }

    setIgnoredFolders(folders) {
        if (folders) {
            assert(Array.isArray(folders));
            this.folders = folders;
        }
        return this;
    }

    getIgnoredFolders() {
        return this.folders;
    }

    setRootFolder(folder) {
        this.rootFolder = folder;
        return this;
    }

    getRootFolder() {
        return this.rootFolder;
    }
}
