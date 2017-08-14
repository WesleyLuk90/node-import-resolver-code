'use babel';

import TokenFinder from '../TokenFinder';
import vscode from 'vscode';

describe('TokenFinder', () => {
    beforeEach(() => {
        return vscode.window.showTextDocument(vscode.Uri.parse('untitled:node-import-resolver-TokenFinder'));
    });

    function setText(text) {
        const editor = vscode.window.activeTextEditor;
        return editor.edit((editBuilder) => {
            editBuilder.delete(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(10000, 10000)));
            editBuilder.insert(new vscode.Position(0, 0), text);
        });
    }

    function setCursor(row, column) {
        vscode.window.activeTextEditor.selection = new vscode.Selection(new vscode.Position(row, column), new vscode.Position(row, column));
    }

    function setSelection(row1, column1, row2, column2) {
        vscode.window.activeTextEditor.selection = new vscode.Selection(new vscode.Position(row1, column1), new vscode.Position(row2, column2));
    }

    it('should find no tokens', () => {
        const finder = new TokenFinder();
        expect(finder.getToken()).toEqual(null);
    });

    describe('with cursor position', () => {
        beforeEach(() =>
            setText(`some random info
findAToken
more data`));

        it('should find a highlighted token when cursor is in the middle', () => {
            setCursor(1, 3);
            const finder = new TokenFinder();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the start', () => {
            setCursor(1, 0);
            const finder = new TokenFinder();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the end', () => {
            setCursor(1, 10);
            const finder = new TokenFinder();
            expect(finder.getToken()).toEqual('findAToken');
        });
    });

    describe('with selection', () => {
        beforeEach(() =>
            setText(`some random info
@#$% findAToken !@#$
more data`));

        it('should not find an invalid token', () => {
            setSelection(1, 1, 1, 3);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe(null);
        });

        it('should find an exactly selected token', () => {
            setSelection(1, 6, 1, 15);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a partially selected token', () => {
            setSelection(1, 8, 1, 10);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a exactly token at the start of a selection', () => {
            setSelection(1, 6, 1, 20);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should fail to find a token not at the start', () => {
            setSelection(1, 0, 1, 15);
            const finder = new TokenFinder();
            expect(finder.getToken()).toBe(null);
        });
    });
});