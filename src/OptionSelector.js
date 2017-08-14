import vscode from 'vscode';

export default class OptionSelector {
    static showOptions(options) {
        if (options.length === 1) {
            return Promise.resolve(options[0]);
        }
        return vscode.window.showQuickPick(options);
    }
}