// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

exports.activate = require('./out/index.js').default;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;