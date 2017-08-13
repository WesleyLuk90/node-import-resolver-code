'use strict';

var _Import = require('../Import');

var _Import2 = _interopRequireDefault(_Import);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Import', function () {
    it('should format imports', function () {
        var defaultImport = _Import2.default.createDefault('aThing', './abc/def');
        expect(defaultImport.format('require')).toEqual('const aThing = require(\'./abc/def\');');
        expect(defaultImport.format('import')).toEqual('import aThing from \'./abc/def\';');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydC1zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJkZWZhdWx0SW1wb3J0IiwiY3JlYXRlRGVmYXVsdCIsImV4cGVjdCIsImZvcm1hdCIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBQSxTQUFTLFFBQVQsRUFBbUIsWUFBTTtBQUNyQkMsT0FBRyx1QkFBSCxFQUE0QixZQUFNO0FBQzlCLFlBQU1DLGdCQUFnQixpQkFBT0MsYUFBUCxDQUFxQixRQUFyQixFQUErQixXQUEvQixDQUF0QjtBQUNBQyxlQUFPRixjQUFjRyxNQUFkLENBQXFCLFNBQXJCLENBQVAsRUFBd0NDLE9BQXhDLENBQWdELHdDQUFoRDtBQUNBRixlQUFPRixjQUFjRyxNQUFkLENBQXFCLFFBQXJCLENBQVAsRUFBdUNDLE9BQXZDLENBQStDLG1DQUEvQztBQUNILEtBSkQ7QUFLSCxDQU5EIiwiZmlsZSI6IkltcG9ydC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltcG9ydCBmcm9tICcuLi9JbXBvcnQnO1xuXG5kZXNjcmliZSgnSW1wb3J0JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZm9ybWF0IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRJbXBvcnQgPSBJbXBvcnQuY3JlYXRlRGVmYXVsdCgnYVRoaW5nJywgJy4vYWJjL2RlZicpO1xuICAgICAgICBleHBlY3QoZGVmYXVsdEltcG9ydC5mb3JtYXQoJ3JlcXVpcmUnKSkudG9FcXVhbCgnY29uc3QgYVRoaW5nID0gcmVxdWlyZShcXCcuL2FiYy9kZWZcXCcpOycpO1xuICAgICAgICBleHBlY3QoZGVmYXVsdEltcG9ydC5mb3JtYXQoJ2ltcG9ydCcpKS50b0VxdWFsKCdpbXBvcnQgYVRoaW5nIGZyb20gXFwnLi9hYmMvZGVmXFwnOycpO1xuICAgIH0pO1xufSk7XG4iXX0=