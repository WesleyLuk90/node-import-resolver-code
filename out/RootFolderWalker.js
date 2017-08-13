'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stat = _bluebird2.default.promisify(_fs2.default.stat);

var RootFolderWalker = function () {
    _createClass(RootFolderWalker, null, [{
        key: 'fromFile',
        value: function fromFile(filePath) {
            return new RootFolderWalker(filePath);
        }
    }]);

    function RootFolderWalker(filePath) {
        _classCallCheck(this, RootFolderWalker);

        Object.assign(this, { filePath: filePath });
    }

    _createClass(RootFolderWalker, [{
        key: 'getRootFolder',
        value: function getRootFolder() {
            var _this = this;

            return this.walkFolders(this.filePath).catch(function () {
                return _this.defaultPath();
            });
        }
    }, {
        key: 'walkFolders',
        value: function walkFolders(folderPath) {
            var _this2 = this;

            return this.isRootFolder(folderPath).then(function (isRoot) {
                if (isRoot) {
                    return folderPath;
                } else if (_this2.shouldStop(folderPath)) {
                    throw new Error('Failed to find root folder');
                } else {
                    return _this2.walkFolders(_path2.default.dirname(folderPath));
                }
            });
        }
    }, {
        key: 'defaultPath',
        value: function defaultPath() {
            var paths = _Editor2.default.getWorkspaceFolders();
            if (paths.length === 0) {
                throw new Error('No project paths');
            }
            return paths[0];
        }
    }, {
        key: 'shouldStop',
        value: function shouldStop(folderPath) {
            return !folderPath || _path2.default.dirname(folderPath) === folderPath;
        }
    }, {
        key: 'isRootFolder',
        value: function isRootFolder(folderPath) {
            var packagePath = _path2.default.join(folderPath, "package.json");
            return stat(packagePath).then(function (fileStat) {
                return fileStat.isFile();
            }).catch(function () {
                return false;
            });
        }
    }]);

    return RootFolderWalker;
}();

exports.default = RootFolderWalker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Sb290Rm9sZGVyV2Fsa2VyLmpzIl0sIm5hbWVzIjpbInN0YXQiLCJwcm9taXNpZnkiLCJSb290Rm9sZGVyV2Fsa2VyIiwiZmlsZVBhdGgiLCJPYmplY3QiLCJhc3NpZ24iLCJ3YWxrRm9sZGVycyIsImNhdGNoIiwiZGVmYXVsdFBhdGgiLCJmb2xkZXJQYXRoIiwiaXNSb290Rm9sZGVyIiwidGhlbiIsImlzUm9vdCIsInNob3VsZFN0b3AiLCJFcnJvciIsImRpcm5hbWUiLCJwYXRocyIsImdldFdvcmtzcGFjZUZvbGRlcnMiLCJsZW5ndGgiLCJwYWNrYWdlUGF0aCIsImpvaW4iLCJmaWxlU3RhdCIsImlzRmlsZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sbUJBQVNDLFNBQVQsQ0FBbUIsYUFBR0QsSUFBdEIsQ0FBYjs7SUFFcUJFLGdCOzs7aUNBQ0RDLFEsRUFBVTtBQUN0QixtQkFBTyxJQUFJRCxnQkFBSixDQUFxQkMsUUFBckIsQ0FBUDtBQUNIOzs7QUFFRCw4QkFBWUEsUUFBWixFQUFzQjtBQUFBOztBQUNsQkMsZUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRUYsa0JBQUYsRUFBcEI7QUFDSDs7Ozt3Q0FFZTtBQUFBOztBQUNaLG1CQUFPLEtBQUtHLFdBQUwsQ0FBaUIsS0FBS0gsUUFBdEIsRUFDRkksS0FERSxDQUNJLFlBQU07QUFDVCx1QkFBTyxNQUFLQyxXQUFMLEVBQVA7QUFDSCxhQUhFLENBQVA7QUFJSDs7O29DQUVXQyxVLEVBQVk7QUFBQTs7QUFDcEIsbUJBQU8sS0FBS0MsWUFBTCxDQUFrQkQsVUFBbEIsRUFDRkUsSUFERSxDQUNHLFVBQUNDLE1BQUQsRUFBWTtBQUNkLG9CQUFJQSxNQUFKLEVBQVk7QUFDUiwyQkFBT0gsVUFBUDtBQUNILGlCQUZELE1BRU8sSUFBSSxPQUFLSSxVQUFMLENBQWdCSixVQUFoQixDQUFKLEVBQWlDO0FBQ3BDLDBCQUFNLElBQUlLLEtBQUosOEJBQU47QUFDSCxpQkFGTSxNQUVBO0FBQ0gsMkJBQU8sT0FBS1IsV0FBTCxDQUFpQixlQUFLUyxPQUFMLENBQWFOLFVBQWIsQ0FBakIsQ0FBUDtBQUNIO0FBQ0osYUFURSxDQUFQO0FBVUg7OztzQ0FFYTtBQUNWLGdCQUFNTyxRQUFRLGlCQUFPQyxtQkFBUCxFQUFkO0FBQ0EsZ0JBQUlELE1BQU1FLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIsc0JBQU0sSUFBSUosS0FBSixvQkFBTjtBQUNIO0FBQ0QsbUJBQU9FLE1BQU0sQ0FBTixDQUFQO0FBQ0g7OzttQ0FFVVAsVSxFQUFZO0FBQ25CLG1CQUFPLENBQUNBLFVBQUQsSUFBZSxlQUFLTSxPQUFMLENBQWFOLFVBQWIsTUFBNkJBLFVBQW5EO0FBQ0g7OztxQ0FFWUEsVSxFQUFZO0FBQ3JCLGdCQUFNVSxjQUFjLGVBQUtDLElBQUwsQ0FBVVgsVUFBVixFQUFzQixjQUF0QixDQUFwQjtBQUNBLG1CQUFPVCxLQUFLbUIsV0FBTCxFQUNGUixJQURFLENBQ0c7QUFBQSx1QkFBWVUsU0FBU0MsTUFBVCxFQUFaO0FBQUEsYUFESCxFQUVGZixLQUZFLENBRUk7QUFBQSx1QkFBTSxLQUFOO0FBQUEsYUFGSixDQUFQO0FBR0g7Ozs7OztrQkE5Q2dCTCxnQiIsImZpbGUiOiJSb290Rm9sZGVyV2Fsa2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJztcblxuY29uc3Qgc3RhdCA9IGJsdWViaXJkLnByb21pc2lmeShmcy5zdGF0KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vdEZvbGRlcldhbGtlciB7XG4gICAgc3RhdGljIGZyb21GaWxlKGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUm9vdEZvbGRlcldhbGtlcihmaWxlUGF0aCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZmlsZVBhdGgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IGZpbGVQYXRoIH0pO1xuICAgIH1cblxuICAgIGdldFJvb3RGb2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGtGb2xkZXJzKHRoaXMuZmlsZVBhdGgpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQYXRoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3YWxrRm9sZGVycyhmb2xkZXJQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUm9vdEZvbGRlcihmb2xkZXJQYXRoKVxuICAgICAgICAgICAgLnRoZW4oKGlzUm9vdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlclBhdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZFN0b3AoZm9sZGVyUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmluZCByb290IGZvbGRlcmApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGtGb2xkZXJzKHBhdGguZGlybmFtZShmb2xkZXJQYXRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gRWRpdG9yLmdldFdvcmtzcGFjZUZvbGRlcnMoKTtcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwcm9qZWN0IHBhdGhzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhzWzBdO1xuICAgIH1cblxuICAgIHNob3VsZFN0b3AoZm9sZGVyUGF0aCkge1xuICAgICAgICByZXR1cm4gIWZvbGRlclBhdGggfHwgcGF0aC5kaXJuYW1lKGZvbGRlclBhdGgpID09PSBmb2xkZXJQYXRoO1xuICAgIH1cblxuICAgIGlzUm9vdEZvbGRlcihmb2xkZXJQYXRoKSB7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gcGF0aC5qb2luKGZvbGRlclBhdGgsIFwicGFja2FnZS5qc29uXCIpO1xuICAgICAgICByZXR1cm4gc3RhdChwYWNrYWdlUGF0aClcbiAgICAgICAgICAgIC50aGVuKGZpbGVTdGF0ID0+IGZpbGVTdGF0LmlzRmlsZSgpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbiAgICB9XG59XG4iXX0=