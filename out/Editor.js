'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vscode = require('vscode');

var _vscode2 = _interopRequireDefault(_vscode);

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
    }]);

    return Editor;
}();

exports.default = Editor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FZGl0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yIiwid29ya3NwYWNlIiwid29ya3NwYWNlRm9sZGVycyIsIm1hcCIsImYiLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7OzhDQUNZO0FBQ3pCLG1CQUFPLGlCQUFPQyxTQUFQLENBQWlCQyxnQkFBakIsQ0FBa0NDLEdBQWxDLENBQXNDO0FBQUEsdUJBQUtDLEVBQUVDLEdBQVA7QUFBQSxhQUF0QyxDQUFQO0FBQ0g7Ozs7OztrQkFIZ0JMLE0iLCJmaWxlIjoiRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZzY29kZSBmcm9tICd2c2NvZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yIHtcclxuICAgIHN0YXRpYyBnZXRXb3Jrc3BhY2VGb2xkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnMubWFwKGYgPT4gZi51cmkpO1xyXG4gICAgfVxyXG59Il19