import Import from '../Import';

describe('Import', () => {
    it('should format imports', () => {
        const defaultImport = Import.createDefault('aThing', './abc/def');
        expect(defaultImport.format('require')).toEqual('const aThing = require(\'./abc/def\');');
        expect(defaultImport.format('import')).toEqual('import aThing from \'./abc/def\';');
    });
});
