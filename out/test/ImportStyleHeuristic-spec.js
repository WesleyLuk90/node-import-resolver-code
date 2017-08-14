'use strict';
'use babel';

var _ImportStyleHeuristic = require('../ImportStyleHeuristic');

var _ImportStyleHeuristic2 = _interopRequireDefault(_ImportStyleHeuristic);

var _Configuration = require('../Configuration');

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImportStyleHeuristic', function () {
    function expectStyle(source, style, config) {
        it('should return ' + style + ' for ' + source, function () {
            var heuristic = _ImportStyleHeuristic2.default.fromSource(source, config || _Configuration2.default.createDefault());
            expect(heuristic.getStyle()).toBe(style);
        });
    }

    expectStyle('', 'import');
    expectStyle('import a from \'b\';', 'import');
    expectStyle('import a from \'b\';\nimport c from \'d\';\nvar k = require(\'k\');', 'import');
    expectStyle('export default class a {}\nvar b = require(\'a\')', 'import');
    expectStyle('import {a} from \'k\'\nvar b = require(\'a\')', 'import');
    expectStyle('import {a,b ,c} from \'k\'\nvar b = require(\'a\')', 'import');
    expectStyle('var b = require(\'a\')\nexport function b(){}', 'import');
    expectStyle('var b = require(\'a\')\n    export function b(){}', 'import');
    expectStyle('var b = require(\'a\')\n\texport function b(){}', 'import');

    expectStyle('', 'require', _Configuration2.default.createDefault().setImportStyle('require'));
    expectStyle('let a = require(\'a\');', 'require');
    expectStyle('require(\'a\');', 'require');
    expectStyle('var a = require(\'../../some/strange/pa$$th.abc\');', 'require');
    expectStyle('const a_234$ = require(\'a\');', 'require');
    expectStyle('const a = require(\'a\')', 'require');
    expectStyle('const $ = require(\'jQuery\')', 'require');
    expectStyle('function() {\nconst c = require(\'c\');\n}', 'require');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydFN0eWxlSGV1cmlzdGljLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJleHBlY3RTdHlsZSIsInNvdXJjZSIsInN0eWxlIiwiY29uZmlnIiwiaXQiLCJoZXVyaXN0aWMiLCJmcm9tU291cmNlIiwiY3JlYXRlRGVmYXVsdCIsImV4cGVjdCIsImdldFN0eWxlIiwidG9CZSIsInNldEltcG9ydFN0eWxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsc0JBQVQsRUFBaUMsWUFBTTtBQUNuQyxhQUFTQyxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsS0FBN0IsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQ3hDQyw4QkFBb0JGLEtBQXBCLGFBQWlDRCxNQUFqQyxFQUEyQyxZQUFNO0FBQzdDLGdCQUFNSSxZQUFZLCtCQUFxQkMsVUFBckIsQ0FBZ0NMLE1BQWhDLEVBQXdDRSxVQUFVLHdCQUFjSSxhQUFkLEVBQWxELENBQWxCO0FBQ0FDLG1CQUFPSCxVQUFVSSxRQUFWLEVBQVAsRUFBNkJDLElBQTdCLENBQWtDUixLQUFsQztBQUNILFNBSEQ7QUFJSDs7QUFFREYsZ0JBQVksRUFBWixFQUFnQixRQUFoQjtBQUNBQSx3Q0FBa0MsUUFBbEM7QUFDQUEsdUZBQTZFLFFBQTdFO0FBQ0FBLHFFQUNtQixRQURuQjtBQUVBQSxpRUFDbUIsUUFEbkI7QUFFQUEsc0VBQ21CLFFBRG5CO0FBRUFBLGlFQUNvQixRQURwQjtBQUVBQSxxRUFDd0IsUUFEeEI7QUFFQUEsbUVBQ3NCLFFBRHRCOztBQUdBQSxnQkFBWSxFQUFaLEVBQWdCLFNBQWhCLEVBQTJCLHdCQUFjTyxhQUFkLEdBQThCSSxjQUE5QixDQUE2QyxTQUE3QyxDQUEzQjtBQUNBWCwyQ0FBcUMsU0FBckM7QUFDQUEsbUNBQTZCLFNBQTdCO0FBQ0FBLHVFQUFpRSxTQUFqRTtBQUNBQSxrREFBNEMsU0FBNUM7QUFDQUEsNENBQXNDLFNBQXRDO0FBQ0FBLGlEQUEyQyxTQUEzQztBQUNBQSw4REFFQSxTQUZBO0FBR0gsQ0FsQ0QiLCJmaWxlIjoiSW1wb3J0U3R5bGVIZXVyaXN0aWMtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgSW1wb3J0U3R5bGVIZXVyaXN0aWMgZnJvbSAnLi4vSW1wb3J0U3R5bGVIZXVyaXN0aWMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi4vQ29uZmlndXJhdGlvbic7XG5cbmRlc2NyaWJlKCdJbXBvcnRTdHlsZUhldXJpc3RpYycsICgpID0+IHtcbiAgICBmdW5jdGlvbiBleHBlY3RTdHlsZShzb3VyY2UsIHN0eWxlLCBjb25maWcpIHtcbiAgICAgICAgaXQoYHNob3VsZCByZXR1cm4gJHtzdHlsZX0gZm9yICR7c291cmNlfWAsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhldXJpc3RpYyA9IEltcG9ydFN0eWxlSGV1cmlzdGljLmZyb21Tb3VyY2Uoc291cmNlLCBjb25maWcgfHwgQ29uZmlndXJhdGlvbi5jcmVhdGVEZWZhdWx0KCkpO1xuICAgICAgICAgICAgZXhwZWN0KGhldXJpc3RpYy5nZXRTdHlsZSgpKS50b0JlKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwZWN0U3R5bGUoJycsICdpbXBvcnQnKTtcbiAgICBleHBlY3RTdHlsZShgaW1wb3J0IGEgZnJvbSAnYic7YCwgJ2ltcG9ydCcpO1xuICAgIGV4cGVjdFN0eWxlKGBpbXBvcnQgYSBmcm9tICdiJztcXG5pbXBvcnQgYyBmcm9tICdkJztcXG52YXIgayA9IHJlcXVpcmUoJ2snKTtgLCAnaW1wb3J0Jyk7XG4gICAgZXhwZWN0U3R5bGUoYGV4cG9ydCBkZWZhdWx0IGNsYXNzIGEge31cbnZhciBiID0gcmVxdWlyZSgnYScpYCwgJ2ltcG9ydCcpO1xuICAgIGV4cGVjdFN0eWxlKGBpbXBvcnQge2F9IGZyb20gJ2snXG52YXIgYiA9IHJlcXVpcmUoJ2EnKWAsICdpbXBvcnQnKTtcbiAgICBleHBlY3RTdHlsZShgaW1wb3J0IHthLGIgLGN9IGZyb20gJ2snXG52YXIgYiA9IHJlcXVpcmUoJ2EnKWAsICdpbXBvcnQnKTtcbiAgICBleHBlY3RTdHlsZShgdmFyIGIgPSByZXF1aXJlKCdhJylcbmV4cG9ydCBmdW5jdGlvbiBiKCl7fWAsICdpbXBvcnQnKTtcbiAgICBleHBlY3RTdHlsZShgdmFyIGIgPSByZXF1aXJlKCdhJylcbiAgICBleHBvcnQgZnVuY3Rpb24gYigpe31gLCAnaW1wb3J0Jyk7XG4gICAgZXhwZWN0U3R5bGUoYHZhciBiID0gcmVxdWlyZSgnYScpXG5cXHRleHBvcnQgZnVuY3Rpb24gYigpe31gLCAnaW1wb3J0Jyk7XG5cbiAgICBleHBlY3RTdHlsZSgnJywgJ3JlcXVpcmUnLCBDb25maWd1cmF0aW9uLmNyZWF0ZURlZmF1bHQoKS5zZXRJbXBvcnRTdHlsZSgncmVxdWlyZScpKTtcbiAgICBleHBlY3RTdHlsZShgbGV0IGEgPSByZXF1aXJlKCdhJyk7YCwgJ3JlcXVpcmUnKTtcbiAgICBleHBlY3RTdHlsZShgcmVxdWlyZSgnYScpO2AsICdyZXF1aXJlJyk7XG4gICAgZXhwZWN0U3R5bGUoYHZhciBhID0gcmVxdWlyZSgnLi4vLi4vc29tZS9zdHJhbmdlL3BhJCR0aC5hYmMnKTtgLCAncmVxdWlyZScpO1xuICAgIGV4cGVjdFN0eWxlKGBjb25zdCBhXzIzNCQgPSByZXF1aXJlKCdhJyk7YCwgJ3JlcXVpcmUnKTtcbiAgICBleHBlY3RTdHlsZShgY29uc3QgYSA9IHJlcXVpcmUoJ2EnKWAsICdyZXF1aXJlJyk7XG4gICAgZXhwZWN0U3R5bGUoYGNvbnN0ICQgPSByZXF1aXJlKCdqUXVlcnknKWAsICdyZXF1aXJlJyk7XG4gICAgZXhwZWN0U3R5bGUoYGZ1bmN0aW9uKCkge1xuY29uc3QgYyA9IHJlcXVpcmUoJ2MnKTtcbn1gLCAncmVxdWlyZScpO1xufSk7XG4iXX0=