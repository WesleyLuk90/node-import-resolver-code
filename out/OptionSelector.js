'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vscode = require('vscode');

var _vscode2 = _interopRequireDefault(_vscode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OptionSelector = function () {
    function OptionSelector() {
        _classCallCheck(this, OptionSelector);
    }

    _createClass(OptionSelector, null, [{
        key: 'showOptions',
        value: function showOptions(options) {
            if (options.length === 1) {
                return Promise.resolve(options[0]);
            }
            return _vscode2.default.window.showQuickPick(options);
        }
    }]);

    return OptionSelector;
}();

exports.default = OptionSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PcHRpb25TZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJPcHRpb25TZWxlY3RvciIsIm9wdGlvbnMiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsInNob3dRdWlja1BpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7O29DQUNFQyxPLEVBQVM7QUFDeEIsZ0JBQUlBLFFBQVFDLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsdUJBQU9DLFFBQVFDLE9BQVIsQ0FBZ0JILFFBQVEsQ0FBUixDQUFoQixDQUFQO0FBQ0g7QUFDRCxtQkFBTyxpQkFBT0ksTUFBUCxDQUFjQyxhQUFkLENBQTRCTCxPQUE1QixDQUFQO0FBQ0g7Ozs7OztrQkFOZ0JELGMiLCJmaWxlIjoiT3B0aW9uU2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdnNjb2RlIGZyb20gJ3ZzY29kZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25TZWxlY3RvciB7XHJcbiAgICBzdGF0aWMgc2hvd09wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG9wdGlvbnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdnNjb2RlLndpbmRvdy5zaG93UXVpY2tQaWNrKG9wdGlvbnMpO1xyXG4gICAgfVxyXG59Il19