import path from 'path';
import ImportScanner from '../ImportScanner';
import Configuration from '../Configuration';
import TestProject from './TestProject';

const folder = TestProject.getPath('some-source.js');

describe('ImportScanner', () => {
    let onComplete;
    let onProgress;
    let containsPath = (path, not) => {
        const matches = onProgress.calls.allArgs().filter(args => args[0].some(i => i.getRelativePath() === path));
        if (not) {
            if (matches.length > 0) {
                throw new Error(`Expected calls to not contain path ${path} but actual calls were ${JSON.stringify(onProgress.calls.allArgs().map(args => args[0]), null, 4)}`);
            }
        } else {

            if (matches.length === 0) {
                throw new Error(`Expected calls to contain path ${path} but actual calls were ${JSON.stringify(onProgress.calls.allArgs().map(args => args[0]), null, 4)}`);
            }
        }
    };

    beforeEach(() => {
        onComplete = jasmine.createSpy('onComplete');
        onProgress = jasmine.createSpy('onProgress');

    });

    it('should scan for imports', () => {
        const importScanner = ImportScanner.create(folder, 'import1', onProgress, Configuration.createDefault());
        return importScanner.start()
            .then(onComplete)
            .then(() => {
                containsPath('./import1');
                containsPath('./nested/import1');
                expect(onProgress.calls.mostRecent().args).toEqual(onComplete.calls.first().args);
            });
    });

    const expectImportFound = (token, importPath) => {
        it(`it should find ${token} as ${importPath}`, () => {
            const importScanner = ImportScanner.create(folder, token, onProgress, Configuration.createDefault());
            return importScanner.start()
                .then(onComplete)
                .then(() => {
                    containsPath(importPath);
                });
        });
    };

    expectImportFound('ASecondImport', './a-second-import');
    expectImportFound('aSecondImport', './a-second-import');
    expectImportFound('_aSecondImport', './a-second-import');
    expectImportFound('AThirdImport', './AThirdImport');
    expectImportFound('aPackage', 'a-package');

    it(`it should find ignore ignored folders`, () => {
        const importScanner = ImportScanner.create(folder, 'Import1', onProgress, Configuration.createDefault().setIgnoredFolders(['nested']));
        return importScanner.start()
            .then(onComplete)
            .then(() => {
                containsPath('./nested/import1', true);
            });
    });

    it(`it should start at the configured root folders`, () => {
        const importScanner = ImportScanner.create(folder, 'Import1', onProgress, Configuration.createDefault().setRootFolder(TestProject.getPath('nested')));
        return importScanner.start()
            .then(onComplete)
            .then(() => {
                containsPath('./nested/import1');
                containsPath('./import1', true);
            });
    });
});