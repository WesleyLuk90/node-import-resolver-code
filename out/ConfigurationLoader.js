'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = require('./Configuration');

var _Configuration2 = _interopRequireDefault(_Configuration);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
var stat = _bluebird2.default.promisify(_fs2.default.stat);

var ConfigurationLoader = function () {
    _createClass(ConfigurationLoader, null, [{
        key: 'fromFilePath',
        value: function fromFilePath(filePath) {
            (0, _assert2.default)(filePath);
            return new ConfigurationLoader(filePath);
        }
    }]);

    function ConfigurationLoader(filePath) {
        _classCallCheck(this, ConfigurationLoader);

        Object.assign(this, { filePath: filePath });
    }

    _createClass(ConfigurationLoader, [{
        key: 'findConfig',
        value: function findConfig(folderPath) {
            var _this = this;

            var configPath = _path2.default.join(folderPath, '.node-import-resolverrc.yml');
            return stat(configPath).then(function (stat) {
                if (stat.isFile()) {
                    return configPath;
                }
                throw new Error('Not a file');
            }).catch(function (e) {
                if (_this.shouldContinue(folderPath)) {
                    return _this.findConfig(_path2.default.dirname(folderPath));
                }
                throw e;
            });
        }
    }, {
        key: 'shouldContinue',
        value: function shouldContinue(folderPath) {
            return folderPath != null && _path2.default.dirname(folderPath) !== folderPath;
        }
    }, {
        key: 'loadConfig',
        value: function loadConfig(filePath) {
            return readFile(filePath, 'utf-8').then(function (contents) {
                var configData = _jsYaml2.default.safeLoad(contents);
                var config = _Configuration2.default.createDefault().setImportStyle(configData.importStyle).setIgnoredFolders(configData.ignoredFolders);
                if (configData.rootFolder) {
                    config.setRootFolder(_path2.default.join(_path2.default.dirname(filePath), configData.rootFolder));
                }
                return config;
            });
        }
    }, {
        key: 'load',
        value: function load() {
            var _this2 = this;

            return this.findConfig(this.filePath).then(function (path) {
                return _this2.loadConfig(path);
            }, function () {
                return _Configuration2.default.createDefault();
            });
        }
    }]);

    return ConfigurationLoader;
}();

exports.default = ConfigurationLoader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWd1cmF0aW9uTG9hZGVyLmpzIl0sIm5hbWVzIjpbInJlYWRGaWxlIiwicHJvbWlzaWZ5Iiwic3RhdCIsIkNvbmZpZ3VyYXRpb25Mb2FkZXIiLCJmaWxlUGF0aCIsIk9iamVjdCIsImFzc2lnbiIsImZvbGRlclBhdGgiLCJjb25maWdQYXRoIiwiam9pbiIsInRoZW4iLCJpc0ZpbGUiLCJFcnJvciIsImNhdGNoIiwiZSIsInNob3VsZENvbnRpbnVlIiwiZmluZENvbmZpZyIsImRpcm5hbWUiLCJjb250ZW50cyIsImNvbmZpZ0RhdGEiLCJzYWZlTG9hZCIsImNvbmZpZyIsImNyZWF0ZURlZmF1bHQiLCJzZXRJbXBvcnRTdHlsZSIsImltcG9ydFN0eWxlIiwic2V0SWdub3JlZEZvbGRlcnMiLCJpZ25vcmVkRm9sZGVycyIsInJvb3RGb2xkZXIiLCJzZXRSb290Rm9sZGVyIiwibG9hZENvbmZpZyIsInBhdGgiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxtQkFBU0MsU0FBVCxDQUFtQixhQUFHRCxRQUF0QixDQUFqQjtBQUNBLElBQU1FLE9BQU8sbUJBQVNELFNBQVQsQ0FBbUIsYUFBR0MsSUFBdEIsQ0FBYjs7SUFFcUJDLG1COzs7cUNBQ0dDLFEsRUFBVTtBQUMxQixrQ0FBT0EsUUFBUDtBQUNBLG1CQUFPLElBQUlELG1CQUFKLENBQXdCQyxRQUF4QixDQUFQO0FBQ0g7OztBQUVELGlDQUFZQSxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCQyxlQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQixFQUFFRixrQkFBRixFQUFwQjtBQUNIOzs7O21DQUVVRyxVLEVBQVk7QUFBQTs7QUFDbkIsZ0JBQU1DLGFBQWEsZUFBS0MsSUFBTCxDQUFVRixVQUFWLEVBQXNCLDZCQUF0QixDQUFuQjtBQUNBLG1CQUFPTCxLQUFLTSxVQUFMLEVBQ0ZFLElBREUsQ0FDRyxVQUFDUixJQUFELEVBQVU7QUFDWixvQkFBSUEsS0FBS1MsTUFBTCxFQUFKLEVBQW1CO0FBQ2YsMkJBQU9ILFVBQVA7QUFDSDtBQUNELHNCQUFNLElBQUlJLEtBQUosQ0FBVSxZQUFWLENBQU47QUFDSCxhQU5FLEVBT0ZDLEtBUEUsQ0FPSSxVQUFDQyxDQUFELEVBQU87QUFDVixvQkFBSSxNQUFLQyxjQUFMLENBQW9CUixVQUFwQixDQUFKLEVBQXFDO0FBQ2pDLDJCQUFPLE1BQUtTLFVBQUwsQ0FBZ0IsZUFBS0MsT0FBTCxDQUFhVixVQUFiLENBQWhCLENBQVA7QUFDSDtBQUNELHNCQUFNTyxDQUFOO0FBQ0gsYUFaRSxDQUFQO0FBYUg7Ozt1Q0FFY1AsVSxFQUFZO0FBQ3ZCLG1CQUFPQSxjQUFjLElBQWQsSUFBc0IsZUFBS1UsT0FBTCxDQUFhVixVQUFiLE1BQTZCQSxVQUExRDtBQUNIOzs7bUNBRVVILFEsRUFBVTtBQUNqQixtQkFBT0osU0FBU0ksUUFBVCxFQUFtQixPQUFuQixFQUNGTSxJQURFLENBQ0csVUFBQ1EsUUFBRCxFQUFjO0FBQ2hCLG9CQUFNQyxhQUFhLGlCQUFPQyxRQUFQLENBQWdCRixRQUFoQixDQUFuQjtBQUNBLG9CQUFNRyxTQUFTLHdCQUFjQyxhQUFkLEdBQ1ZDLGNBRFUsQ0FDS0osV0FBV0ssV0FEaEIsRUFFVkMsaUJBRlUsQ0FFUU4sV0FBV08sY0FGbkIsQ0FBZjtBQUdBLG9CQUFJUCxXQUFXUSxVQUFmLEVBQTJCO0FBQ3ZCTiwyQkFBT08sYUFBUCxDQUFxQixlQUFLbkIsSUFBTCxDQUFVLGVBQUtRLE9BQUwsQ0FBYWIsUUFBYixDQUFWLEVBQWtDZSxXQUFXUSxVQUE3QyxDQUFyQjtBQUNIO0FBQ0QsdUJBQU9OLE1BQVA7QUFDSCxhQVZFLENBQVA7QUFXSDs7OytCQUVNO0FBQUE7O0FBQ0gsbUJBQU8sS0FBS0wsVUFBTCxDQUFnQixLQUFLWixRQUFyQixFQUNGTSxJQURFLENBQ0c7QUFBQSx1QkFBUSxPQUFLbUIsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBUjtBQUFBLGFBREgsRUFDa0M7QUFBQSx1QkFBTSx3QkFBY1IsYUFBZCxFQUFOO0FBQUEsYUFEbEMsQ0FBUDtBQUVIOzs7Ozs7a0JBaERnQm5CLG1CIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb25Mb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgYmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQganNZYW1sIGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuY29uc3QgcmVhZEZpbGUgPSBibHVlYmlyZC5wcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuY29uc3Qgc3RhdCA9IGJsdWViaXJkLnByb21pc2lmeShmcy5zdGF0KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJhdGlvbkxvYWRlciB7XG4gICAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCkge1xuICAgICAgICBhc3NlcnQoZmlsZVBhdGgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbmZpZ3VyYXRpb25Mb2FkZXIoZmlsZVBhdGgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGZpbGVQYXRoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBmaWxlUGF0aCB9KTtcbiAgICB9XG5cbiAgICBmaW5kQ29uZmlnKGZvbGRlclBhdGgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHBhdGguam9pbihmb2xkZXJQYXRoLCAnLm5vZGUtaW1wb3J0LXJlc29sdmVycmMueW1sJyk7XG4gICAgICAgIHJldHVybiBzdGF0KGNvbmZpZ1BhdGgpXG4gICAgICAgICAgICAudGhlbigoc3RhdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0LmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWdQYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIGZpbGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDb250aW51ZShmb2xkZXJQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kQ29uZmlnKHBhdGguZGlybmFtZShmb2xkZXJQYXRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG91bGRDb250aW51ZShmb2xkZXJQYXRoKSB7XG4gICAgICAgIHJldHVybiBmb2xkZXJQYXRoICE9IG51bGwgJiYgcGF0aC5kaXJuYW1lKGZvbGRlclBhdGgpICE9PSBmb2xkZXJQYXRoO1xuICAgIH1cblxuICAgIGxvYWRDb25maWcoZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKVxuICAgICAgICAgICAgLnRoZW4oKGNvbnRlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnRGF0YSA9IGpzWWFtbC5zYWZlTG9hZChjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gQ29uZmlndXJhdGlvbi5jcmVhdGVEZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgLnNldEltcG9ydFN0eWxlKGNvbmZpZ0RhdGEuaW1wb3J0U3R5bGUpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJZ25vcmVkRm9sZGVycyhjb25maWdEYXRhLmlnbm9yZWRGb2xkZXJzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnRGF0YS5yb290Rm9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zZXRSb290Rm9sZGVyKHBhdGguam9pbihwYXRoLmRpcm5hbWUoZmlsZVBhdGgpLCBjb25maWdEYXRhLnJvb3RGb2xkZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRDb25maWcodGhpcy5maWxlUGF0aClcbiAgICAgICAgICAgIC50aGVuKHBhdGggPT4gdGhpcy5sb2FkQ29uZmlnKHBhdGgpLCAoKSA9PiBDb25maWd1cmF0aW9uLmNyZWF0ZURlZmF1bHQoKSk7XG4gICAgfVxufVxuIl19