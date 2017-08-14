'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vscode = require('vscode');

var _vscode2 = _interopRequireDefault(_vscode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorUtils = function () {
    function EditorUtils() {
        _classCallCheck(this, EditorUtils);
    }

    _createClass(EditorUtils, null, [{
        key: 'createTestFile',
        value: function createTestFile(testPath) {
            return EditorUtils._createTestFile(testPath).then(function () {
                return EditorUtils.setText('');
            });
        }
    }, {
        key: '_createTestFile',
        value: function _createTestFile(testPath) {
            if (testPath) {
                return _vscode2.default.window.showTextDocument(_vscode2.default.Uri.parse('untitled:' + testPath));
            } else {
                return _vscode2.default.window.showTextDocument(_vscode2.default.Uri.parse('untitled:node-import-resolver-TokenFinder'));
            }
        }
    }, {
        key: 'setText',
        value: function setText(text) {
            var editor = _vscode2.default.window.activeTextEditor;
            return editor.edit(function (editBuilder) {
                editBuilder.setEndOfLine(_vscode2.default.EndOfLine.LF);
                editBuilder.delete(new _vscode2.default.Range(new _vscode2.default.Position(0, 0), new _vscode2.default.Position(10000, 10000)));
                editBuilder.insert(new _vscode2.default.Position(0, 0), text);
            });
        }
    }, {
        key: 'setCursor',
        value: function setCursor(row, column) {
            _vscode2.default.window.activeTextEditor.selection = new _vscode2.default.Selection(new _vscode2.default.Position(row, column), new _vscode2.default.Position(row, column));
        }
    }, {
        key: 'setSelection',
        value: function setSelection(row1, column1, row2, column2) {
            _vscode2.default.window.activeTextEditor.selection = new _vscode2.default.Selection(new _vscode2.default.Position(row1, column1), new _vscode2.default.Position(row2, column2));
        }
    }, {
        key: 'executeCommand',
        value: function executeCommand(name) {
            return _vscode2.default.commands.executeCommand(name);
        }
    }]);

    return EditorUtils;
}();

exports.default = EditorUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0VkaXRvclV0aWxzLmpzIl0sIm5hbWVzIjpbIkVkaXRvclV0aWxzIiwidGVzdFBhdGgiLCJfY3JlYXRlVGVzdEZpbGUiLCJ0aGVuIiwic2V0VGV4dCIsIndpbmRvdyIsInNob3dUZXh0RG9jdW1lbnQiLCJVcmkiLCJwYXJzZSIsInRleHQiLCJlZGl0b3IiLCJhY3RpdmVUZXh0RWRpdG9yIiwiZWRpdCIsImVkaXRCdWlsZGVyIiwic2V0RW5kT2ZMaW5lIiwiRW5kT2ZMaW5lIiwiTEYiLCJkZWxldGUiLCJSYW5nZSIsIlBvc2l0aW9uIiwiaW5zZXJ0Iiwicm93IiwiY29sdW1uIiwic2VsZWN0aW9uIiwiU2VsZWN0aW9uIiwicm93MSIsImNvbHVtbjEiLCJyb3cyIiwiY29sdW1uMiIsIm5hbWUiLCJjb21tYW5kcyIsImV4ZWN1dGVDb21tYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozt1Q0FDS0MsUSxFQUFVO0FBQzVCLG1CQUFPRCxZQUFZRSxlQUFaLENBQTRCRCxRQUE1QixFQUNGRSxJQURFLENBQ0c7QUFBQSx1QkFBTUgsWUFBWUksT0FBWixDQUFvQixFQUFwQixDQUFOO0FBQUEsYUFESCxDQUFQO0FBRUg7Ozt3Q0FFc0JILFEsRUFBVTtBQUM3QixnQkFBSUEsUUFBSixFQUFjO0FBQ1YsdUJBQU8saUJBQU9JLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0IsaUJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxlQUE2QlAsUUFBN0IsQ0FBL0IsQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLGlCQUFPSSxNQUFQLENBQWNDLGdCQUFkLENBQStCLGlCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUIsMkNBQWpCLENBQS9CLENBQVA7QUFDSDtBQUNKOzs7Z0NBRWNDLEksRUFBTTtBQUNqQixnQkFBTUMsU0FBUyxpQkFBT0wsTUFBUCxDQUFjTSxnQkFBN0I7QUFDQSxtQkFBT0QsT0FBT0UsSUFBUCxDQUFZLFVBQUNDLFdBQUQsRUFBaUI7QUFDaENBLDRCQUFZQyxZQUFaLENBQXlCLGlCQUFPQyxTQUFQLENBQWlCQyxFQUExQztBQUNBSCw0QkFBWUksTUFBWixDQUFtQixJQUFJLGlCQUFPQyxLQUFYLENBQWlCLElBQUksaUJBQU9DLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBakIsRUFBNEMsSUFBSSxpQkFBT0EsUUFBWCxDQUFvQixLQUFwQixFQUEyQixLQUEzQixDQUE1QyxDQUFuQjtBQUNBTiw0QkFBWU8sTUFBWixDQUFtQixJQUFJLGlCQUFPRCxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQW5CLEVBQThDVixJQUE5QztBQUNILGFBSk0sQ0FBUDtBQUtIOzs7a0NBRWdCWSxHLEVBQUtDLE0sRUFBUTtBQUMxQiw2QkFBT2pCLE1BQVAsQ0FBY00sZ0JBQWQsQ0FBK0JZLFNBQS9CLEdBQTJDLElBQUksaUJBQU9DLFNBQVgsQ0FBcUIsSUFBSSxpQkFBT0wsUUFBWCxDQUFvQkUsR0FBcEIsRUFBeUJDLE1BQXpCLENBQXJCLEVBQXVELElBQUksaUJBQU9ILFFBQVgsQ0FBb0JFLEdBQXBCLEVBQXlCQyxNQUF6QixDQUF2RCxDQUEzQztBQUNIOzs7cUNBRW1CRyxJLEVBQU1DLE8sRUFBU0MsSSxFQUFNQyxPLEVBQVM7QUFDOUMsNkJBQU92QixNQUFQLENBQWNNLGdCQUFkLENBQStCWSxTQUEvQixHQUEyQyxJQUFJLGlCQUFPQyxTQUFYLENBQXFCLElBQUksaUJBQU9MLFFBQVgsQ0FBb0JNLElBQXBCLEVBQTBCQyxPQUExQixDQUFyQixFQUF5RCxJQUFJLGlCQUFPUCxRQUFYLENBQW9CUSxJQUFwQixFQUEwQkMsT0FBMUIsQ0FBekQsQ0FBM0M7QUFDSDs7O3VDQUVxQkMsSSxFQUFNO0FBQ3hCLG1CQUFPLGlCQUFPQyxRQUFQLENBQWdCQyxjQUFoQixDQUErQkYsSUFBL0IsQ0FBUDtBQUNIOzs7Ozs7a0JBakNnQjdCLFciLCJmaWxlIjoiRWRpdG9yVXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdnNjb2RlIGZyb20gJ3ZzY29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvclV0aWxzIHtcbiAgICBzdGF0aWMgY3JlYXRlVGVzdEZpbGUodGVzdFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIEVkaXRvclV0aWxzLl9jcmVhdGVUZXN0RmlsZSh0ZXN0UGF0aClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IEVkaXRvclV0aWxzLnNldFRleHQoJycpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NyZWF0ZVRlc3RGaWxlKHRlc3RQYXRoKSB7XG4gICAgICAgIGlmICh0ZXN0UGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHZzY29kZS53aW5kb3cuc2hvd1RleHREb2N1bWVudCh2c2NvZGUuVXJpLnBhcnNlKGB1bnRpdGxlZDoke3Rlc3RQYXRofWApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2c2NvZGUud2luZG93LnNob3dUZXh0RG9jdW1lbnQodnNjb2RlLlVyaS5wYXJzZSgndW50aXRsZWQ6bm9kZS1pbXBvcnQtcmVzb2x2ZXItVG9rZW5GaW5kZXInKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0VGV4dCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHZzY29kZS53aW5kb3cuYWN0aXZlVGV4dEVkaXRvcjtcbiAgICAgICAgcmV0dXJuIGVkaXRvci5lZGl0KChlZGl0QnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgZWRpdEJ1aWxkZXIuc2V0RW5kT2ZMaW5lKHZzY29kZS5FbmRPZkxpbmUuTEYpO1xuICAgICAgICAgICAgZWRpdEJ1aWxkZXIuZGVsZXRlKG5ldyB2c2NvZGUuUmFuZ2UobmV3IHZzY29kZS5Qb3NpdGlvbigwLCAwKSwgbmV3IHZzY29kZS5Qb3NpdGlvbigxMDAwMCwgMTAwMDApKSk7XG4gICAgICAgICAgICBlZGl0QnVpbGRlci5pbnNlcnQobmV3IHZzY29kZS5Qb3NpdGlvbigwLCAwKSwgdGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDdXJzb3Iocm93LCBjb2x1bW4pIHtcbiAgICAgICAgdnNjb2RlLndpbmRvdy5hY3RpdmVUZXh0RWRpdG9yLnNlbGVjdGlvbiA9IG5ldyB2c2NvZGUuU2VsZWN0aW9uKG5ldyB2c2NvZGUuUG9zaXRpb24ocm93LCBjb2x1bW4pLCBuZXcgdnNjb2RlLlBvc2l0aW9uKHJvdywgY29sdW1uKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFNlbGVjdGlvbihyb3cxLCBjb2x1bW4xLCByb3cyLCBjb2x1bW4yKSB7XG4gICAgICAgIHZzY29kZS53aW5kb3cuYWN0aXZlVGV4dEVkaXRvci5zZWxlY3Rpb24gPSBuZXcgdnNjb2RlLlNlbGVjdGlvbihuZXcgdnNjb2RlLlBvc2l0aW9uKHJvdzEsIGNvbHVtbjEpLCBuZXcgdnNjb2RlLlBvc2l0aW9uKHJvdzIsIGNvbHVtbjIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXhlY3V0ZUNvbW1hbmQobmFtZSkge1xuICAgICAgICByZXR1cm4gdnNjb2RlLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kKG5hbWUpO1xuICAgIH1cbn1cbiJdfQ==