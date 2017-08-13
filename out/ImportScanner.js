'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _PackageScanner = require('./PackageScanner');

var _PackageScanner2 = _interopRequireDefault(_PackageScanner);

var _RootFolderWalker = require('./RootFolderWalker');

var _RootFolderWalker2 = _interopRequireDefault(_RootFolderWalker);

var _ImportFormatter = require('./ImportFormatter');

var _ImportFormatter2 = _interopRequireDefault(_ImportFormatter);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var readdir = _bluebird2.default.promisify(_fs2.default.readdir);
var stat = _bluebird2.default.promisify(_fs2.default.stat);

var ImportScanner = function () {
    _createClass(ImportScanner, null, [{
        key: 'create',
        value: function create(filePath, token, onProgress, config) {
            (0, _assert2.default)(filePath);
            (0, _assert2.default)(token);
            (0, _assert2.default)(onProgress);
            (0, _assert2.default)(config);
            return new ImportScanner(filePath, token, onProgress, config);
        }
    }]);

    function ImportScanner(filePath, token, onProgress, config) {
        _classCallCheck(this, ImportScanner);

        Object.assign(this, { filePath: filePath, token: token, onProgress: onProgress, config: config });
        this.files = [];
        this.formatter = new _ImportFormatter2.default(this.filePath, token);
    }

    _createClass(ImportScanner, [{
        key: 'start',
        value: function start() {
            var _this = this;

            return this.scanPackages().then(function () {
                return _this.getScanFolder();
            }).then(function (rootFolder) {
                return _this.scanDir(rootFolder);
            }).then(function () {
                return _this.getProgress();
            });
        }
    }, {
        key: 'getRootFolder',
        value: function getRootFolder() {
            return new _RootFolderWalker2.default(_path2.default.dirname(this.filePath)).getRootFolder();
        }
    }, {
        key: 'getScanFolder',
        value: function getScanFolder() {
            if (this.config.getRootFolder()) {
                return Promise.resolve(this.config.getRootFolder());
            }
            return this.getRootFolder();
        }
    }, {
        key: 'scanPackages',
        value: function scanPackages() {
            var _this2 = this;

            return this.getRootFolder().then(function (rootFolder) {
                return _PackageScanner2.default.fromFilePath(rootFolder).getPackageList();
            }).then(function (packages) {
                _this2.setPackages(packages);
            });
        }
    }, {
        key: 'setPackages',
        value: function setPackages(packages) {
            var _this3 = this;

            this.packages = packages.filter(function (p) {
                return _this3.matchesTokenName(p);
            });
            this.emitProgress();
        }
    }, {
        key: 'foundFile',
        value: function foundFile(file) {
            this.files.push(file);
            this.emitProgress();
        }
    }, {
        key: 'emitProgress',
        value: function emitProgress() {
            this.onProgress(this.getProgress());
        }
    }, {
        key: 'getProgress',
        value: function getProgress() {
            return [].concat(_toConsumableArray(this.formatter.formatPackages(this.packages)), _toConsumableArray(this.formatter.format(this.files)));
        }
    }, {
        key: 'checkFile',
        value: function checkFile(file) {
            var ext = _path2.default.extname(file);
            var basename = _path2.default.basename(file, ext);
            if (this.matchesTokenName(basename) && this.matchesExtension(ext)) {
                this.foundFile(file);
            }
        }
    }, {
        key: 'matchesTokenName',
        value: function matchesTokenName(name) {
            return this.normalizeTokenName(name) === this.normalizeTokenName(this.token);
        }
    }, {
        key: 'matchesExtension',
        value: function matchesExtension(ext) {
            return ['.js', '.jsx'].indexOf(ext) > -1;
        }
    }, {
        key: 'normalizeTokenName',
        value: function normalizeTokenName(token) {
            return token.replace(/[^a-z0-9]/gi, '').toLowerCase();
        }
    }, {
        key: 'processNode',
        value: function processNode(absPath) {
            var _this4 = this;

            return stat(absPath).then(function (stat) {
                if (stat.isFile()) {
                    return _this4.checkFile(absPath);
                } else if (stat.isDirectory() && !_this4.isIgnored(absPath)) {
                    return _this4.scanDir(absPath);
                }
            });
        }
    }, {
        key: 'isIgnored',
        value: function isIgnored(folderPath) {
            var folderName = _path2.default.basename(folderPath);
            return this.config.getIgnoredFolders().indexOf(folderName) > -1;
        }
    }, {
        key: 'scanDir',
        value: function scanDir(dir) {
            var _this5 = this;

            return readdir(dir).then(function (files) {
                return _bluebird2.default.mapSeries(files, function (file) {
                    return _this5.processNode(_path2.default.join(dir, file));
                });
            });
        }
    }]);

    return ImportScanner;
}();

exports.default = ImportScanner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnRTY2FubmVyLmpzIl0sIm5hbWVzIjpbInJlYWRkaXIiLCJwcm9taXNpZnkiLCJzdGF0IiwiSW1wb3J0U2Nhbm5lciIsImZpbGVQYXRoIiwidG9rZW4iLCJvblByb2dyZXNzIiwiY29uZmlnIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsZXMiLCJmb3JtYXR0ZXIiLCJzY2FuUGFja2FnZXMiLCJ0aGVuIiwiZ2V0U2NhbkZvbGRlciIsInJvb3RGb2xkZXIiLCJzY2FuRGlyIiwiZ2V0UHJvZ3Jlc3MiLCJkaXJuYW1lIiwiZ2V0Um9vdEZvbGRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbUZpbGVQYXRoIiwiZ2V0UGFja2FnZUxpc3QiLCJwYWNrYWdlcyIsInNldFBhY2thZ2VzIiwiZmlsdGVyIiwibWF0Y2hlc1Rva2VuTmFtZSIsInAiLCJlbWl0UHJvZ3Jlc3MiLCJmaWxlIiwicHVzaCIsImZvcm1hdFBhY2thZ2VzIiwiZm9ybWF0IiwiZXh0IiwiZXh0bmFtZSIsImJhc2VuYW1lIiwibWF0Y2hlc0V4dGVuc2lvbiIsImZvdW5kRmlsZSIsIm5hbWUiLCJub3JtYWxpemVUb2tlbk5hbWUiLCJpbmRleE9mIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiYWJzUGF0aCIsImlzRmlsZSIsImNoZWNrRmlsZSIsImlzRGlyZWN0b3J5IiwiaXNJZ25vcmVkIiwiZm9sZGVyUGF0aCIsImZvbGRlck5hbWUiLCJnZXRJZ25vcmVkRm9sZGVycyIsImRpciIsIm1hcFNlcmllcyIsInByb2Nlc3NOb2RlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsbUJBQVNDLFNBQVQsQ0FBbUIsYUFBR0QsT0FBdEIsQ0FBaEI7QUFDQSxJQUFNRSxPQUFPLG1CQUFTRCxTQUFULENBQW1CLGFBQUdDLElBQXRCLENBQWI7O0lB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LENBREU7QUFBQSxhQURILENBQVA7QUFJSDs7Ozs7O2tCQXhHZ0IzQixhIiwiZmlsZSI6IkltcG9ydFNjYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFBhY2thZ2VTY2FubmVyIGZyb20gJy4vUGFja2FnZVNjYW5uZXInO1xuaW1wb3J0IFJvb3RGb2xkZXJXYWxrZXIgZnJvbSAnLi9Sb290Rm9sZGVyV2Fsa2VyJztcbmltcG9ydCBJbXBvcnRGb3JtYXR0ZXIgZnJvbSAnLi9JbXBvcnRGb3JtYXR0ZXInO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5jb25zdCByZWFkZGlyID0gYmx1ZWJpcmQucHJvbWlzaWZ5KGZzLnJlYWRkaXIpO1xuY29uc3Qgc3RhdCA9IGJsdWViaXJkLnByb21pc2lmeShmcy5zdGF0KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0U2Nhbm5lciB7XG4gICAgc3RhdGljIGNyZWF0ZShmaWxlUGF0aCwgdG9rZW4sIG9uUHJvZ3Jlc3MsIGNvbmZpZykge1xuICAgICAgICBhc3NlcnQoZmlsZVBhdGgpO1xuICAgICAgICBhc3NlcnQodG9rZW4pO1xuICAgICAgICBhc3NlcnQob25Qcm9ncmVzcyk7XG4gICAgICAgIGFzc2VydChjb25maWcpO1xuICAgICAgICByZXR1cm4gbmV3IEltcG9ydFNjYW5uZXIoZmlsZVBhdGgsIHRva2VuLCBvblByb2dyZXNzLCBjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGZpbGVQYXRoLCB0b2tlbiwgb25Qcm9ncmVzcywgY29uZmlnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBmaWxlUGF0aCwgdG9rZW4sIG9uUHJvZ3Jlc3MsIGNvbmZpZyB9KTtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmZvcm1hdHRlciA9IG5ldyBJbXBvcnRGb3JtYXR0ZXIodGhpcy5maWxlUGF0aCwgdG9rZW4pO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FuUGFja2FnZXMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRTY2FuRm9sZGVyKCkpXG4gICAgICAgICAgICAudGhlbigocm9vdEZvbGRlcikgPT4gdGhpcy5zY2FuRGlyKHJvb3RGb2xkZXIpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRQcm9ncmVzcygpKTtcbiAgICB9XG5cbiAgICBnZXRSb290Rm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJvb3RGb2xkZXJXYWxrZXIocGF0aC5kaXJuYW1lKHRoaXMuZmlsZVBhdGgpKVxuICAgICAgICAgICAgLmdldFJvb3RGb2xkZXIoKTtcbiAgICB9XG5cbiAgICBnZXRTY2FuRm9sZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZ2V0Um9vdEZvbGRlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29uZmlnLmdldFJvb3RGb2xkZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Um9vdEZvbGRlcigpO1xuICAgIH1cblxuICAgIHNjYW5QYWNrYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Um9vdEZvbGRlcigpXG4gICAgICAgICAgICAudGhlbihyb290Rm9sZGVyID0+IFBhY2thZ2VTY2FubmVyLmZyb21GaWxlUGF0aChyb290Rm9sZGVyKS5nZXRQYWNrYWdlTGlzdCgpKVxuICAgICAgICAgICAgLnRoZW4oKHBhY2thZ2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYWNrYWdlcyhwYWNrYWdlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRQYWNrYWdlcyhwYWNrYWdlcykge1xuICAgICAgICB0aGlzLnBhY2thZ2VzID0gcGFja2FnZXMuZmlsdGVyKHAgPT4gdGhpcy5tYXRjaGVzVG9rZW5OYW1lKHApKTtcbiAgICAgICAgdGhpcy5lbWl0UHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBmb3VuZEZpbGUoZmlsZSkge1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIHRoaXMuZW1pdFByb2dyZXNzKCk7XG4gICAgfVxuXG4gICAgZW1pdFByb2dyZXNzKCkge1xuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3ModGhpcy5nZXRQcm9ncmVzcygpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybWF0dGVyLmZvcm1hdFBhY2thZ2VzKHRoaXMucGFja2FnZXMpLFxuICAgICAgICAgICAgLi4udGhpcy5mb3JtYXR0ZXIuZm9ybWF0KHRoaXMuZmlsZXMpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNoZWNrRmlsZShmaWxlKSB7XG4gICAgICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShmaWxlKTtcbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGUsIGV4dCk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoZXNUb2tlbk5hbWUoYmFzZW5hbWUpICYmIHRoaXMubWF0Y2hlc0V4dGVuc2lvbihleHQpKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kRmlsZShmaWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdGNoZXNUb2tlbk5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVUb2tlbk5hbWUobmFtZSkgPT09IHRoaXMubm9ybWFsaXplVG9rZW5OYW1lKHRoaXMudG9rZW4pO1xuICAgIH1cblxuICAgIG1hdGNoZXNFeHRlbnNpb24oZXh0KSB7XG4gICAgICAgIHJldHVybiBbJy5qcycsICcuanN4J10uaW5kZXhPZihleHQpID4gLTE7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplVG9rZW5OYW1lKHRva2VuKSB7XG4gICAgICAgIHJldHVybiB0b2tlbi5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHByb2Nlc3NOb2RlKGFic1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXQoYWJzUGF0aClcbiAgICAgICAgICAgIC50aGVuKChzdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGaWxlKGFic1BhdGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpICYmICF0aGlzLmlzSWdub3JlZChhYnNQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FuRGlyKGFic1BhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzSWdub3JlZChmb2xkZXJQYXRoKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBwYXRoLmJhc2VuYW1lKGZvbGRlclBhdGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0SWdub3JlZEZvbGRlcnMoKS5pbmRleE9mKGZvbGRlck5hbWUpID4gLTE7XG4gICAgfVxuXG4gICAgc2NhbkRpcihkaXIpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRkaXIoZGlyKVxuICAgICAgICAgICAgLnRoZW4oKGZpbGVzKSA9PlxuICAgICAgICAgICAgICAgIGJsdWViaXJkLm1hcFNlcmllcyhmaWxlcyxcbiAgICAgICAgICAgICAgICAgICAgKGZpbGUpID0+IHRoaXMucHJvY2Vzc05vZGUocGF0aC5qb2luKGRpciwgZmlsZSkpKSk7XG4gICAgfVxufVxuIl19