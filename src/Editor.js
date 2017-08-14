import vscode from 'vscode';
import assert from 'assert';
import EditorPosition from './EditorPosition';

export default class Editor {
    static getWorkspaceFolders() {
        return vscode.workspace.workspaceFolders.map(f => f.uri);
    }

    static getEditorCursorStart() {
        const selection = vscode.window.activeTextEditor.selection;
        if (!selection) {
            return null;
        }
        return new EditorPosition(selection.start.line, selection.start.character);

    }

    static getTextFromRange(startPosition, endPosition) {
        assert(startPosition instanceof EditorPosition);
        assert(endPosition instanceof EditorPosition);

        const range = new vscode.Range(new vscode.Position(startPosition.row, startPosition.column), new vscode.Position(endPosition.row, endPosition.column));

        return vscode.window.activeTextEditor.document.getText(range);
    }
}