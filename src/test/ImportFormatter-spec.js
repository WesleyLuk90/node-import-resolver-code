import ImportFormatter from '../ImportFormatter';

describe('ImportFormatter', () => {
    it('should format imports', () => {
        const formatter = ImportFormatter.fromPath('/hello/world/path/file.js', 'AThing');
        const imports = formatter.format(['/grandparent/parent.js', '/hello/world/path/sibling.js', '/hello/world/path/child/file.js']);

        expect(imports.length).toBe(3);
        imports.forEach(i => expect(i.getImportName()).toBe('AThing'));
        expect(imports[0].getRelativePath()).toEqual('../../../grandparent/parent');
        expect(imports[1].getRelativePath()).toEqual('./sibling');
        expect(imports[2].getRelativePath()).toEqual('./child/file');
    });

    it('should format package imports', () => {
        const formatter = ImportFormatter.fromPath('/hello/world/path/file.js', 'AThing');
        const imports = formatter.formatPackages(['a-thing', 'b-thing']);

        expect(imports.length).toBe(2);
        imports.forEach(i => expect(i.getImportName()).toBe('AThing'));
        expect(imports[0].getRelativePath()).toEqual('a-thing');
        expect(imports[1].getRelativePath()).toEqual('b-thing');
    });
});
