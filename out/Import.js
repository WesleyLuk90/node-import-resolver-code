'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Import = function () {
    _createClass(Import, null, [{
        key: 'createDefault',
        value: function createDefault(importName, relativePath) {
            return new Import(importName, relativePath);
        }
    }]);

    function Import(importName, relativePath) {
        _classCallCheck(this, Import);

        Object.assign(this, { importName: importName, relativePath: relativePath });
    }

    _createClass(Import, [{
        key: 'getImportName',
        value: function getImportName() {
            return this.importName;
        }
    }, {
        key: 'getRelativePath',
        value: function getRelativePath() {
            return this.relativePath;
        }
    }, {
        key: 'format',
        value: function format(style) {
            if (style === 'require') {
                return 'const ' + this.getImportName() + ' = require(\'' + this.getRelativePath() + '\');';
            } else if (style === 'import') {
                return 'import ' + this.getImportName() + ' from \'' + this.getRelativePath() + '\';';
            }
            throw new Error('Invalid import style ' + style);
        }
    }]);

    return Import;
}();

exports.default = Import;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnQuanMiXSwibmFtZXMiOlsiSW1wb3J0IiwiaW1wb3J0TmFtZSIsInJlbGF0aXZlUGF0aCIsIk9iamVjdCIsImFzc2lnbiIsInN0eWxlIiwiZ2V0SW1wb3J0TmFtZSIsImdldFJlbGF0aXZlUGF0aCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ3FCQSxNOzs7c0NBQ0lDLFUsRUFBWUMsWSxFQUFjO0FBQzNDLG1CQUFPLElBQUlGLE1BQUosQ0FBV0MsVUFBWCxFQUF1QkMsWUFBdkIsQ0FBUDtBQUNIOzs7QUFFRCxvQkFBWUQsVUFBWixFQUF3QkMsWUFBeEIsRUFBc0M7QUFBQTs7QUFDbENDLGVBQU9DLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLEVBQUVILHNCQUFGLEVBQWNDLDBCQUFkLEVBQXBCO0FBQ0g7Ozs7d0NBRWU7QUFDWixtQkFBTyxLQUFLRCxVQUFaO0FBQ0g7OzswQ0FFaUI7QUFDZCxtQkFBTyxLQUFLQyxZQUFaO0FBQ0g7OzsrQkFFTUcsSyxFQUFPO0FBQ1YsZ0JBQUlBLFVBQVUsU0FBZCxFQUF5QjtBQUNyQixrQ0FBZ0IsS0FBS0MsYUFBTCxFQUFoQixxQkFBbUQsS0FBS0MsZUFBTCxFQUFuRDtBQUNILGFBRkQsTUFFTyxJQUFJRixVQUFVLFFBQWQsRUFBd0I7QUFDM0IsbUNBQWlCLEtBQUtDLGFBQUwsRUFBakIsZ0JBQStDLEtBQUtDLGVBQUwsRUFBL0M7QUFDSDtBQUNELGtCQUFNLElBQUlDLEtBQUosMkJBQWtDSCxLQUFsQyxDQUFOO0FBQ0g7Ozs7OztrQkF4QmdCTCxNIiwiZmlsZSI6IkltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0IHtcbiAgICBzdGF0aWMgY3JlYXRlRGVmYXVsdChpbXBvcnROYW1lLCByZWxhdGl2ZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbXBvcnQoaW1wb3J0TmFtZSwgcmVsYXRpdmVQYXRoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnROYW1lLCByZWxhdGl2ZVBhdGgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IGltcG9ydE5hbWUsIHJlbGF0aXZlUGF0aCB9KTtcbiAgICB9XG5cbiAgICBnZXRJbXBvcnROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBvcnROYW1lO1xuICAgIH1cblxuICAgIGdldFJlbGF0aXZlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRpdmVQYXRoO1xuICAgIH1cblxuICAgIGZvcm1hdChzdHlsZSkge1xuICAgICAgICBpZiAoc3R5bGUgPT09ICdyZXF1aXJlJykge1xuICAgICAgICAgICAgcmV0dXJuIGBjb25zdCAke3RoaXMuZ2V0SW1wb3J0TmFtZSgpfSA9IHJlcXVpcmUoJyR7dGhpcy5nZXRSZWxhdGl2ZVBhdGgoKX0nKTtgO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlID09PSAnaW1wb3J0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGBpbXBvcnQgJHt0aGlzLmdldEltcG9ydE5hbWUoKX0gZnJvbSAnJHt0aGlzLmdldFJlbGF0aXZlUGF0aCgpfSc7YDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaW1wb3J0IHN0eWxlICR7c3R5bGV9YCk7XG4gICAgfVxufVxuIl19