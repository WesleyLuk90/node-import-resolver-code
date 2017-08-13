import vscode from 'vscode';

export default class Editor {
    static getWorkspaceFolders() {
        return vscode.workspace.workspaceFolders.map(f => f.uri);
    }
}