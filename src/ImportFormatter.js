import Import from './Import';
import path from 'path';

export default class ImportFormatter {
    static fromPath(sourceFilePath, tokenName) {
        return new ImportFormatter(sourceFilePath, tokenName);
    }

    constructor(sourceFilePath, tokenName) {
        Object.assign(this, { sourceFilePath, tokenName });
    }

    format(targets) {
        return targets.map((t) => Import.createDefault(this.tokenName, this.resolvePathTo(t)));
    }

    formatPackages(targets) {
        return targets.map((p) => Import.createDefault(this.tokenName, p));
    }

    getSourceFolder() {
        return path.dirname(this.sourceFilePath);
    }

    resolvePathTo(target) {
        return this.normalizePath(path.relative(this.getSourceFolder(), target));
    }

    normalizePath(path) {
        let normalizedPath = path.replace(/\\/g, '/');
        if (normalizedPath.charAt(0) !== '.') {
            normalizedPath = `./${normalizedPath}`;
        }
        return this.trimExtension(normalizedPath);
    }

    trimExtension(path) {
        const trimmableExtensions = ['.js', '.jsx', '.json'];

        return trimmableExtensions.reduce((p, ext) => this.trim(p, ext), path);
    }

    trim(string, suffix) {
        if (string.indexOf(suffix) === string.length - suffix.length) {
            return string.substr(0, string.length - suffix.length);
        }
        return string;
    }
}
