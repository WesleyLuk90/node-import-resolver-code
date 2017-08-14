import vscode from 'vscode';

export default class EditorUtils {
    static createTestFile(testPath) {
        return EditorUtils._createTestFile(testPath)
            .then(() => EditorUtils.setText(''));
    }

    static _createTestFile(testPath) {
        if (testPath) {
            return vscode.window.showTextDocument(vscode.Uri.parse(`untitled:${testPath}`));
        } else {
            return vscode.window.showTextDocument(vscode.Uri.parse('untitled:node-import-resolver-TokenFinder'));
        }
    }

    static setText(text) {
        const editor = vscode.window.activeTextEditor;
        return editor.edit((editBuilder) => {
            editBuilder.setEndOfLine(vscode.EndOfLine.LF);
            editBuilder.delete(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(10000, 10000)));
            editBuilder.insert(new vscode.Position(0, 0), text);
        });
    }

    static setCursor(row, column) {
        vscode.window.activeTextEditor.selection = new vscode.Selection(new vscode.Position(row, column), new vscode.Position(row, column));
    }

    static setSelection(row1, column1, row2, column2) {
        vscode.window.activeTextEditor.selection = new vscode.Selection(new vscode.Position(row1, column1), new vscode.Position(row2, column2));
    }

    static executeCommand(name) {
        return vscode.commands.executeCommand(name);
    }
}
