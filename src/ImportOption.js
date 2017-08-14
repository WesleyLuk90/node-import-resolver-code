export default class ImportOption {
    constructor(i) {
        this.import = i;
        this.detail = i.getRelativePath();
        this.label = i.getImportName();
    }
}