import fs from 'fs';
import bluebird from 'bluebird';
import path from 'path';
import PackageScanner from './PackageScanner';
import RootFolderWalker from './RootFolderWalker';
import ImportFormatter from './ImportFormatter';
import assert from 'assert';

const readdir = bluebird.promisify(fs.readdir);
const stat = bluebird.promisify(fs.stat);

export default class ImportScanner {
    static create(filePath, token, onProgress, config) {
        assert(filePath);
        assert(token);
        assert(onProgress);
        assert(config);
        return new ImportScanner(filePath, token, onProgress, config);
    }

    constructor(filePath, token, onProgress, config) {
        Object.assign(this, { filePath, token, onProgress, config });
        this.files = [];
        this.formatter = new ImportFormatter(this.filePath, token);
    }

    start() {
        return this.scanPackages()
            .then(() => this.getScanFolder())
            .then((rootFolder) => this.scanDir(rootFolder))
            .then(() => this.getProgress());
    }

    getRootFolder() {
        return new RootFolderWalker(path.dirname(this.filePath))
            .getRootFolder();
    }

    getScanFolder() {
        if (this.config.getRootFolder()) {
            return Promise.resolve(this.config.getRootFolder());
        }
        return this.getRootFolder();
    }

    scanPackages() {
        return this.getRootFolder()
            .then(rootFolder => PackageScanner.fromFilePath(rootFolder).getPackageList())
            .then((packages) => {
                this.setPackages(packages);
            });
    }

    setPackages(packages) {
        this.packages = packages.filter(p => this.matchesTokenName(p));
        this.emitProgress();
    }

    foundFile(file) {
        this.files.push(file);
        this.emitProgress();
    }

    emitProgress() {
        this.onProgress(this.getProgress());
    }

    getProgress() {
        return [
            ...this.formatter.formatPackages(this.packages),
            ...this.formatter.format(this.files),
        ];
    }

    checkFile(file) {
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        if (this.matchesTokenName(basename) && this.matchesExtension(ext)) {
            this.foundFile(file);
        }
    }

    matchesTokenName(name) {
        return this.normalizeTokenName(name) === this.normalizeTokenName(this.token);
    }

    matchesExtension(ext) {
        return ['.js', '.jsx'].indexOf(ext) > -1;
    }

    normalizeTokenName(token) {
        return token.replace(/[^a-z0-9]/gi, '').toLowerCase();
    }

    processNode(absPath) {
        return stat(absPath)
            .then((stat) => {
                if (stat.isFile()) {
                    return this.checkFile(absPath);
                } else if (stat.isDirectory() && !this.isIgnored(absPath)) {
                    return this.scanDir(absPath);
                }
            });
    }

    isIgnored(folderPath) {
        const folderName = path.basename(folderPath);
        return this.config.getIgnoredFolders().indexOf(folderName) > -1;
    }

    scanDir(dir) {
        return readdir(dir)
            .then((files) =>
                bluebird.mapSeries(files,
                    (file) => this.processNode(path.join(dir, file))));
    }
}
