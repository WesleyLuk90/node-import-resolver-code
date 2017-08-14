'use strict';

var _EditorUtils = require('./EditorUtils');

var _EditorUtils2 = _interopRequireDefault(_EditorUtils);

var _TestProject = require('./TestProject');

var _TestProject2 = _interopRequireDefault(_TestProject);

var _Editor = require('../Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Importer', function () {
    beforeEach(function () {
        return _EditorUtils2.default.createTestFile([_TestProject2.default.getPath('hello/world.js')]);
    });
    beforeEach(function () {
        spyOn(_Editor2.default, 'getWorkspaceFolders').and.returnValue([_TestProject2.default.getPath()]);
    });

    it('should import automatically', function () {
        return _EditorUtils2.default.setText('\'use strict\';\nimport a from \'b\';\n\nASecondImport\n\nfunction(){};').then(function () {
            return _EditorUtils2.default.setCursor(3, 3);
        }).then(function () {
            return _EditorUtils2.default.executeCommand('node-import-resolver-code:import');
        }).then(function () {
            expect(_Editor2.default.getText()).toEqual('\'use strict\';\nimport a from \'b\';\nimport ASecondImport from \'../a-second-import\';\n\nASecondImport\n\nfunction(){};');
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydGVyLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiY3JlYXRlVGVzdEZpbGUiLCJnZXRQYXRoIiwic3B5T24iLCJhbmQiLCJyZXR1cm5WYWx1ZSIsIml0Iiwic2V0VGV4dCIsInRoZW4iLCJzZXRDdXJzb3IiLCJleGVjdXRlQ29tbWFuZCIsImV4cGVjdCIsImdldFRleHQiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsVUFBVCxFQUFxQixZQUFNO0FBQ3ZCQyxlQUFXO0FBQUEsZUFBTSxzQkFBWUMsY0FBWixDQUEyQixDQUFDLHNCQUFZQyxPQUFaLENBQW9CLGdCQUFwQixDQUFELENBQTNCLENBQU47QUFBQSxLQUFYO0FBQ0FGLGVBQVcsWUFBTTtBQUNiRyxnQ0FBYyxxQkFBZCxFQUFxQ0MsR0FBckMsQ0FBeUNDLFdBQXpDLENBQXFELENBQUMsc0JBQVlILE9BQVosRUFBRCxDQUFyRDtBQUNILEtBRkQ7O0FBSUFJLE9BQUcsNkJBQUgsRUFBa0MsWUFBTTtBQUNwQyxlQUFPLHNCQUFZQyxPQUFaLDRFQU1GQyxJQU5FLENBTUc7QUFBQSxtQkFBTSxzQkFBWUMsU0FBWixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFOO0FBQUEsU0FOSCxFQU9GRCxJQVBFLENBT0c7QUFBQSxtQkFBTSxzQkFBWUUsY0FBWixDQUEyQixrQ0FBM0IsQ0FBTjtBQUFBLFNBUEgsRUFRRkYsSUFSRSxDQVFHLFlBQU07QUFDUkcsbUJBQU8saUJBQU9DLE9BQVAsRUFBUCxFQUF5QkMsT0FBekI7QUFPSCxTQWhCRSxDQUFQO0FBaUJILEtBbEJEO0FBbUJILENBekJEIiwiZmlsZSI6IkltcG9ydGVyLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWRpdG9yVXRpbHMgZnJvbSAnLi9FZGl0b3JVdGlscyc7XG5pbXBvcnQgVGVzdFByb2plY3QgZnJvbSAnLi9UZXN0UHJvamVjdCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL0VkaXRvcic7XG5cbmRlc2NyaWJlKCdJbXBvcnRlcicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IEVkaXRvclV0aWxzLmNyZWF0ZVRlc3RGaWxlKFtUZXN0UHJvamVjdC5nZXRQYXRoKCdoZWxsby93b3JsZC5qcycpXSkpO1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBzcHlPbihFZGl0b3IsICdnZXRXb3Jrc3BhY2VGb2xkZXJzJykuYW5kLnJldHVyblZhbHVlKFtUZXN0UHJvamVjdC5nZXRQYXRoKCldKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaW1wb3J0IGF1dG9tYXRpY2FsbHknLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBFZGl0b3JVdGlscy5zZXRUZXh0KGAndXNlIHN0cmljdCc7XG5pbXBvcnQgYSBmcm9tICdiJztcblxuQVNlY29uZEltcG9ydFxuXG5mdW5jdGlvbigpe307YClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IEVkaXRvclV0aWxzLnNldEN1cnNvcigzLCAzKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IEVkaXRvclV0aWxzLmV4ZWN1dGVDb21tYW5kKCdub2RlLWltcG9ydC1yZXNvbHZlci1jb2RlOmltcG9ydCcpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGVjdChFZGl0b3IuZ2V0VGV4dCgpKS50b0VxdWFsKGAndXNlIHN0cmljdCc7XG5pbXBvcnQgYSBmcm9tICdiJztcbmltcG9ydCBBU2Vjb25kSW1wb3J0IGZyb20gJy4uL2Etc2Vjb25kLWltcG9ydCc7XG5cbkFTZWNvbmRJbXBvcnRcblxuZnVuY3Rpb24oKXt9O2ApO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==