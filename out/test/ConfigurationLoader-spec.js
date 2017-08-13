'use strict';

var _ConfigurationLoader = require('../ConfigurationLoader');

var _ConfigurationLoader2 = _interopRequireDefault(_ConfigurationLoader);

var _Configuration = require('../Configuration');

var _Configuration2 = _interopRequireDefault(_Configuration);

var _TestProject = require('./TestProject');

var _TestProject2 = _interopRequireDefault(_TestProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ConfigurationLoader', function () {
    it('should load configuration', function () {
        var loader = _ConfigurationLoader2.default.fromFilePath(_TestProject2.default.getPath('require/something/somejsfile.js'));

        return loader.load().then(function (config) {
            expect(config instanceof _Configuration2.default).toBe(true);
            expect(config.getImportStyle()).toBe('require');
            expect(config.getIgnoredFolders()).toEqual(['node_modules', 'spec']);
            expect(config.getRootFolder()).toEqual(_TestProject2.default.getPath('./'));
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0NvbmZpZ3VyYXRpb25Mb2FkZXItc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwibG9hZGVyIiwiZnJvbUZpbGVQYXRoIiwiZ2V0UGF0aCIsImxvYWQiLCJ0aGVuIiwiY29uZmlnIiwiZXhwZWN0IiwidG9CZSIsImdldEltcG9ydFN0eWxlIiwiZ2V0SWdub3JlZEZvbGRlcnMiLCJ0b0VxdWFsIiwiZ2V0Um9vdEZvbGRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLHFCQUFULEVBQWdDLFlBQU07QUFDbENDLE9BQUcsMkJBQUgsRUFBZ0MsWUFBTTtBQUNsQyxZQUFNQyxTQUFTLDhCQUFvQkMsWUFBcEIsQ0FBaUMsc0JBQVlDLE9BQVosQ0FBb0IsaUNBQXBCLENBQWpDLENBQWY7O0FBRUEsZUFBT0YsT0FBT0csSUFBUCxHQUNGQyxJQURFLENBQ0csVUFBQ0MsTUFBRCxFQUFZO0FBQ2RDLG1CQUFPRCx5Q0FBUCxFQUF3Q0UsSUFBeEMsQ0FBNkMsSUFBN0M7QUFDQUQsbUJBQU9ELE9BQU9HLGNBQVAsRUFBUCxFQUFnQ0QsSUFBaEMsQ0FBcUMsU0FBckM7QUFDQUQsbUJBQU9ELE9BQU9JLGlCQUFQLEVBQVAsRUFBbUNDLE9BQW5DLENBQTJDLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQUEzQztBQUNBSixtQkFBT0QsT0FBT00sYUFBUCxFQUFQLEVBQStCRCxPQUEvQixDQUF1QyxzQkFBWVIsT0FBWixDQUFvQixJQUFwQixDQUF2QztBQUNILFNBTkUsQ0FBUDtBQU9ILEtBVkQ7QUFXSCxDQVpEIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb25Mb2FkZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWd1cmF0aW9uTG9hZGVyIGZyb20gJy4uL0NvbmZpZ3VyYXRpb25Mb2FkZXInO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi4vQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgVGVzdFByb2plY3QgZnJvbSAnLi9UZXN0UHJvamVjdCc7XG5cbmRlc2NyaWJlKCdDb25maWd1cmF0aW9uTG9hZGVyJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgbG9hZCBjb25maWd1cmF0aW9uJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBDb25maWd1cmF0aW9uTG9hZGVyLmZyb21GaWxlUGF0aChUZXN0UHJvamVjdC5nZXRQYXRoKCdyZXF1aXJlL3NvbWV0aGluZy9zb21lanNmaWxlLmpzJykpO1xuXG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZCgpXG4gICAgICAgICAgICAudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvbmZpZyBpbnN0YW5jZW9mIENvbmZpZ3VyYXRpb24pLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvbmZpZy5nZXRJbXBvcnRTdHlsZSgpKS50b0JlKCdyZXF1aXJlJyk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvbmZpZy5nZXRJZ25vcmVkRm9sZGVycygpKS50b0VxdWFsKFsnbm9kZV9tb2R1bGVzJywgJ3NwZWMnXSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvbmZpZy5nZXRSb290Rm9sZGVyKCkpLnRvRXF1YWwoVGVzdFByb2plY3QuZ2V0UGF0aCgnLi8nKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyJdfQ==