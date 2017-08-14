'use babel';

import ImportMatchers from './ImportMatchers';
import assert from 'assert';

export default class ImportStyleHeuristic {
    static fromSource(source, config) {
        assert(typeof source === 'string');
        assert(config);
        return new ImportStyleHeuristic(source, config);
    }

    constructor(source, config) {
        Object.assign(this, { source, config });
    }

    countRequires() {
        return this.regexSum(ImportMatchers.getRequireMatchers());
    }

    countImports() {
        return this.regexSum(ImportMatchers.getImportStyleMatchers());
    }

    regexSum(regexes) {
        return regexes.reduce((sum, regex) => sum + this.regexCount(regex), 0);
    }

    regexCount(regex) {
        let count = 0;
        assert(regex.flags.indexOf('g') > -1);
        while (regex.exec(this.source)) {
            count++;
        }
        return count;
    }

    getStyle() {
        if (this.config.getImportStyle()) {
            return this.config.getImportStyle();
        }
        const requires = this.countRequires();
        const imports = this.countImports();
        if (requires > imports) {
            return 'require';
        }
        return 'import';
    }
}
