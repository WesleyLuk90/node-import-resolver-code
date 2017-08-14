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
            if (testPath) {
                return _vscode2.default.window.showTextDocument(_vscode2.default.Uri.parse('untitled:' + testPath)).then(function () {
                    return EditorUtils.setText('');
                });
            } else {
                return _vscode2.default.window.showTextDocument(_vscode2.default.Uri.parse('untitled:node-import-resolver-TokenFinder')).then(function () {
                    return EditorUtils.setText('');
                });
            }
        }
    }, {
        key: 'setText',
        value: function setText(text) {
            var editor = _vscode2.default.window.activeTextEditor;
            return editor.edit(function (editBuilder) {
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
            _vscode2.default.commands.executeCommand(name);
        }
    }]);

    return EditorUtils;
}();

exports.default = EditorUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0VkaXRvclV0aWxzLmpzIl0sIm5hbWVzIjpbIkVkaXRvclV0aWxzIiwidGVzdFBhdGgiLCJ3aW5kb3ciLCJzaG93VGV4dERvY3VtZW50IiwiVXJpIiwicGFyc2UiLCJ0aGVuIiwic2V0VGV4dCIsInRleHQiLCJlZGl0b3IiLCJhY3RpdmVUZXh0RWRpdG9yIiwiZWRpdCIsImVkaXRCdWlsZGVyIiwiZGVsZXRlIiwiUmFuZ2UiLCJQb3NpdGlvbiIsImluc2VydCIsInJvdyIsImNvbHVtbiIsInNlbGVjdGlvbiIsIlNlbGVjdGlvbiIsInJvdzEiLCJjb2x1bW4xIiwicm93MiIsImNvbHVtbjIiLCJuYW1lIiwiY29tbWFuZHMiLCJleGVjdXRlQ29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7dUNBQ0tDLFEsRUFBVTtBQUM1QixnQkFBSUEsUUFBSixFQUFjO0FBQ1YsdUJBQU8saUJBQU9DLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0IsaUJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxlQUE2QkosUUFBN0IsQ0FBL0IsRUFBeUVLLElBQXpFLENBQThFO0FBQUEsMkJBQU1OLFlBQVlPLE9BQVosQ0FBb0IsRUFBcEIsQ0FBTjtBQUFBLGlCQUE5RSxDQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8saUJBQU9MLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0IsaUJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQiwyQ0FBakIsQ0FBL0IsRUFBOEZDLElBQTlGLENBQW1HO0FBQUEsMkJBQU1OLFlBQVlPLE9BQVosQ0FBb0IsRUFBcEIsQ0FBTjtBQUFBLGlCQUFuRyxDQUFQO0FBQ0g7QUFDSjs7O2dDQUVjQyxJLEVBQU07QUFDakIsZ0JBQU1DLFNBQVMsaUJBQU9QLE1BQVAsQ0FBY1EsZ0JBQTdCO0FBQ0EsbUJBQU9ELE9BQU9FLElBQVAsQ0FBWSxVQUFDQyxXQUFELEVBQWlCO0FBQ2hDQSw0QkFBWUMsTUFBWixDQUFtQixJQUFJLGlCQUFPQyxLQUFYLENBQWlCLElBQUksaUJBQU9DLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBakIsRUFBNEMsSUFBSSxpQkFBT0EsUUFBWCxDQUFvQixLQUFwQixFQUEyQixLQUEzQixDQUE1QyxDQUFuQjtBQUNBSCw0QkFBWUksTUFBWixDQUFtQixJQUFJLGlCQUFPRCxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQW5CLEVBQThDUCxJQUE5QztBQUNILGFBSE0sQ0FBUDtBQUlIOzs7a0NBRWdCUyxHLEVBQUtDLE0sRUFBUTtBQUMxQiw2QkFBT2hCLE1BQVAsQ0FBY1EsZ0JBQWQsQ0FBK0JTLFNBQS9CLEdBQTJDLElBQUksaUJBQU9DLFNBQVgsQ0FBcUIsSUFBSSxpQkFBT0wsUUFBWCxDQUFvQkUsR0FBcEIsRUFBeUJDLE1BQXpCLENBQXJCLEVBQXVELElBQUksaUJBQU9ILFFBQVgsQ0FBb0JFLEdBQXBCLEVBQXlCQyxNQUF6QixDQUF2RCxDQUEzQztBQUNIOzs7cUNBRW1CRyxJLEVBQU1DLE8sRUFBU0MsSSxFQUFNQyxPLEVBQVM7QUFDOUMsNkJBQU90QixNQUFQLENBQWNRLGdCQUFkLENBQStCUyxTQUEvQixHQUEyQyxJQUFJLGlCQUFPQyxTQUFYLENBQXFCLElBQUksaUJBQU9MLFFBQVgsQ0FBb0JNLElBQXBCLEVBQTBCQyxPQUExQixDQUFyQixFQUF5RCxJQUFJLGlCQUFPUCxRQUFYLENBQW9CUSxJQUFwQixFQUEwQkMsT0FBMUIsQ0FBekQsQ0FBM0M7QUFDSDs7O3VDQUVxQkMsSSxFQUFNO0FBQ3hCLDZCQUFPQyxRQUFQLENBQWdCQyxjQUFoQixDQUErQkYsSUFBL0I7QUFDSDs7Ozs7O2tCQTNCZ0J6QixXIiwiZmlsZSI6IkVkaXRvclV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZzY29kZSBmcm9tICd2c2NvZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yVXRpbHMge1xyXG4gICAgc3RhdGljIGNyZWF0ZVRlc3RGaWxlKHRlc3RQYXRoKSB7XHJcbiAgICAgICAgaWYgKHRlc3RQYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2c2NvZGUud2luZG93LnNob3dUZXh0RG9jdW1lbnQodnNjb2RlLlVyaS5wYXJzZShgdW50aXRsZWQ6JHt0ZXN0UGF0aH1gKSkudGhlbigoKSA9PiBFZGl0b3JVdGlscy5zZXRUZXh0KCcnKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdnNjb2RlLndpbmRvdy5zaG93VGV4dERvY3VtZW50KHZzY29kZS5VcmkucGFyc2UoJ3VudGl0bGVkOm5vZGUtaW1wb3J0LXJlc29sdmVyLVRva2VuRmluZGVyJykpLnRoZW4oKCkgPT4gRWRpdG9yVXRpbHMuc2V0VGV4dCgnJykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRUZXh0KHRleHQpIHtcclxuICAgICAgICBjb25zdCBlZGl0b3IgPSB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3I7XHJcbiAgICAgICAgcmV0dXJuIGVkaXRvci5lZGl0KChlZGl0QnVpbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBlZGl0QnVpbGRlci5kZWxldGUobmV3IHZzY29kZS5SYW5nZShuZXcgdnNjb2RlLlBvc2l0aW9uKDAsIDApLCBuZXcgdnNjb2RlLlBvc2l0aW9uKDEwMDAwLCAxMDAwMCkpKTtcclxuICAgICAgICAgICAgZWRpdEJ1aWxkZXIuaW5zZXJ0KG5ldyB2c2NvZGUuUG9zaXRpb24oMCwgMCksIHRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdXJzb3Iocm93LCBjb2x1bW4pIHtcclxuICAgICAgICB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3Iuc2VsZWN0aW9uID0gbmV3IHZzY29kZS5TZWxlY3Rpb24obmV3IHZzY29kZS5Qb3NpdGlvbihyb3csIGNvbHVtbiksIG5ldyB2c2NvZGUuUG9zaXRpb24ocm93LCBjb2x1bW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0aW9uKHJvdzEsIGNvbHVtbjEsIHJvdzIsIGNvbHVtbjIpIHtcclxuICAgICAgICB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3Iuc2VsZWN0aW9uID0gbmV3IHZzY29kZS5TZWxlY3Rpb24obmV3IHZzY29kZS5Qb3NpdGlvbihyb3cxLCBjb2x1bW4xKSwgbmV3IHZzY29kZS5Qb3NpdGlvbihyb3cyLCBjb2x1bW4yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGV4ZWN1dGVDb21tYW5kKG5hbWUpIHtcclxuICAgICAgICB2c2NvZGUuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmQobmFtZSk7XHJcbiAgICB9XHJcbn0iXX0=