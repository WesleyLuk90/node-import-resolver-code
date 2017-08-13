'use babel';

import PackageScanner from '../PackageScanner';
import TestProject from './TestProject';

describe('PackageScanner', () => {
    it('should scan package.json', () => {
        const scanner = PackageScanner.fromFilePath(TestProject.getPath());

        return scanner.getPackageList()
            .then((packageList) => {
                expect(packageList).toContain('a-package');
                expect(packageList).toContain('b-package');
                expect(packageList).toContain('path');
                expect(packageList).toContain('http');
            });
    });
});