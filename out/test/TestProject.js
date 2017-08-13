'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestProject = function () {
    function TestProject() {
        _classCallCheck(this, TestProject);
    }

    _createClass(TestProject, null, [{
        key: 'getPath',
        value: function getPath(relativePath) {
            return _path2.default.join(__dirname, '../../test-project', relativePath || '.');
        }
    }]);

    return TestProject;
}();

exports.default = TestProject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L1Rlc3RQcm9qZWN0LmpzIl0sIm5hbWVzIjpbIlRlc3RQcm9qZWN0IiwicmVsYXRpdmVQYXRoIiwiam9pbiIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Z0NBQ0ZDLFksRUFBYztBQUN6QixtQkFBTyxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsb0JBQXJCLEVBQTJDRixnQkFBZ0IsR0FBM0QsQ0FBUDtBQUNIOzs7Ozs7a0JBSGdCRCxXIiwiZmlsZSI6IlRlc3RQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0UHJvamVjdCB7XHJcbiAgICBzdGF0aWMgZ2V0UGF0aChyZWxhdGl2ZVBhdGgpIHtcclxuICAgICAgICByZXR1cm4gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL3Rlc3QtcHJvamVjdCcsIHJlbGF0aXZlUGF0aCB8fCAnLicpO1xyXG4gICAgfVxyXG59Il19