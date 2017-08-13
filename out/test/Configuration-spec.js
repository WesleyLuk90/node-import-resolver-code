'use strict';

var _Configuration = require('../Configuration');

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Configuration', function () {
    it('should set ignored folders only if defined', function () {
        var config = _Configuration2.default.createDefault();
        config.setIgnoredFolders(['a']);
        expect(config.getIgnoredFolders()).toEqual(['a']);
        config.setIgnoredFolders(null);
        expect(config.getIgnoredFolders()).toEqual(['a']);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0NvbmZpZ3VyYXRpb24tc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY29uZmlnIiwiY3JlYXRlRGVmYXVsdCIsInNldElnbm9yZWRGb2xkZXJzIiwiZXhwZWN0IiwiZ2V0SWdub3JlZEZvbGRlcnMiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsU0FBUyxlQUFULEVBQTBCLFlBQU07QUFDNUJDLE9BQUcsNENBQUgsRUFBaUQsWUFBTTtBQUNuRCxZQUFNQyxTQUFTLHdCQUFjQyxhQUFkLEVBQWY7QUFDQUQsZUFBT0UsaUJBQVAsQ0FBeUIsQ0FBQyxHQUFELENBQXpCO0FBQ0FDLGVBQU9ILE9BQU9JLGlCQUFQLEVBQVAsRUFBbUNDLE9BQW5DLENBQTJDLENBQUMsR0FBRCxDQUEzQztBQUNBTCxlQUFPRSxpQkFBUCxDQUF5QixJQUF6QjtBQUNBQyxlQUFPSCxPQUFPSSxpQkFBUCxFQUFQLEVBQW1DQyxPQUFuQyxDQUEyQyxDQUFDLEdBQUQsQ0FBM0M7QUFDSCxLQU5EO0FBT0gsQ0FSRCIsImZpbGUiOiJDb25maWd1cmF0aW9uLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuLi9Db25maWd1cmF0aW9uJztcblxuZGVzY3JpYmUoJ0NvbmZpZ3VyYXRpb24nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBzZXQgaWdub3JlZCBmb2xkZXJzIG9ubHkgaWYgZGVmaW5lZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gQ29uZmlndXJhdGlvbi5jcmVhdGVEZWZhdWx0KCk7XG4gICAgICAgIGNvbmZpZy5zZXRJZ25vcmVkRm9sZGVycyhbJ2EnXSk7XG4gICAgICAgIGV4cGVjdChjb25maWcuZ2V0SWdub3JlZEZvbGRlcnMoKSkudG9FcXVhbChbJ2EnXSk7XG4gICAgICAgIGNvbmZpZy5zZXRJZ25vcmVkRm9sZGVycyhudWxsKTtcbiAgICAgICAgZXhwZWN0KGNvbmZpZy5nZXRJZ25vcmVkRm9sZGVycygpKS50b0VxdWFsKFsnYSddKTtcbiAgICB9KTtcbn0pO1xuIl19