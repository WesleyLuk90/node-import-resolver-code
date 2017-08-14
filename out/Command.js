'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vscode = require('vscode');

var _vscode2 = _interopRequireDefault(_vscode);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _ConfigurationLoader = require('./ConfigurationLoader');

var _ConfigurationLoader2 = _interopRequireDefault(_ConfigurationLoader);

var _TokenFinder = require('./TokenFinder');

var _TokenFinder2 = _interopRequireDefault(_TokenFinder);

var _ImportScanner = require('./ImportScanner');

var _ImportScanner2 = _interopRequireDefault(_ImportScanner);

var _ImportOption = require('./ImportOption');

var _ImportOption2 = _interopRequireDefault(_ImportOption);

var _OptionSelector = require('./OptionSelector');

var _OptionSelector2 = _interopRequireDefault(_OptionSelector);

var _ImportStyleHeuristic = require('./ImportStyleHeuristic');

var _ImportStyleHeuristic2 = _interopRequireDefault(_ImportStyleHeuristic);

var _ImportLocationSearcher = require('./ImportLocationSearcher');

var _ImportLocationSearcher2 = _interopRequireDefault(_ImportLocationSearcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function () {
    function Command() {
        _classCallCheck(this, Command);
    }

    _createClass(Command, null, [{
        key: 'init',
        value: function init(context) {
            var disposable = _vscode2.default.commands.registerCommand('node-import-resolver-code:import', function () {
                return Command.run();
            });

            context.subscriptions.push(disposable);
        }
    }, {
        key: 'run',
        value: function run() {
            var token = new _TokenFinder2.default().getToken();

            if (!token) {
                console.log('No token found');
                return;
            }

            return _ConfigurationLoader2.default.fromFilePath(_Editor2.default.getFilePath()).load().then(function (config) {
                return _ImportScanner2.default.create(_Editor2.default.getFilePath(), token, function () {}, config).start().then(function (imports) {
                    return imports.map(function (i) {
                        return new _ImportOption2.default(i);
                    });
                }).then(function (p) {
                    return _OptionSelector2.default.showOptions(p);
                }).then(function (option) {
                    if (option) {
                        return Command.insertImport(option.import, config);
                    }
                });
            });
        }
    }, {
        key: 'insertImport',
        value: function insertImport(newImport, config) {
            var style = _ImportStyleHeuristic2.default.fromSource(_Editor2.default.getText(), config).getStyle();
            var location = _ImportLocationSearcher2.default.fromSource(_Editor2.default.getText()).getLocation();
            var importLine = newImport.format(style);
            return _Editor2.default.insert(location, importLine + '\n');
        }
    }]);

    return Command;
}();

exports.default = Command;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21tYW5kLmpzIl0sIm5hbWVzIjpbIkNvbW1hbmQiLCJjb250ZXh0IiwiZGlzcG9zYWJsZSIsImNvbW1hbmRzIiwicmVnaXN0ZXJDb21tYW5kIiwicnVuIiwic3Vic2NyaXB0aW9ucyIsInB1c2giLCJ0b2tlbiIsImdldFRva2VuIiwiY29uc29sZSIsImxvZyIsImZyb21GaWxlUGF0aCIsImdldEZpbGVQYXRoIiwibG9hZCIsInRoZW4iLCJjb25maWciLCJjcmVhdGUiLCJzdGFydCIsImltcG9ydHMiLCJtYXAiLCJpIiwicCIsInNob3dPcHRpb25zIiwib3B0aW9uIiwiaW5zZXJ0SW1wb3J0IiwiaW1wb3J0IiwibmV3SW1wb3J0Iiwic3R5bGUiLCJmcm9tU291cmNlIiwiZ2V0VGV4dCIsImdldFN0eWxlIiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsImltcG9ydExpbmUiLCJmb3JtYXQiLCJpbnNlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs2QkFDTEMsTyxFQUFTO0FBQ2pCLGdCQUFJQyxhQUFhLGlCQUFPQyxRQUFQLENBQWdCQyxlQUFoQixDQUFnQyxrQ0FBaEMsRUFBb0U7QUFBQSx1QkFBTUosUUFBUUssR0FBUixFQUFOO0FBQUEsYUFBcEUsQ0FBakI7O0FBRUFKLG9CQUFRSyxhQUFSLENBQXNCQyxJQUF0QixDQUEyQkwsVUFBM0I7QUFDSDs7OzhCQUVZO0FBQ1QsZ0JBQU1NLFFBQVEsNEJBQWtCQyxRQUFsQixFQUFkOztBQUVBLGdCQUFJLENBQUNELEtBQUwsRUFBWTtBQUNSRSx3QkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0E7QUFDSDs7QUFFRCxtQkFBTyw4QkFBb0JDLFlBQXBCLENBQWlDLGlCQUFPQyxXQUFQLEVBQWpDLEVBQ0ZDLElBREUsR0FFRkMsSUFGRSxDQUVHLFVBQUNDLE1BQUQsRUFBWTtBQUNkLHVCQUFPLHdCQUFjQyxNQUFkLENBQXFCLGlCQUFPSixXQUFQLEVBQXJCLEVBQTJDTCxLQUEzQyxFQUFrRCxZQUFNLENBQUUsQ0FBMUQsRUFBNERRLE1BQTVELEVBQ0ZFLEtBREUsR0FFRkgsSUFGRSxDQUVHLFVBQUNJLE9BQUQ7QUFBQSwyQkFBYUEsUUFBUUMsR0FBUixDQUFZO0FBQUEsK0JBQUssMkJBQWlCQyxDQUFqQixDQUFMO0FBQUEscUJBQVosQ0FBYjtBQUFBLGlCQUZILEVBR0ZOLElBSEUsQ0FHRyxVQUFDTyxDQUFEO0FBQUEsMkJBQU8seUJBQWVDLFdBQWYsQ0FBMkJELENBQTNCLENBQVA7QUFBQSxpQkFISCxFQUlGUCxJQUpFLENBSUcsVUFBQ1MsTUFBRCxFQUFZO0FBQ2Qsd0JBQUlBLE1BQUosRUFBWTtBQUNSLCtCQUFPeEIsUUFBUXlCLFlBQVIsQ0FBcUJELE9BQU9FLE1BQTVCLEVBQW9DVixNQUFwQyxDQUFQO0FBQ0g7QUFDSixpQkFSRSxDQUFQO0FBU0gsYUFaRSxDQUFQO0FBYUg7OztxQ0FFbUJXLFMsRUFBV1gsTSxFQUFRO0FBQ25DLGdCQUFNWSxRQUFRLCtCQUFxQkMsVUFBckIsQ0FBZ0MsaUJBQU9DLE9BQVAsRUFBaEMsRUFBa0RkLE1BQWxELEVBQTBEZSxRQUExRCxFQUFkO0FBQ0EsZ0JBQU1DLFdBQVcsaUNBQXVCSCxVQUF2QixDQUFrQyxpQkFBT0MsT0FBUCxFQUFsQyxFQUFvREcsV0FBcEQsRUFBakI7QUFDQSxnQkFBTUMsYUFBYVAsVUFBVVEsTUFBVixDQUFpQlAsS0FBakIsQ0FBbkI7QUFDQSxtQkFBTyxpQkFBT1EsTUFBUCxDQUFjSixRQUFkLEVBQTJCRSxVQUEzQixRQUFQO0FBQ0g7Ozs7OztrQkFuQ2dCbEMsTyIsImZpbGUiOiJDb21tYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZzY29kZSBmcm9tICd2c2NvZGUnO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJztcclxuaW1wb3J0IENvbmZpZ3VyYXRpb25Mb2FkZXIgZnJvbSAnLi9Db25maWd1cmF0aW9uTG9hZGVyJztcclxuaW1wb3J0IFRva2VuRmluZGVyIGZyb20gJy4vVG9rZW5GaW5kZXInO1xyXG5pbXBvcnQgSW1wb3J0U2Nhbm5lciBmcm9tICcuL0ltcG9ydFNjYW5uZXInO1xyXG5pbXBvcnQgSW1wb3J0T3B0aW9uIGZyb20gJy4vSW1wb3J0T3B0aW9uJztcclxuaW1wb3J0IE9wdGlvblNlbGVjdG9yIGZyb20gJy4vT3B0aW9uU2VsZWN0b3InO1xyXG5pbXBvcnQgSW1wb3J0U3R5bGVIZXVyaXN0aWMgZnJvbSAnLi9JbXBvcnRTdHlsZUhldXJpc3RpYyc7XHJcbmltcG9ydCBJbXBvcnRMb2NhdGlvblNlYXJjaGVyIGZyb20gJy4vSW1wb3J0TG9jYXRpb25TZWFyY2hlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kIHtcclxuICAgIHN0YXRpYyBpbml0KGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgZGlzcG9zYWJsZSA9IHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ25vZGUtaW1wb3J0LXJlc29sdmVyLWNvZGU6aW1wb3J0JywgKCkgPT4gQ29tbWFuZC5ydW4oKSk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9ucy5wdXNoKGRpc3Bvc2FibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBydW4oKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBuZXcgVG9rZW5GaW5kZXIoKS5nZXRUb2tlbigpO1xyXG5cclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB0b2tlbiBmb3VuZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gQ29uZmlndXJhdGlvbkxvYWRlci5mcm9tRmlsZVBhdGgoRWRpdG9yLmdldEZpbGVQYXRoKCkpXHJcbiAgICAgICAgICAgIC5sb2FkKClcclxuICAgICAgICAgICAgLnRoZW4oKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEltcG9ydFNjYW5uZXIuY3JlYXRlKEVkaXRvci5nZXRGaWxlUGF0aCgpLCB0b2tlbiwgKCkgPT4ge30sIGNvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbXBvcnRzKSA9PiBpbXBvcnRzLm1hcChpID0+IG5ldyBJbXBvcnRPcHRpb24oaSkpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChwKSA9PiBPcHRpb25TZWxlY3Rvci5zaG93T3B0aW9ucyhwKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDb21tYW5kLmluc2VydEltcG9ydChvcHRpb24uaW1wb3J0LCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnNlcnRJbXBvcnQobmV3SW1wb3J0LCBjb25maWcpIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IEltcG9ydFN0eWxlSGV1cmlzdGljLmZyb21Tb3VyY2UoRWRpdG9yLmdldFRleHQoKSwgY29uZmlnKS5nZXRTdHlsZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gSW1wb3J0TG9jYXRpb25TZWFyY2hlci5mcm9tU291cmNlKEVkaXRvci5nZXRUZXh0KCkpLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaW1wb3J0TGluZSA9IG5ld0ltcG9ydC5mb3JtYXQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBFZGl0b3IuaW5zZXJ0KGxvY2F0aW9uLCBgJHtpbXBvcnRMaW5lfVxcbmApO1xyXG4gICAgfVxyXG59Il19