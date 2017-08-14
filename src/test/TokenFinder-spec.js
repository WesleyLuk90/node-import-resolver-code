'use babel';

import TokenFinder from '../TokenFinder';
import EditorUtils from './EditorUtils';

describe('TokenFinder', () => {
    beforeEach(() => EditorUtils.createTestFile());

    it('should find no tokens', () => {
        const finder = new TokenFinder();
        expect(finder.getToken()).toEqual(null);
    });

    describe('with cursor position', () => {
        beforeEach(() =>
            EditorUtils.setText(`some random info
findAToken
more data`));

        it('should find a highlighted token when cursor is in the middle', () => {
            EditorUtils.setCursor(1, 3);
            const finder = new TokenFinder();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the start', () => {
            EditorUtils.setCursor(1, 0);
            const finder = new TokenFinder();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the end', () => {
            EditorUtils.setCursor(1, 10);
            const finder = new TokenFinder();
            expect(finder.getToken()).toEqual('findAToken');
        });
    });

    describe('with selection', () => {
        beforeEach(() =>
            EditorUtils.setText(`some random info
@#$% findAToken !@#$
more data`));

        it('should not find an invalid token', () => {
            EditorUtils.setSelection(1, 1, 1, 3);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe(null);
        });

        it('should find an exactly selected token', () => {
            EditorUtils.setSelection(1, 6, 1, 15);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a partially selected token', () => {
            EditorUtils.setSelection(1, 8, 1, 10);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a exactly token at the start of a selection', () => {
            EditorUtils.setSelection(1, 6, 1, 20);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should fail to find a token not at the start', () => {
            EditorUtils.setSelection(1, 0, 1, 15);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe(null);
        });
    });
});