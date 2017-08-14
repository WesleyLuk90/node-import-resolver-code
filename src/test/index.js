const Jasmine = require('jasmine');
const path = require('path');
require('source-map-support').install();

class CustomReporter {
    constructor(done) {
        this.done = done;
        this.specResults = [];
    }

    specDone(result) {
        this.specResults.push(result);
    }

    formatErrors() {
        return this.getFailedSpecs()
            .map((r) => {
                const errors = r.failedExpectations.map(e => e.stack).join('\n');
                return `${r.fullName}\n${errors}`;
            })
            .join('\n');
    }

    getFailedSpecs() {
        return this.specResults
            .filter(r => r.failedExpectations.length > 0);
    }

    reportDone() {
        if (this.getFailedSpecs().length > 0) {
            this.done(this.formatErrors(), this.specResults.length);
            console.log(`${this.getFailedSpecs().length}/${this.specResults.length} tests failed`);
        } else {
            this.done(null, this.specResults.length);
            console.log(`All ${this.specResults.length} tests pass`);
        }
    }
}

module.exports = {
    run(testRoot, done) {
        const jasmine = new Jasmine();
        jasmine.loadConfig({
            spec_dir: path.relative(process.cwd(), testRoot),
            spec_files: [
                '*[sS]pec.js',
                '**/*[sS]pec.js',
            ],
        });
        const reporter = new CustomReporter(done);
        jasmine.onComplete(() => reporter.reportDone());
        jasmine.addReporter(reporter);
        try {
            jasmine.execute();
        } catch (e) {
            done(e.stack);
        }
    }
};