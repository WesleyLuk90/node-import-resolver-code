'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Import = require('./Import');

var _Import2 = _interopRequireDefault(_Import);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImportFormatter = function () {
    _createClass(ImportFormatter, null, [{
        key: 'fromPath',
        value: function fromPath(sourceFilePath, tokenName) {
            return new ImportFormatter(sourceFilePath, tokenName);
        }
    }]);

    function ImportFormatter(sourceFilePath, tokenName) {
        _classCallCheck(this, ImportFormatter);

        Object.assign(this, { sourceFilePath: sourceFilePath, tokenName: tokenName });
    }

    _createClass(ImportFormatter, [{
        key: 'format',
        value: function format(targets) {
            var _this = this;

            return targets.map(function (t) {
                return _Import2.default.createDefault(_this.tokenName, _this.resolvePathTo(t));
            });
        }
    }, {
        key: 'formatPackages',
        value: function formatPackages(targets) {
            var _this2 = this;

            return targets.map(function (p) {
                return _Import2.default.createDefault(_this2.tokenName, p);
            });
        }
    }, {
        key: 'getSourceFolder',
        value: function getSourceFolder() {
            return _path2.default.dirname(this.sourceFilePath);
        }
    }, {
        key: 'resolvePathTo',
        value: function resolvePathTo(target) {
            return this.normalizePath(_path2.default.relative(this.getSourceFolder(), target));
        }
    }, {
        key: 'normalizePath',
        value: function normalizePath(path) {
            var normalizedPath = path.replace(/\\/g, '/');
            if (normalizedPath.charAt(0) !== '.') {
                normalizedPath = './' + normalizedPath;
            }
            return this.trimExtension(normalizedPath);
        }
    }, {
        key: 'trimExtension',
        value: function trimExtension(path) {
            var _this3 = this;

            var trimmableExtensions = ['.js', '.jsx', '.json'];

            return trimmableExtensions.reduce(function (p, ext) {
                return _this3.trim(p, ext);
            }, path);
        }
    }, {
        key: 'trim',
        value: function trim(string, suffix) {
            if (string.indexOf(suffix) === string.length - suffix.length) {
                return string.substr(0, string.length - suffix.length);
            }
            return string;
        }
    }]);

    return ImportFormatter;
}();

exports.default = ImportFormatter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnRGb3JtYXR0ZXIuanMiXSwibmFtZXMiOlsiSW1wb3J0Rm9ybWF0dGVyIiwic291cmNlRmlsZVBhdGgiLCJ0b2tlbk5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXRzIiwibWFwIiwidCIsImNyZWF0ZURlZmF1bHQiLCJyZXNvbHZlUGF0aFRvIiwicCIsImRpcm5hbWUiLCJ0YXJnZXQiLCJub3JtYWxpemVQYXRoIiwicmVsYXRpdmUiLCJnZXRTb3VyY2VGb2xkZXIiLCJwYXRoIiwibm9ybWFsaXplZFBhdGgiLCJyZXBsYWNlIiwiY2hhckF0IiwidHJpbUV4dGVuc2lvbiIsInRyaW1tYWJsZUV4dGVuc2lvbnMiLCJyZWR1Y2UiLCJleHQiLCJ0cmltIiwic3RyaW5nIiwic3VmZml4IiwiaW5kZXhPZiIsImxlbmd0aCIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsZTs7O2lDQUNEQyxjLEVBQWdCQyxTLEVBQVc7QUFDdkMsbUJBQU8sSUFBSUYsZUFBSixDQUFvQkMsY0FBcEIsRUFBb0NDLFNBQXBDLENBQVA7QUFDSDs7O0FBRUQsNkJBQVlELGNBQVosRUFBNEJDLFNBQTVCLEVBQXVDO0FBQUE7O0FBQ25DQyxlQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQixFQUFFSCw4QkFBRixFQUFrQkMsb0JBQWxCLEVBQXBCO0FBQ0g7Ozs7K0JBRU1HLE8sRUFBUztBQUFBOztBQUNaLG1CQUFPQSxRQUFRQyxHQUFSLENBQVksVUFBQ0MsQ0FBRDtBQUFBLHVCQUFPLGlCQUFPQyxhQUFQLENBQXFCLE1BQUtOLFNBQTFCLEVBQXFDLE1BQUtPLGFBQUwsQ0FBbUJGLENBQW5CLENBQXJDLENBQVA7QUFBQSxhQUFaLENBQVA7QUFDSDs7O3VDQUVjRixPLEVBQVM7QUFBQTs7QUFDcEIsbUJBQU9BLFFBQVFDLEdBQVIsQ0FBWSxVQUFDSSxDQUFEO0FBQUEsdUJBQU8saUJBQU9GLGFBQVAsQ0FBcUIsT0FBS04sU0FBMUIsRUFBcUNRLENBQXJDLENBQVA7QUFBQSxhQUFaLENBQVA7QUFDSDs7OzBDQUVpQjtBQUNkLG1CQUFPLGVBQUtDLE9BQUwsQ0FBYSxLQUFLVixjQUFsQixDQUFQO0FBQ0g7OztzQ0FFYVcsTSxFQUFRO0FBQ2xCLG1CQUFPLEtBQUtDLGFBQUwsQ0FBbUIsZUFBS0MsUUFBTCxDQUFjLEtBQUtDLGVBQUwsRUFBZCxFQUFzQ0gsTUFBdEMsQ0FBbkIsQ0FBUDtBQUNIOzs7c0NBRWFJLEksRUFBTTtBQUNoQixnQkFBSUMsaUJBQWlCRCxLQUFLRSxPQUFMLENBQWEsS0FBYixFQUFvQixHQUFwQixDQUFyQjtBQUNBLGdCQUFJRCxlQUFlRSxNQUFmLENBQXNCLENBQXRCLE1BQTZCLEdBQWpDLEVBQXNDO0FBQ2xDRix3Q0FBc0JBLGNBQXRCO0FBQ0g7QUFDRCxtQkFBTyxLQUFLRyxhQUFMLENBQW1CSCxjQUFuQixDQUFQO0FBQ0g7OztzQ0FFYUQsSSxFQUFNO0FBQUE7O0FBQ2hCLGdCQUFNSyxzQkFBc0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixPQUFoQixDQUE1Qjs7QUFFQSxtQkFBT0Esb0JBQW9CQyxNQUFwQixDQUEyQixVQUFDWixDQUFELEVBQUlhLEdBQUo7QUFBQSx1QkFBWSxPQUFLQyxJQUFMLENBQVVkLENBQVYsRUFBYWEsR0FBYixDQUFaO0FBQUEsYUFBM0IsRUFBMERQLElBQTFELENBQVA7QUFDSDs7OzZCQUVJUyxNLEVBQVFDLE0sRUFBUTtBQUNqQixnQkFBSUQsT0FBT0UsT0FBUCxDQUFlRCxNQUFmLE1BQTJCRCxPQUFPRyxNQUFQLEdBQWdCRixPQUFPRSxNQUF0RCxFQUE4RDtBQUMxRCx1QkFBT0gsT0FBT0ksTUFBUCxDQUFjLENBQWQsRUFBaUJKLE9BQU9HLE1BQVAsR0FBZ0JGLE9BQU9FLE1BQXhDLENBQVA7QUFDSDtBQUNELG1CQUFPSCxNQUFQO0FBQ0g7Ozs7OztrQkE1Q2dCekIsZSIsImZpbGUiOiJJbXBvcnRGb3JtYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1wb3J0IGZyb20gJy4vSW1wb3J0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBvcnRGb3JtYXR0ZXIge1xuICAgIHN0YXRpYyBmcm9tUGF0aChzb3VyY2VGaWxlUGF0aCwgdG9rZW5OYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW1wb3J0Rm9ybWF0dGVyKHNvdXJjZUZpbGVQYXRoLCB0b2tlbk5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZUZpbGVQYXRoLCB0b2tlbk5hbWUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNvdXJjZUZpbGVQYXRoLCB0b2tlbk5hbWUgfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KHRhcmdldHMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldHMubWFwKCh0KSA9PiBJbXBvcnQuY3JlYXRlRGVmYXVsdCh0aGlzLnRva2VuTmFtZSwgdGhpcy5yZXNvbHZlUGF0aFRvKHQpKSk7XG4gICAgfVxuXG4gICAgZm9ybWF0UGFja2FnZXModGFyZ2V0cykge1xuICAgICAgICByZXR1cm4gdGFyZ2V0cy5tYXAoKHApID0+IEltcG9ydC5jcmVhdGVEZWZhdWx0KHRoaXMudG9rZW5OYW1lLCBwKSk7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gcGF0aC5kaXJuYW1lKHRoaXMuc291cmNlRmlsZVBhdGgpO1xuICAgIH1cblxuICAgIHJlc29sdmVQYXRoVG8odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aC5yZWxhdGl2ZSh0aGlzLmdldFNvdXJjZUZvbGRlcigpLCB0YXJnZXQpKTtcbiAgICB9XG5cbiAgICBub3JtYWxpemVQYXRoKHBhdGgpIHtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWRQYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICAgIGlmIChub3JtYWxpemVkUGF0aC5jaGFyQXQoMCkgIT09ICcuJykge1xuICAgICAgICAgICAgbm9ybWFsaXplZFBhdGggPSBgLi8ke25vcm1hbGl6ZWRQYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJpbUV4dGVuc2lvbihub3JtYWxpemVkUGF0aCk7XG4gICAgfVxuXG4gICAgdHJpbUV4dGVuc2lvbihwYXRoKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tYWJsZUV4dGVuc2lvbnMgPSBbJy5qcycsICcuanN4JywgJy5qc29uJ107XG5cbiAgICAgICAgcmV0dXJuIHRyaW1tYWJsZUV4dGVuc2lvbnMucmVkdWNlKChwLCBleHQpID0+IHRoaXMudHJpbShwLCBleHQpLCBwYXRoKTtcbiAgICB9XG5cbiAgICB0cmltKHN0cmluZywgc3VmZml4KSB7XG4gICAgICAgIGlmIChzdHJpbmcuaW5kZXhPZihzdWZmaXgpID09PSBzdHJpbmcubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxufVxuIl19