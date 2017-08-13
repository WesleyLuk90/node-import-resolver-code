'use strict';

var _ImportFormatter = require('../ImportFormatter');

var _ImportFormatter2 = _interopRequireDefault(_ImportFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImportFormatter', function () {
    it('should format imports', function () {
        var formatter = _ImportFormatter2.default.fromPath('/hello/world/path/file.js', 'AThing');
        var imports = formatter.format(['/grandparent/parent.js', '/hello/world/path/sibling.js', '/hello/world/path/child/file.js']);

        expect(imports.length).toBe(3);
        imports.forEach(function (i) {
            return expect(i.getImportName()).toBe('AThing');
        });
        expect(imports[0].getRelativePath()).toEqual('../../../grandparent/parent');
        expect(imports[1].getRelativePath()).toEqual('./sibling');
        expect(imports[2].getRelativePath()).toEqual('./child/file');
    });

    it('should format package imports', function () {
        var formatter = _ImportFormatter2.default.fromPath('/hello/world/path/file.js', 'AThing');
        var imports = formatter.formatPackages(['a-thing', 'b-thing']);

        expect(imports.length).toBe(2);
        imports.forEach(function (i) {
            return expect(i.getImportName()).toBe('AThing');
        });
        expect(imports[0].getRelativePath()).toEqual('a-thing');
        expect(imports[1].getRelativePath()).toEqual('b-thing');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydEZvcm1hdHRlci1zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJmb3JtYXR0ZXIiLCJmcm9tUGF0aCIsImltcG9ydHMiLCJmb3JtYXQiLCJleHBlY3QiLCJsZW5ndGgiLCJ0b0JlIiwiZm9yRWFjaCIsImkiLCJnZXRJbXBvcnROYW1lIiwiZ2V0UmVsYXRpdmVQYXRoIiwidG9FcXVhbCIsImZvcm1hdFBhY2thZ2VzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsU0FBUyxpQkFBVCxFQUE0QixZQUFNO0FBQzlCQyxPQUFHLHVCQUFILEVBQTRCLFlBQU07QUFDOUIsWUFBTUMsWUFBWSwwQkFBZ0JDLFFBQWhCLENBQXlCLDJCQUF6QixFQUFzRCxRQUF0RCxDQUFsQjtBQUNBLFlBQU1DLFVBQVVGLFVBQVVHLE1BQVYsQ0FBaUIsQ0FBQyx3QkFBRCxFQUEyQiw4QkFBM0IsRUFBMkQsaUNBQTNELENBQWpCLENBQWhCOztBQUVBQyxlQUFPRixRQUFRRyxNQUFmLEVBQXVCQyxJQUF2QixDQUE0QixDQUE1QjtBQUNBSixnQkFBUUssT0FBUixDQUFnQjtBQUFBLG1CQUFLSCxPQUFPSSxFQUFFQyxhQUFGLEVBQVAsRUFBMEJILElBQTFCLENBQStCLFFBQS9CLENBQUw7QUFBQSxTQUFoQjtBQUNBRixlQUFPRixRQUFRLENBQVIsRUFBV1EsZUFBWCxFQUFQLEVBQXFDQyxPQUFyQyxDQUE2Qyw2QkFBN0M7QUFDQVAsZUFBT0YsUUFBUSxDQUFSLEVBQVdRLGVBQVgsRUFBUCxFQUFxQ0MsT0FBckMsQ0FBNkMsV0FBN0M7QUFDQVAsZUFBT0YsUUFBUSxDQUFSLEVBQVdRLGVBQVgsRUFBUCxFQUFxQ0MsT0FBckMsQ0FBNkMsY0FBN0M7QUFDSCxLQVREOztBQVdBWixPQUFHLCtCQUFILEVBQW9DLFlBQU07QUFDdEMsWUFBTUMsWUFBWSwwQkFBZ0JDLFFBQWhCLENBQXlCLDJCQUF6QixFQUFzRCxRQUF0RCxDQUFsQjtBQUNBLFlBQU1DLFVBQVVGLFVBQVVZLGNBQVYsQ0FBeUIsQ0FBQyxTQUFELEVBQVksU0FBWixDQUF6QixDQUFoQjs7QUFFQVIsZUFBT0YsUUFBUUcsTUFBZixFQUF1QkMsSUFBdkIsQ0FBNEIsQ0FBNUI7QUFDQUosZ0JBQVFLLE9BQVIsQ0FBZ0I7QUFBQSxtQkFBS0gsT0FBT0ksRUFBRUMsYUFBRixFQUFQLEVBQTBCSCxJQUExQixDQUErQixRQUEvQixDQUFMO0FBQUEsU0FBaEI7QUFDQUYsZUFBT0YsUUFBUSxDQUFSLEVBQVdRLGVBQVgsRUFBUCxFQUFxQ0MsT0FBckMsQ0FBNkMsU0FBN0M7QUFDQVAsZUFBT0YsUUFBUSxDQUFSLEVBQVdRLGVBQVgsRUFBUCxFQUFxQ0MsT0FBckMsQ0FBNkMsU0FBN0M7QUFDSCxLQVJEO0FBU0gsQ0FyQkQiLCJmaWxlIjoiSW1wb3J0Rm9ybWF0dGVyLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1wb3J0Rm9ybWF0dGVyIGZyb20gJy4uL0ltcG9ydEZvcm1hdHRlcic7XG5cbmRlc2NyaWJlKCdJbXBvcnRGb3JtYXR0ZXInLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBmb3JtYXQgaW1wb3J0cycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gSW1wb3J0Rm9ybWF0dGVyLmZyb21QYXRoKCcvaGVsbG8vd29ybGQvcGF0aC9maWxlLmpzJywgJ0FUaGluZycpO1xuICAgICAgICBjb25zdCBpbXBvcnRzID0gZm9ybWF0dGVyLmZvcm1hdChbJy9ncmFuZHBhcmVudC9wYXJlbnQuanMnLCAnL2hlbGxvL3dvcmxkL3BhdGgvc2libGluZy5qcycsICcvaGVsbG8vd29ybGQvcGF0aC9jaGlsZC9maWxlLmpzJ10pO1xuXG4gICAgICAgIGV4cGVjdChpbXBvcnRzLmxlbmd0aCkudG9CZSgzKTtcbiAgICAgICAgaW1wb3J0cy5mb3JFYWNoKGkgPT4gZXhwZWN0KGkuZ2V0SW1wb3J0TmFtZSgpKS50b0JlKCdBVGhpbmcnKSk7XG4gICAgICAgIGV4cGVjdChpbXBvcnRzWzBdLmdldFJlbGF0aXZlUGF0aCgpKS50b0VxdWFsKCcuLi8uLi8uLi9ncmFuZHBhcmVudC9wYXJlbnQnKTtcbiAgICAgICAgZXhwZWN0KGltcG9ydHNbMV0uZ2V0UmVsYXRpdmVQYXRoKCkpLnRvRXF1YWwoJy4vc2libGluZycpO1xuICAgICAgICBleHBlY3QoaW1wb3J0c1syXS5nZXRSZWxhdGl2ZVBhdGgoKSkudG9FcXVhbCgnLi9jaGlsZC9maWxlJyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGZvcm1hdCBwYWNrYWdlIGltcG9ydHMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IEltcG9ydEZvcm1hdHRlci5mcm9tUGF0aCgnL2hlbGxvL3dvcmxkL3BhdGgvZmlsZS5qcycsICdBVGhpbmcnKTtcbiAgICAgICAgY29uc3QgaW1wb3J0cyA9IGZvcm1hdHRlci5mb3JtYXRQYWNrYWdlcyhbJ2EtdGhpbmcnLCAnYi10aGluZyddKTtcblxuICAgICAgICBleHBlY3QoaW1wb3J0cy5sZW5ndGgpLnRvQmUoMik7XG4gICAgICAgIGltcG9ydHMuZm9yRWFjaChpID0+IGV4cGVjdChpLmdldEltcG9ydE5hbWUoKSkudG9CZSgnQVRoaW5nJykpO1xuICAgICAgICBleHBlY3QoaW1wb3J0c1swXS5nZXRSZWxhdGl2ZVBhdGgoKSkudG9FcXVhbCgnYS10aGluZycpO1xuICAgICAgICBleHBlY3QoaW1wb3J0c1sxXS5nZXRSZWxhdGl2ZVBhdGgoKSkudG9FcXVhbCgnYi10aGluZycpO1xuICAgIH0pO1xufSk7XG4iXX0=