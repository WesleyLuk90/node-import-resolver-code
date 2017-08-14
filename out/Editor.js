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
                return f.uri.fsPath;
            });
        }
    }, {
        key: 'getFilePath',
        value: function getFilePath() {
            return _vscode2.default.window.activeTextEditor.document.uri.fsPath;
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
    }, {
        key: 'getText',
        value: function getText() {
            return _vscode2.default.window.activeTextEditor.document.getText();
        }
    }, {
        key: 'insert',
        value: function insert(position, text) {
            (0, _assert2.default)(position instanceof _EditorPosition2.default);

            return _vscode2.default.window.activeTextEditor.edit(function (editBuilder) {
                editBuilder.insert(new _vscode2.default.Position(position.row, position.column), text);
            });
        }
    }]);

    return Editor;
}();

exports.default = Editor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FZGl0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yIiwid29ya3NwYWNlIiwid29ya3NwYWNlRm9sZGVycyIsIm1hcCIsImYiLCJ1cmkiLCJmc1BhdGgiLCJ3aW5kb3ciLCJhY3RpdmVUZXh0RWRpdG9yIiwiZG9jdW1lbnQiLCJzZWxlY3Rpb24iLCJzdGFydCIsImxpbmUiLCJjaGFyYWN0ZXIiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJyYW5nZSIsIlJhbmdlIiwiUG9zaXRpb24iLCJyb3ciLCJjb2x1bW4iLCJnZXRUZXh0IiwicG9zaXRpb24iLCJ0ZXh0IiwiZWRpdCIsImVkaXRCdWlsZGVyIiwiaW5zZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7OENBQ1k7QUFDekIsbUJBQU8saUJBQU9DLFNBQVAsQ0FBaUJDLGdCQUFqQixDQUFrQ0MsR0FBbEMsQ0FBc0M7QUFBQSx1QkFBS0MsRUFBRUMsR0FBRixDQUFNQyxNQUFYO0FBQUEsYUFBdEMsQ0FBUDtBQUNIOzs7c0NBRW9CO0FBQ2pCLG1CQUFPLGlCQUFPQyxNQUFQLENBQWNDLGdCQUFkLENBQStCQyxRQUEvQixDQUF3Q0osR0FBeEMsQ0FBNENDLE1BQW5EO0FBQ0g7OzsrQ0FFNkI7QUFDMUIsZ0JBQU1JLFlBQVksaUJBQU9ILE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0JFLFNBQWpEO0FBQ0EsZ0JBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNaLHVCQUFPLElBQVA7QUFDSDtBQUNELG1CQUFPLDZCQUFtQkEsVUFBVUMsS0FBVixDQUFnQkMsSUFBbkMsRUFBeUNGLFVBQVVDLEtBQVYsQ0FBZ0JFLFNBQXpELENBQVA7QUFFSDs7O3lDQUV1QkMsYSxFQUFlQyxXLEVBQWE7QUFDaEQsa0NBQU9ELGlEQUFQO0FBQ0Esa0NBQU9DLCtDQUFQOztBQUVBLGdCQUFNQyxRQUFRLElBQUksaUJBQU9DLEtBQVgsQ0FBaUIsSUFBSSxpQkFBT0MsUUFBWCxDQUFvQkosY0FBY0ssR0FBbEMsRUFBdUNMLGNBQWNNLE1BQXJELENBQWpCLEVBQStFLElBQUksaUJBQU9GLFFBQVgsQ0FBb0JILFlBQVlJLEdBQWhDLEVBQXFDSixZQUFZSyxNQUFqRCxDQUEvRSxDQUFkOztBQUVBLG1CQUFPLGlCQUFPYixNQUFQLENBQWNDLGdCQUFkLENBQStCQyxRQUEvQixDQUF3Q1ksT0FBeEMsQ0FBZ0RMLEtBQWhELENBQVA7QUFDSDs7O2tDQUVnQjtBQUNiLG1CQUFPLGlCQUFPVCxNQUFQLENBQWNDLGdCQUFkLENBQStCQyxRQUEvQixDQUF3Q1ksT0FBeEMsRUFBUDtBQUNIOzs7K0JBRWFDLFEsRUFBVUMsSSxFQUFNO0FBQzFCLGtDQUFPRCw0Q0FBUDs7QUFFQSxtQkFBTyxpQkFBT2YsTUFBUCxDQUFjQyxnQkFBZCxDQUErQmdCLElBQS9CLENBQW9DLFVBQUNDLFdBQUQsRUFBaUI7QUFDeERBLDRCQUFZQyxNQUFaLENBQW1CLElBQUksaUJBQU9SLFFBQVgsQ0FBb0JJLFNBQVNILEdBQTdCLEVBQWtDRyxTQUFTRixNQUEzQyxDQUFuQixFQUF1RUcsSUFBdkU7QUFDSCxhQUZNLENBQVA7QUFHSDs7Ozs7O2tCQXJDZ0J2QixNIiwiZmlsZSI6IkVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2c2NvZGUgZnJvbSAndnNjb2RlJztcclxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5pbXBvcnQgRWRpdG9yUG9zaXRpb24gZnJvbSAnLi9FZGl0b3JQb3NpdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgc3RhdGljIGdldFdvcmtzcGFjZUZvbGRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2Uud29ya3NwYWNlRm9sZGVycy5tYXAoZiA9PiBmLnVyaS5mc1BhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRGaWxlUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdnNjb2RlLndpbmRvdy5hY3RpdmVUZXh0RWRpdG9yLmRvY3VtZW50LnVyaS5mc1BhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEVkaXRvckN1cnNvclN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHZzY29kZS53aW5kb3cuYWN0aXZlVGV4dEVkaXRvci5zZWxlY3Rpb247XHJcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRWRpdG9yUG9zaXRpb24oc2VsZWN0aW9uLnN0YXJ0LmxpbmUsIHNlbGVjdGlvbi5zdGFydC5jaGFyYWN0ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGV4dEZyb21SYW5nZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikge1xyXG4gICAgICAgIGFzc2VydChzdGFydFBvc2l0aW9uIGluc3RhbmNlb2YgRWRpdG9yUG9zaXRpb24pO1xyXG4gICAgICAgIGFzc2VydChlbmRQb3NpdGlvbiBpbnN0YW5jZW9mIEVkaXRvclBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBuZXcgdnNjb2RlLlJhbmdlKG5ldyB2c2NvZGUuUG9zaXRpb24oc3RhcnRQb3NpdGlvbi5yb3csIHN0YXJ0UG9zaXRpb24uY29sdW1uKSwgbmV3IHZzY29kZS5Qb3NpdGlvbihlbmRQb3NpdGlvbi5yb3csIGVuZFBvc2l0aW9uLmNvbHVtbikpO1xyXG5cclxuICAgICAgICByZXR1cm4gdnNjb2RlLndpbmRvdy5hY3RpdmVUZXh0RWRpdG9yLmRvY3VtZW50LmdldFRleHQocmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3IuZG9jdW1lbnQuZ2V0VGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnNlcnQocG9zaXRpb24sIHRleHQpIHtcclxuICAgICAgICBhc3NlcnQocG9zaXRpb24gaW5zdGFuY2VvZiBFZGl0b3JQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3IuZWRpdCgoZWRpdEJ1aWxkZXIpID0+IHtcclxuICAgICAgICAgICAgZWRpdEJ1aWxkZXIuaW5zZXJ0KG5ldyB2c2NvZGUuUG9zaXRpb24ocG9zaXRpb24ucm93LCBwb3NpdGlvbi5jb2x1bW4pLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==