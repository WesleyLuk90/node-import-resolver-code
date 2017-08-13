'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _builtinModules = require('builtin-modules');

var _builtinModules2 = _interopRequireDefault(_builtinModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var readFile = _bluebird2.default.promisify(_fs2.default.readFile);

var PackageScanner = function () {
    _createClass(PackageScanner, null, [{
        key: 'fromFilePath',
        value: function fromFilePath(filePath) {
            return new PackageScanner(filePath);
        }
    }]);

    function PackageScanner(filePath) {
        _classCallCheck(this, PackageScanner);

        Object.assign(this, { filePath: filePath });
    }

    _createClass(PackageScanner, [{
        key: 'getPackageList',
        value: function getPackageList() {
            var _this = this;

            return readFile(_path2.default.join(this.filePath, 'package.json'), 'UTF-8').then(function (file) {
                var packageFile = JSON.parse(file);
                return [].concat(_toConsumableArray(_this.getKeyAsArray(packageFile, 'dependencies')), _toConsumableArray(_this.getKeyAsArray(packageFile, 'devDependencies')), _toConsumableArray(_builtinModules2.default));
            }).catch(function () {
                return [];
            });
        }
    }, {
        key: 'getKeyAsArray',
        value: function getKeyAsArray(object, key) {
            if (!object[key]) {
                return [];
            }
            return Object.keys(object[key]);
        }
    }]);

    return PackageScanner;
}();

exports.default = PackageScanner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWNrYWdlU2Nhbm5lci5qcyJdLCJuYW1lcyI6WyJyZWFkRmlsZSIsInByb21pc2lmeSIsIlBhY2thZ2VTY2FubmVyIiwiZmlsZVBhdGgiLCJPYmplY3QiLCJhc3NpZ24iLCJqb2luIiwidGhlbiIsImZpbGUiLCJwYWNrYWdlRmlsZSIsIkpTT04iLCJwYXJzZSIsImdldEtleUFzQXJyYXkiLCJjYXRjaCIsIm9iamVjdCIsImtleSIsImtleXMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsbUJBQVNDLFNBQVQsQ0FBbUIsYUFBR0QsUUFBdEIsQ0FBakI7O0lBRXFCRSxjOzs7cUNBQ0dDLFEsRUFBVTtBQUMxQixtQkFBTyxJQUFJRCxjQUFKLENBQW1CQyxRQUFuQixDQUFQO0FBQ0g7OztBQUVELDRCQUFZQSxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCQyxlQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQixFQUFFRixrQkFBRixFQUFwQjtBQUNIOzs7O3lDQUVnQjtBQUFBOztBQUNiLG1CQUFPSCxTQUFTLGVBQUtNLElBQUwsQ0FBVSxLQUFLSCxRQUFmLEVBQXlCLGNBQXpCLENBQVQsRUFBbUQsT0FBbkQsRUFDRkksSUFERSxDQUNHLFVBQUNDLElBQUQsRUFBVTtBQUNaLG9CQUFNQyxjQUFjQyxLQUFLQyxLQUFMLENBQVdILElBQVgsQ0FBcEI7QUFDQSxvREFDTyxNQUFLSSxhQUFMLENBQW1CSCxXQUFuQixFQUFnQyxjQUFoQyxDQURQLHNCQUVPLE1BQUtHLGFBQUwsQ0FBbUJILFdBQW5CLEVBQWdDLGlCQUFoQyxDQUZQO0FBS0gsYUFSRSxFQVNGSSxLQVRFLENBU0k7QUFBQSx1QkFBTSxFQUFOO0FBQUEsYUFUSixDQUFQO0FBVUg7OztzQ0FFYUMsTSxFQUFRQyxHLEVBQUs7QUFDdkIsZ0JBQUksQ0FBQ0QsT0FBT0MsR0FBUCxDQUFMLEVBQWtCO0FBQ2QsdUJBQU8sRUFBUDtBQUNIO0FBQ0QsbUJBQU9YLE9BQU9ZLElBQVAsQ0FBWUYsT0FBT0MsR0FBUCxDQUFaLENBQVA7QUFDSDs7Ozs7O2tCQTNCZ0JiLGMiLCJmaWxlIjoiUGFja2FnZVNjYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IGJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBidWlsdGluTW9kdWxlcyBmcm9tICdidWlsdGluLW1vZHVsZXMnO1xuXG5jb25zdCByZWFkRmlsZSA9IGJsdWViaXJkLnByb21pc2lmeShmcy5yZWFkRmlsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2thZ2VTY2FubmVyIHtcbiAgICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUGFja2FnZVNjYW5uZXIoZmlsZVBhdGgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGZpbGVQYXRoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBmaWxlUGF0aCB9KTtcbiAgICB9XG5cbiAgICBnZXRQYWNrYWdlTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRGaWxlKHBhdGguam9pbih0aGlzLmZpbGVQYXRoLCAncGFja2FnZS5qc29uJyksICdVVEYtOCcpXG4gICAgICAgICAgICAudGhlbigoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhY2thZ2VGaWxlID0gSlNPTi5wYXJzZShmaWxlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmdldEtleUFzQXJyYXkocGFja2FnZUZpbGUsICdkZXBlbmRlbmNpZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRLZXlBc0FycmF5KHBhY2thZ2VGaWxlLCAnZGV2RGVwZW5kZW5jaWVzJyksXG4gICAgICAgICAgICAgICAgICAgIC4uLmJ1aWx0aW5Nb2R1bGVzLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IFtdKTtcbiAgICB9XG5cbiAgICBnZXRLZXlBc0FycmF5KG9iamVjdCwga2V5KSB7XG4gICAgICAgIGlmICghb2JqZWN0W2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0W2tleV0pO1xuICAgIH1cbn1cbiJdfQ==