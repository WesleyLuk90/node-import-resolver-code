'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWd1cmF0aW9uTG9hZGVyLmpzIl0sIm5hbWVzIjpbInJlYWRGaWxlIiwicHJvbWlzaWZ5Iiwic3RhdCIsIkNvbmZpZ3VyYXRpb25Mb2FkZXIiLCJmaWxlUGF0aCIsIk9iamVjdCIsImFzc2lnbiIsImZvbGRlclBhdGgiLCJjb25maWdQYXRoIiwiam9pbiIsInRoZW4iLCJpc0ZpbGUiLCJFcnJvciIsImNhdGNoIiwiZSIsInNob3VsZENvbnRpbnVlIiwiZmluZENvbmZpZyIsImRpcm5hbWUiLCJjb250ZW50cyIsImNvbmZpZ0RhdGEiLCJzYWZlTG9hZCIsImNvbmZpZyIsImNyZWF0ZURlZmF1bHQiLCJzZXRJbXBvcnRTdHlsZSIsImltcG9ydFN0eWxlIiwic2V0SWdub3JlZEZvbGRlcnMiLCJpZ25vcmVkRm9sZGVycyIsInJvb3RGb2xkZXIiLCJzZXRSb290Rm9sZGVyIiwibG9hZENvbmZpZyIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFdBQVcsbUJBQVNDLFNBQVQsQ0FBbUIsYUFBR0QsUUFBdEIsQ0FBakI7QUFDQSxJQUFNRSxPQUFPLG1CQUFTRCxTQUFULENBQW1CLGFBQUdDLElBQXRCLENBQWI7O0lBRXFCQyxtQjs7O3FDQUNHQyxRLEVBQVU7QUFDMUIsa0NBQU9BLFFBQVA7QUFDQSxtQkFBTyxJQUFJRCxtQkFBSixDQUF3QkMsUUFBeEIsQ0FBUDtBQUNIOzs7QUFFRCxpQ0FBWUEsUUFBWixFQUFzQjtBQUFBOztBQUNsQkMsZUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRUYsa0JBQUYsRUFBcEI7QUFDSDs7OzttQ0FFVUcsVSxFQUFZO0FBQUE7O0FBQ25CLGdCQUFNQyxhQUFhLGVBQUtDLElBQUwsQ0FBVUYsVUFBVixFQUFzQiw2QkFBdEIsQ0FBbkI7QUFDQSxtQkFBT0wsS0FBS00sVUFBTCxFQUNGRSxJQURFLENBQ0csVUFBQ1IsSUFBRCxFQUFVO0FBQ1osb0JBQUlBLEtBQUtTLE1BQUwsRUFBSixFQUFtQjtBQUNmLDJCQUFPSCxVQUFQO0FBQ0g7QUFDRCxzQkFBTSxJQUFJSSxLQUFKLENBQVUsWUFBVixDQUFOO0FBQ0gsYUFORSxFQU9GQyxLQVBFLENBT0ksVUFBQ0MsQ0FBRCxFQUFPO0FBQ1Ysb0JBQUksTUFBS0MsY0FBTCxDQUFvQlIsVUFBcEIsQ0FBSixFQUFxQztBQUNqQywyQkFBTyxNQUFLUyxVQUFMLENBQWdCLGVBQUtDLE9BQUwsQ0FBYVYsVUFBYixDQUFoQixDQUFQO0FBQ0g7QUFDRCxzQkFBTU8sQ0FBTjtBQUNILGFBWkUsQ0FBUDtBQWFIOzs7dUNBRWNQLFUsRUFBWTtBQUN2QixtQkFBT0EsY0FBYyxJQUFkLElBQXNCLGVBQUtVLE9BQUwsQ0FBYVYsVUFBYixNQUE2QkEsVUFBMUQ7QUFDSDs7O21DQUVVSCxRLEVBQVU7QUFDakIsbUJBQU9KLFNBQVNJLFFBQVQsRUFBbUIsT0FBbkIsRUFDRk0sSUFERSxDQUNHLFVBQUNRLFFBQUQsRUFBYztBQUNoQixvQkFBTUMsYUFBYSxpQkFBT0MsUUFBUCxDQUFnQkYsUUFBaEIsQ0FBbkI7QUFDQSxvQkFBTUcsU0FBUyx3QkFBY0MsYUFBZCxHQUNWQyxjQURVLENBQ0tKLFdBQVdLLFdBRGhCLEVBRVZDLGlCQUZVLENBRVFOLFdBQVdPLGNBRm5CLENBQWY7QUFHQSxvQkFBSVAsV0FBV1EsVUFBZixFQUEyQjtBQUN2Qk4sMkJBQU9PLGFBQVAsQ0FBcUIsZUFBS25CLElBQUwsQ0FBVSxlQUFLUSxPQUFMLENBQWFiLFFBQWIsQ0FBVixFQUFrQ2UsV0FBV1EsVUFBN0MsQ0FBckI7QUFDSDtBQUNELHVCQUFPTixNQUFQO0FBQ0gsYUFWRSxDQUFQO0FBV0g7OzsrQkFFTTtBQUFBOztBQUNILG1CQUFPLEtBQUtMLFVBQUwsQ0FBZ0IsS0FBS1osUUFBckIsRUFDRk0sSUFERSxDQUNHO0FBQUEsdUJBQVEsT0FBS21CLFVBQUwsQ0FBZ0JDLElBQWhCLENBQVI7QUFBQSxhQURILEVBQ2tDO0FBQUEsdUJBQU0sd0JBQWNSLGFBQWQsRUFBTjtBQUFBLGFBRGxDLENBQVA7QUFFSDs7Ozs7O2tCQWhEZ0JuQixtQiIsImZpbGUiOiJDb25maWd1cmF0aW9uTG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi9Db25maWd1cmF0aW9uJztcbmltcG9ydCBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBqc1lhbWwgZnJvbSAnanMteWFtbCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5jb25zdCByZWFkRmlsZSA9IGJsdWViaXJkLnByb21pc2lmeShmcy5yZWFkRmlsZSk7XG5jb25zdCBzdGF0ID0gYmx1ZWJpcmQucHJvbWlzaWZ5KGZzLnN0YXQpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0aW9uTG9hZGVyIHtcbiAgICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgICAgIGFzc2VydChmaWxlUGF0aCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29uZmlndXJhdGlvbkxvYWRlcihmaWxlUGF0aCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZmlsZVBhdGgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IGZpbGVQYXRoIH0pO1xuICAgIH1cblxuICAgIGZpbmRDb25maWcoZm9sZGVyUGF0aCkge1xuICAgICAgICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5qb2luKGZvbGRlclBhdGgsICcubm9kZS1pbXBvcnQtcmVzb2x2ZXJyYy55bWwnKTtcbiAgICAgICAgcmV0dXJuIHN0YXQoY29uZmlnUGF0aClcbiAgICAgICAgICAgIC50aGVuKChzdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ1BhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgZmlsZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZENvbnRpbnVlKGZvbGRlclBhdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRDb25maWcocGF0aC5kaXJuYW1lKGZvbGRlclBhdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZENvbnRpbnVlKGZvbGRlclBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGZvbGRlclBhdGggIT0gbnVsbCAmJiBwYXRoLmRpcm5hbWUoZm9sZGVyUGF0aCkgIT09IGZvbGRlclBhdGg7XG4gICAgfVxuXG4gICAgbG9hZENvbmZpZyhmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gcmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpXG4gICAgICAgICAgICAudGhlbigoY29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWdEYXRhID0ganNZYW1sLnNhZmVMb2FkKGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBDb25maWd1cmF0aW9uLmNyZWF0ZURlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0SW1wb3J0U3R5bGUoY29uZmlnRGF0YS5pbXBvcnRTdHlsZSlcbiAgICAgICAgICAgICAgICAgICAgLnNldElnbm9yZWRGb2xkZXJzKGNvbmZpZ0RhdGEuaWdub3JlZEZvbGRlcnMpO1xuICAgICAgICAgICAgICAgIGlmIChjb25maWdEYXRhLnJvb3RGb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNldFJvb3RGb2xkZXIocGF0aC5qb2luKHBhdGguZGlybmFtZShmaWxlUGF0aCksIGNvbmZpZ0RhdGEucm9vdEZvbGRlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZENvbmZpZyh0aGlzLmZpbGVQYXRoKVxuICAgICAgICAgICAgLnRoZW4ocGF0aCA9PiB0aGlzLmxvYWRDb25maWcocGF0aCksICgpID0+IENvbmZpZ3VyYXRpb24uY3JlYXRlRGVmYXVsdCgpKTtcbiAgICB9XG59XG4iXX0=