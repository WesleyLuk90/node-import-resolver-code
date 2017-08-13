var vscode = require('vscode');

export default function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "node-import-resolver-code" is now active!');
    
        // The command has been defined in the package.json file
        // Now provide the implementation of the command with  registerCommand
        // The commandId parameter must match the command field in package.json
        var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
            // The code you place here will be executed every time your command is executed
    
            // Display a message box to the user
            vscode.window.showInformationMessage('Hello World!');
            const array = ['a', 'b', 'c', 'd'];
            vscode.window.showQuickPick(array)
                .then((c) => {
                    console.log(c);
                });
            array.push('e');
            setTimeout(() => {

                array.push('f')
            }, 1000);
        });
    
        context.subscriptions.push(disposable);
}