'use babel';

export default class ImportMatchers {
    static getRequireMatchers() {
        return [
            /^\s*require\(\s*['"][^'"]+['"]\s*\)\s*;?$/g,
            /(var|let|const)\s+[a-z0-9_$]+\s+=\s+require\(.*\)/g,
        ];
    }

    static getImportMatchers() {
        return [
            /import\s+[a-z0-9_$]+\s+from\s+.*?/gi,
            /import\s+\{(\s*[a-z0-9_$]+\s*,?\s*)+\}\s+from\s+.*?/gi,
        ];
    }

    static getImportStyleMatchers() {
        return [
            /(^|\n)\s*export default /gi,
            /(^|\n)\s*export /g,
            ...this.getImportMatchers(),
        ];
    }

    static getAllMatchers() {
        return [...this.getRequireMatchers(), ...this.getImportMatchers()];
    }
}
