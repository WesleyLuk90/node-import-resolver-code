
export default class Import {
    static createDefault(importName, relativePath) {
        return new Import(importName, relativePath);
    }

    constructor(importName, relativePath) {
        Object.assign(this, { importName, relativePath });
    }

    getImportName() {
        return this.importName;
    }

    getRelativePath() {
        return this.relativePath;
    }

    format(style) {
        if (style === 'require') {
            return `const ${this.getImportName()} = require('${this.getRelativePath()}');`;
        } else if (style === 'import') {
            return `import ${this.getImportName()} from '${this.getRelativePath()}';`;
        }
        throw new Error(`Invalid import style ${style}`);
    }
}
