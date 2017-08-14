import assert from 'assert';

export default class EditorPosition {
    constructor(row, column) {
        assert(row >= 0, `Expected row to be positive but got ${row}`);
        assert(column >= 0, `Expected column to be positive but got ${column}`)
        this.row = row;
        this.column = column;
    }
}