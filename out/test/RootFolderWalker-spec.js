'use strict';
'use babel';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _RootFolderWalker = require('../RootFolderWalker');

var _RootFolderWalker2 = _interopRequireDefault(_RootFolderWalker);

var _TestProject = require('./TestProject');

var _TestProject2 = _interopRequireDefault(_TestProject);

var _Editor = require('../Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('RootFolderWalker', function () {
    it('should find the root folder', function () {
        var walker = _RootFolderWalker2.default.fromFile(_TestProject2.default.getPath('nested/non-exist/file.js'));
        var expectedPath = _TestProject2.default.getPath();

        return walker.getRootFolder().then(function (folder) {
            return expect(folder).toEqual(expectedPath);
        });
    });

    it('should return the default on failure', function () {
        var walker = _RootFolderWalker2.default.fromFile('/path-that-does-not-exist/a/b/c/d');
        var expectedPath = _path2.default.dirname(__dirname);

        spyOn(_Editor2.default, 'getWorkspaceFolders').and.returnValue([_path2.default.dirname(__dirname)]);

        return walker.getRootFolder().then(function (folder) {
            return expect(folder).toEqual(expectedPath);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L1Jvb3RGb2xkZXJXYWxrZXItc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0Iiwid2Fsa2VyIiwiZnJvbUZpbGUiLCJnZXRQYXRoIiwiZXhwZWN0ZWRQYXRoIiwiZ2V0Um9vdEZvbGRlciIsInRoZW4iLCJmb2xkZXIiLCJleHBlY3QiLCJ0b0VxdWFsIiwiZGlybmFtZSIsIl9fZGlybmFtZSIsInNweU9uIiwiYW5kIiwicmV0dXJuVmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsa0JBQVQsRUFBNkIsWUFBTTtBQUMvQkMsT0FBRyw2QkFBSCxFQUFrQyxZQUFNO0FBQ3BDLFlBQU1DLFNBQVMsMkJBQWlCQyxRQUFqQixDQUEwQixzQkFBWUMsT0FBWixDQUFvQiwwQkFBcEIsQ0FBMUIsQ0FBZjtBQUNBLFlBQU1DLGVBQWUsc0JBQVlELE9BQVosRUFBckI7O0FBRUEsZUFBT0YsT0FBT0ksYUFBUCxHQUNGQyxJQURFLENBQ0csVUFBQ0MsTUFBRDtBQUFBLG1CQUFZQyxPQUFPRCxNQUFQLEVBQWVFLE9BQWYsQ0FBdUJMLFlBQXZCLENBQVo7QUFBQSxTQURILENBQVA7QUFFSCxLQU5EOztBQVFBSixPQUFHLHNDQUFILEVBQTJDLFlBQU07QUFDN0MsWUFBTUMsU0FBUywyQkFBaUJDLFFBQWpCLENBQTBCLG1DQUExQixDQUFmO0FBQ0EsWUFBTUUsZUFBZSxlQUFLTSxPQUFMLENBQWFDLFNBQWIsQ0FBckI7O0FBRUFDLGdDQUFjLHFCQUFkLEVBQXFDQyxHQUFyQyxDQUF5Q0MsV0FBekMsQ0FBcUQsQ0FBQyxlQUFLSixPQUFMLENBQWFDLFNBQWIsQ0FBRCxDQUFyRDs7QUFFQSxlQUFPVixPQUFPSSxhQUFQLEdBQ0ZDLElBREUsQ0FDRyxVQUFDQyxNQUFEO0FBQUEsbUJBQVlDLE9BQU9ELE1BQVAsRUFBZUUsT0FBZixDQUF1QkwsWUFBdkIsQ0FBWjtBQUFBLFNBREgsQ0FBUDtBQUVILEtBUkQ7QUFTSCxDQWxCRCIsImZpbGUiOiJSb290Rm9sZGVyV2Fsa2VyLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgUm9vdEZvbGRlcldhbGtlciBmcm9tICcuLi9Sb290Rm9sZGVyV2Fsa2VyJztcbmltcG9ydCBUZXN0UHJvamVjdCBmcm9tICcuL1Rlc3RQcm9qZWN0JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vRWRpdG9yJztcblxuZGVzY3JpYmUoJ1Jvb3RGb2xkZXJXYWxrZXInLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBmaW5kIHRoZSByb290IGZvbGRlcicsICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gUm9vdEZvbGRlcldhbGtlci5mcm9tRmlsZShUZXN0UHJvamVjdC5nZXRQYXRoKCduZXN0ZWQvbm9uLWV4aXN0L2ZpbGUuanMnKSk7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUGF0aCA9IFRlc3RQcm9qZWN0LmdldFBhdGgoKTtcblxuICAgICAgICByZXR1cm4gd2Fsa2VyLmdldFJvb3RGb2xkZXIoKVxuICAgICAgICAgICAgLnRoZW4oKGZvbGRlcikgPT4gZXhwZWN0KGZvbGRlcikudG9FcXVhbChleHBlY3RlZFBhdGgpKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRoZSBkZWZhdWx0IG9uIGZhaWx1cmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IFJvb3RGb2xkZXJXYWxrZXIuZnJvbUZpbGUoJy9wYXRoLXRoYXQtZG9lcy1ub3QtZXhpc3QvYS9iL2MvZCcpO1xuICAgICAgICBjb25zdCBleHBlY3RlZFBhdGggPSBwYXRoLmRpcm5hbWUoX19kaXJuYW1lKTtcblxuICAgICAgICBzcHlPbihFZGl0b3IsICdnZXRXb3Jrc3BhY2VGb2xkZXJzJykuYW5kLnJldHVyblZhbHVlKFtwYXRoLmRpcm5hbWUoX19kaXJuYW1lKV0pO1xuXG4gICAgICAgIHJldHVybiB3YWxrZXIuZ2V0Um9vdEZvbGRlcigpXG4gICAgICAgICAgICAudGhlbigoZm9sZGVyKSA9PiBleHBlY3QoZm9sZGVyKS50b0VxdWFsKGV4cGVjdGVkUGF0aCkpO1xuICAgIH0pO1xufSk7Il19