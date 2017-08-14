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
        _EditorUtils2.default.setText('\'use strict\';\nimport a from \'b\';\n\nASecondImport\n\nfunction(){};').then(function () {
            return _EditorUtils2.default.setCursor(3, 3);
        }).then(function () {
            return _EditorUtils2.default.executeCommand('node-import-resolver-code:import');
        }).then(function () {
            expect(_Editor2.default.getText()).toEqual('\'use strict\';\nimport a from \'b\';\nimport ASecondImport from \'./a-second-import\';\n\nASecondImport\n\nfunction(){};');
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydGVyLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiY3JlYXRlVGVzdEZpbGUiLCJnZXRQYXRoIiwic3B5T24iLCJhbmQiLCJyZXR1cm5WYWx1ZSIsIml0Iiwic2V0VGV4dCIsInRoZW4iLCJzZXRDdXJzb3IiLCJleGVjdXRlQ29tbWFuZCIsImV4cGVjdCIsImdldFRleHQiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsVUFBVCxFQUFxQixZQUFNO0FBQ3ZCQyxlQUFXO0FBQUEsZUFBTSxzQkFBWUMsY0FBWixDQUEyQixDQUFDLHNCQUFZQyxPQUFaLENBQW9CLGdCQUFwQixDQUFELENBQTNCLENBQU47QUFBQSxLQUFYO0FBQ0FGLGVBQVcsWUFBTTtBQUNiRyxnQ0FBYyxxQkFBZCxFQUFxQ0MsR0FBckMsQ0FBeUNDLFdBQXpDLENBQXFELENBQUMsc0JBQVlILE9BQVosRUFBRCxDQUFyRDtBQUNILEtBRkQ7O0FBSUFJLE9BQUcsNkJBQUgsRUFBa0MsWUFBTTtBQUNwQyw4QkFBWUMsT0FBWiw0RUFNS0MsSUFOTCxDQU1VO0FBQUEsbUJBQU0sc0JBQVlDLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0FBTjtBQUFBLFNBTlYsRUFPS0QsSUFQTCxDQU9VO0FBQUEsbUJBQU0sc0JBQVlFLGNBQVosQ0FBMkIsa0NBQTNCLENBQU47QUFBQSxTQVBWLEVBUUtGLElBUkwsQ0FRVSxZQUFNO0FBQ1JHLG1CQUFPLGlCQUFPQyxPQUFQLEVBQVAsRUFBeUJDLE9BQXpCO0FBT0gsU0FoQkw7QUFpQkgsS0FsQkQ7QUFtQkgsQ0F6QkQiLCJmaWxlIjoiSW1wb3J0ZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZGl0b3JVdGlscyBmcm9tICcuL0VkaXRvclV0aWxzJztcclxuaW1wb3J0IFRlc3RQcm9qZWN0IGZyb20gJy4vVGVzdFByb2plY3QnO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL0VkaXRvcic7XHJcblxyXG5kZXNjcmliZSgnSW1wb3J0ZXInLCAoKSA9PiB7XHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IEVkaXRvclV0aWxzLmNyZWF0ZVRlc3RGaWxlKFtUZXN0UHJvamVjdC5nZXRQYXRoKCdoZWxsby93b3JsZC5qcycpXSkpO1xyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc3B5T24oRWRpdG9yLCAnZ2V0V29ya3NwYWNlRm9sZGVycycpLmFuZC5yZXR1cm5WYWx1ZShbVGVzdFByb2plY3QuZ2V0UGF0aCgpXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnc2hvdWxkIGltcG9ydCBhdXRvbWF0aWNhbGx5JywgKCkgPT4ge1xyXG4gICAgICAgIEVkaXRvclV0aWxzLnNldFRleHQoYCd1c2Ugc3RyaWN0JztcclxuaW1wb3J0IGEgZnJvbSAnYic7XHJcblxyXG5BU2Vjb25kSW1wb3J0XHJcblxyXG5mdW5jdGlvbigpe307YClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gRWRpdG9yVXRpbHMuc2V0Q3Vyc29yKDMsIDMpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBFZGl0b3JVdGlscy5leGVjdXRlQ29tbWFuZCgnbm9kZS1pbXBvcnQtcmVzb2x2ZXItY29kZTppbXBvcnQnKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KEVkaXRvci5nZXRUZXh0KCkpLnRvRXF1YWwoYCd1c2Ugc3RyaWN0JztcclxuaW1wb3J0IGEgZnJvbSAnYic7XHJcbmltcG9ydCBBU2Vjb25kSW1wb3J0IGZyb20gJy4vYS1zZWNvbmQtaW1wb3J0JztcclxuXHJcbkFTZWNvbmRJbXBvcnRcclxuXHJcbmZ1bmN0aW9uKCl7fTtgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7Il19