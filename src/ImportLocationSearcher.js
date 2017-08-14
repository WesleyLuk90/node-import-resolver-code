import ImportMatchers from './ImportMatchers';
import EditorPosition from './EditorPosition';

export default class ImportLocationSearcher {
    static fromSource(source) {
        return new ImportLocationSearcher(source);
    }

    constructor(source) {
        Object.assign(this, { source });
    }

    getLocation() {
        const lines = this.source.split('\n');
        let line;
        let backtrackCount = 0;
        let inComment = false;
        for (line = 0; line < lines.length; line++) {
            if (this.beginsComment(lines[line])) {
                inComment = true;
            }
            if (!this.isSkippable(lines[line]) && !inComment) {
                break;
            }
            if (this.endsComment(lines[line])) {
                inComment = false;
            }
            if (this.isBacktrackingLine(lines[line]) && !inComment) {
                backtrackCount++;
            } else {
                backtrackCount = 0;
            }
        }
        return new EditorPosition(line - backtrackCount, 0);
    }

    isSkippable(line) {
        return this.getSkippableMatchers().some(m => line.match(m));
    }

    isBacktrackingLine(line) {
        return this.getBacktrackingLines().some(m => line.match(m));
    }

    getBacktrackingLines() {
        return [
            /^\s*$/,
        ];
    }

    getSkippableMatchers() {
        return [
            /^\s*['"][^'"]+['"]\s*;?\s*$/,
            /^\s*\/\/.*/,
            ...this.getBacktrackingLines(),
            ...ImportMatchers.getAllMatchers(),
        ];
    }

    beginsComment(line) {
        return line.match(/\/\*/);
    }

    endsComment(line) {
        return line.match(/\*\//);
    }
}
