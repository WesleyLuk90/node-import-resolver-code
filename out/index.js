'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = activate;
var vscode = require('vscode');

function activate(context) {
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
        var array = ['a', 'b', 'c', 'd'];
        vscode.window.showQuickPick(array).then(function (c) {
            console.log(c);
        });
        array.push('e');
        setTimeout(function () {

            array.push('f');
        }, 1000);
    });

    context.subscriptions.push(disposable);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhY3RpdmF0ZSIsInZzY29kZSIsInJlcXVpcmUiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImRpc3Bvc2FibGUiLCJjb21tYW5kcyIsInJlZ2lzdGVyQ29tbWFuZCIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJhcnJheSIsInNob3dRdWlja1BpY2siLCJ0aGVuIiwiYyIsInB1c2giLCJzZXRUaW1lb3V0Iiwic3Vic2NyaXB0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxRO0FBRnhCLElBQUlDLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVlLFNBQVNGLFFBQVQsQ0FBa0JHLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQUMsWUFBUUMsR0FBUixDQUFZLDRFQUFaOztBQUVJO0FBQ0E7QUFDQTtBQUNBLFFBQUlDLGFBQWFMLE9BQU9NLFFBQVAsQ0FBZ0JDLGVBQWhCLENBQWdDLG9CQUFoQyxFQUFzRCxZQUFZO0FBQy9FOztBQUVBO0FBQ0FQLGVBQU9RLE1BQVAsQ0FBY0Msc0JBQWQsQ0FBcUMsY0FBckM7QUFDQSxZQUFNQyxRQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWQ7QUFDQVYsZUFBT1EsTUFBUCxDQUFjRyxhQUFkLENBQTRCRCxLQUE1QixFQUNLRSxJQURMLENBQ1UsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1RWLG9CQUFRQyxHQUFSLENBQVlTLENBQVo7QUFDSCxTQUhMO0FBSUFILGNBQU1JLElBQU4sQ0FBVyxHQUFYO0FBQ0FDLG1CQUFXLFlBQU07O0FBRWJMLGtCQUFNSSxJQUFOLENBQVcsR0FBWDtBQUNILFNBSEQsRUFHRyxJQUhIO0FBSUgsS0FmZ0IsQ0FBakI7O0FBaUJBWixZQUFRYyxhQUFSLENBQXNCRixJQUF0QixDQUEyQlQsVUFBM0I7QUFDUCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlKGNvbnRleHQpIHtcclxuICAgIC8vIFVzZSB0aGUgY29uc29sZSB0byBvdXRwdXQgZGlhZ25vc3RpYyBpbmZvcm1hdGlvbiAoY29uc29sZS5sb2cpIGFuZCBlcnJvcnMgKGNvbnNvbGUuZXJyb3IpXHJcbiAgICAvLyBUaGlzIGxpbmUgb2YgY29kZSB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb25jZSB3aGVuIHlvdXIgZXh0ZW5zaW9uIGlzIGFjdGl2YXRlZFxyXG4gICAgY29uc29sZS5sb2coJ0NvbmdyYXR1bGF0aW9ucywgeW91ciBleHRlbnNpb24gXCJub2RlLWltcG9ydC1yZXNvbHZlci1jb2RlXCIgaXMgbm93IGFjdGl2ZSEnKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFRoZSBjb21tYW5kIGhhcyBiZWVuIGRlZmluZWQgaW4gdGhlIHBhY2thZ2UuanNvbiBmaWxlXHJcbiAgICAgICAgLy8gTm93IHByb3ZpZGUgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBjb21tYW5kIHdpdGggIHJlZ2lzdGVyQ29tbWFuZFxyXG4gICAgICAgIC8vIFRoZSBjb21tYW5kSWQgcGFyYW1ldGVyIG11c3QgbWF0Y2ggdGhlIGNvbW1hbmQgZmllbGQgaW4gcGFja2FnZS5qc29uXHJcbiAgICAgICAgdmFyIGRpc3Bvc2FibGUgPSB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdleHRlbnNpb24uc2F5SGVsbG8nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBjb2RlIHlvdSBwbGFjZSBoZXJlIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgdGltZSB5b3VyIGNvbW1hbmQgaXMgZXhlY3V0ZWRcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IGEgbWVzc2FnZSBib3ggdG8gdGhlIHVzZXJcclxuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdIZWxsbyBXb3JsZCEnKTtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbJ2EnLCAnYicsICdjJywgJ2QnXTtcclxuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93UXVpY2tQaWNrKGFycmF5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKCdlJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goJ2YnKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9ucy5wdXNoKGRpc3Bvc2FibGUpO1xyXG59Il19