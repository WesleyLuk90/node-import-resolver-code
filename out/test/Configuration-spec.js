'use strict';
'use babel';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0NvbmZpZ3VyYXRpb24tc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY29uZmlnIiwiY3JlYXRlRGVmYXVsdCIsInNldElnbm9yZWRGb2xkZXJzIiwiZXhwZWN0IiwiZ2V0SWdub3JlZEZvbGRlcnMiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLGVBQVQsRUFBMEIsWUFBTTtBQUM1QkMsT0FBRyw0Q0FBSCxFQUFpRCxZQUFNO0FBQ25ELFlBQU1DLFNBQVMsd0JBQWNDLGFBQWQsRUFBZjtBQUNBRCxlQUFPRSxpQkFBUCxDQUF5QixDQUFDLEdBQUQsQ0FBekI7QUFDQUMsZUFBT0gsT0FBT0ksaUJBQVAsRUFBUCxFQUFtQ0MsT0FBbkMsQ0FBMkMsQ0FBQyxHQUFELENBQTNDO0FBQ0FMLGVBQU9FLGlCQUFQLENBQXlCLElBQXpCO0FBQ0FDLGVBQU9ILE9BQU9JLGlCQUFQLEVBQVAsRUFBbUNDLE9BQW5DLENBQTJDLENBQUMsR0FBRCxDQUEzQztBQUNILEtBTkQ7QUFPSCxDQVJEIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb24tc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi4vQ29uZmlndXJhdGlvbic7XG5cbmRlc2NyaWJlKCdDb25maWd1cmF0aW9uJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgc2V0IGlnbm9yZWQgZm9sZGVycyBvbmx5IGlmIGRlZmluZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IENvbmZpZ3VyYXRpb24uY3JlYXRlRGVmYXVsdCgpO1xuICAgICAgICBjb25maWcuc2V0SWdub3JlZEZvbGRlcnMoWydhJ10pO1xuICAgICAgICBleHBlY3QoY29uZmlnLmdldElnbm9yZWRGb2xkZXJzKCkpLnRvRXF1YWwoWydhJ10pO1xuICAgICAgICBjb25maWcuc2V0SWdub3JlZEZvbGRlcnMobnVsbCk7XG4gICAgICAgIGV4cGVjdChjb25maWcuZ2V0SWdub3JlZEZvbGRlcnMoKSkudG9FcXVhbChbJ2EnXSk7XG4gICAgfSk7XG59KTtcbiJdfQ==