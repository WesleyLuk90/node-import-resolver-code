'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vscode = require('vscode');

var _vscode2 = _interopRequireDefault(_vscode);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _EditorPosition = require('./EditorPosition');

var _EditorPosition2 = _interopRequireDefault(_EditorPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Editor = function () {
    function Editor() {
        _classCallCheck(this, Editor);
    }

    _createClass(Editor, null, [{
        key: 'getWorkspaceFolders',
        value: function getWorkspaceFolders() {
            return _vscode2.default.workspace.workspaceFolders.map(function (f) {
                return f.uri;
            });
        }
    }, {
        key: 'getEditorCursorStart',
        value: function getEditorCursorStart() {
            var selection = _vscode2.default.window.activeTextEditor.selection;
            if (!selection) {
                return null;
            }
            return new _EditorPosition2.default(selection.start.line, selection.start.character);
        }
    }, {
        key: 'getTextFromRange',
        value: function getTextFromRange(startPosition, endPosition) {
            (0, _assert2.default)(startPosition instanceof _EditorPosition2.default);
            (0, _assert2.default)(endPosition instanceof _EditorPosition2.default);

            var range = new _vscode2.default.Range(new _vscode2.default.Position(startPosition.row, startPosition.column), new _vscode2.default.Position(endPosition.row, endPosition.column));

            return _vscode2.default.window.activeTextEditor.document.getText(range);
        }
    }]);

    return Editor;
}();

exports.default = Editor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FZGl0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yIiwid29ya3NwYWNlIiwid29ya3NwYWNlRm9sZGVycyIsIm1hcCIsImYiLCJ1cmkiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJhY3RpdmVUZXh0RWRpdG9yIiwic3RhcnQiLCJsaW5lIiwiY2hhcmFjdGVyIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwicmFuZ2UiLCJSYW5nZSIsIlBvc2l0aW9uIiwicm93IiwiY29sdW1uIiwiZG9jdW1lbnQiLCJnZXRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7OENBQ1k7QUFDekIsbUJBQU8saUJBQU9DLFNBQVAsQ0FBaUJDLGdCQUFqQixDQUFrQ0MsR0FBbEMsQ0FBc0M7QUFBQSx1QkFBS0MsRUFBRUMsR0FBUDtBQUFBLGFBQXRDLENBQVA7QUFDSDs7OytDQUU2QjtBQUMxQixnQkFBTUMsWUFBWSxpQkFBT0MsTUFBUCxDQUFjQyxnQkFBZCxDQUErQkYsU0FBakQ7QUFDQSxnQkFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ1osdUJBQU8sSUFBUDtBQUNIO0FBQ0QsbUJBQU8sNkJBQW1CQSxVQUFVRyxLQUFWLENBQWdCQyxJQUFuQyxFQUF5Q0osVUFBVUcsS0FBVixDQUFnQkUsU0FBekQsQ0FBUDtBQUVIOzs7eUNBRXVCQyxhLEVBQWVDLFcsRUFBYTtBQUNoRCxrQ0FBT0QsaURBQVA7QUFDQSxrQ0FBT0MsK0NBQVA7O0FBRUEsZ0JBQU1DLFFBQVEsSUFBSSxpQkFBT0MsS0FBWCxDQUFpQixJQUFJLGlCQUFPQyxRQUFYLENBQW9CSixjQUFjSyxHQUFsQyxFQUF1Q0wsY0FBY00sTUFBckQsQ0FBakIsRUFBK0UsSUFBSSxpQkFBT0YsUUFBWCxDQUFvQkgsWUFBWUksR0FBaEMsRUFBcUNKLFlBQVlLLE1BQWpELENBQS9FLENBQWQ7O0FBRUEsbUJBQU8saUJBQU9YLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0JXLFFBQS9CLENBQXdDQyxPQUF4QyxDQUFnRE4sS0FBaEQsQ0FBUDtBQUNIOzs7Ozs7a0JBckJnQmQsTSIsImZpbGUiOiJFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdnNjb2RlIGZyb20gJ3ZzY29kZSc7XHJcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcclxuaW1wb3J0IEVkaXRvclBvc2l0aW9uIGZyb20gJy4vRWRpdG9yUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yIHtcclxuICAgIHN0YXRpYyBnZXRXb3Jrc3BhY2VGb2xkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnMubWFwKGYgPT4gZi51cmkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRFZGl0b3JDdXJzb3JTdGFydCgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3Iuc2VsZWN0aW9uO1xyXG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEVkaXRvclBvc2l0aW9uKHNlbGVjdGlvbi5zdGFydC5saW5lLCBzZWxlY3Rpb24uc3RhcnQuY2hhcmFjdGVyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFRleHRGcm9tUmFuZ2Uoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcclxuICAgICAgICBhc3NlcnQoc3RhcnRQb3NpdGlvbiBpbnN0YW5jZW9mIEVkaXRvclBvc2l0aW9uKTtcclxuICAgICAgICBhc3NlcnQoZW5kUG9zaXRpb24gaW5zdGFuY2VvZiBFZGl0b3JQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IHZzY29kZS5SYW5nZShuZXcgdnNjb2RlLlBvc2l0aW9uKHN0YXJ0UG9zaXRpb24ucm93LCBzdGFydFBvc2l0aW9uLmNvbHVtbiksIG5ldyB2c2NvZGUuUG9zaXRpb24oZW5kUG9zaXRpb24ucm93LCBlbmRQb3NpdGlvbi5jb2x1bW4pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZzY29kZS53aW5kb3cuYWN0aXZlVGV4dEVkaXRvci5kb2N1bWVudC5nZXRUZXh0KHJhbmdlKTtcclxuICAgIH1cclxufSJdfQ==