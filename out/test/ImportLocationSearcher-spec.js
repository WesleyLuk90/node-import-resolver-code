'use strict';

var _ImportLocationSearcher = require('../ImportLocationSearcher');

var _ImportLocationSearcher2 = _interopRequireDefault(_ImportLocationSearcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImportLocationSearcher', function () {
    function expectImportLocation(source, location) {
        it('should determine the insert location for ' + source + ' as ' + location, function () {
            var searcher = _ImportLocationSearcher2.default.fromSource(source);
            expect(searcher.getLocation()).toEqual(location);
        });
    }

    expectImportLocation('', [0, 0]);

    expectImportLocation('\nimport hello from \'world\';\n\nfunction done() {}\n', [2, 0]);

    expectImportLocation('\nimport hello from \'world\';\n\nimport done from \'things\';\n\nfunction done() {}\n', [4, 0]);

    expectImportLocation('\n        // some comment\n//goes here\nimport hello from \'world\';\n\nimport done from \'things\';\n\nfunction done() {}\n', [6, 0]);

    expectImportLocation('\n        /**\n        its a comment\n        **/\nimport hello from \'world\';\n\nfunction done() {}\n', [5, 0]);

    expectImportLocation('\n\'use strict\';\n\'use data\'\nimport hello from \'world\';\n\nfunction done() {}\n', [4, 0]);

    expectImportLocation('\nimport hello from \'world\';\nrequire(\'a\');\nconst c = require(\'c\');\n\nfunction done() {}\n', [4, 0]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydExvY2F0aW9uU2VhcmNoZXItc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImV4cGVjdEltcG9ydExvY2F0aW9uIiwic291cmNlIiwibG9jYXRpb24iLCJpdCIsInNlYXJjaGVyIiwiZnJvbVNvdXJjZSIsImV4cGVjdCIsImdldExvY2F0aW9uIiwidG9FcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVMsd0JBQVQsRUFBbUMsWUFBTTtBQUNyQyxhQUFTQyxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQzVDQyx5REFBK0NGLE1BQS9DLFlBQTREQyxRQUE1RCxFQUF3RSxZQUFNO0FBQzFFLGdCQUFNRSxXQUFXLGlDQUF1QkMsVUFBdkIsQ0FBa0NKLE1BQWxDLENBQWpCO0FBQ0FLLG1CQUFPRixTQUFTRyxXQUFULEVBQVAsRUFBK0JDLE9BQS9CLENBQXVDTixRQUF2QztBQUNILFNBSEQ7QUFJSDs7QUFFREYseUJBQXFCLEVBQXJCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekI7O0FBRUFBLG1GQUlELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKQzs7QUFNQUEsbUhBTUQsQ0FBQyxDQUFELEVBQUksQ0FBSixDQU5DOztBQVFBQSx5SkFRRCxDQUFDLENBQUQsRUFBSSxDQUFKLENBUkM7O0FBVUFBLG9JQU9ELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FQQzs7QUFTQUEsa0hBTUQsQ0FBQyxDQUFELEVBQUksQ0FBSixDQU5DOztBQVFBQSwrSEFNRCxDQUFDLENBQUQsRUFBSSxDQUFKLENBTkM7QUFPSCxDQTFERCIsImZpbGUiOiJJbXBvcnRMb2NhdGlvblNlYXJjaGVyLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1wb3J0TG9jYXRpb25TZWFyY2hlciBmcm9tICcuLi9JbXBvcnRMb2NhdGlvblNlYXJjaGVyJztcblxuZGVzY3JpYmUoJ0ltcG9ydExvY2F0aW9uU2VhcmNoZXInLCAoKSA9PiB7XG4gICAgZnVuY3Rpb24gZXhwZWN0SW1wb3J0TG9jYXRpb24oc291cmNlLCBsb2NhdGlvbikge1xuICAgICAgICBpdChgc2hvdWxkIGRldGVybWluZSB0aGUgaW5zZXJ0IGxvY2F0aW9uIGZvciAke3NvdXJjZX0gYXMgJHtsb2NhdGlvbn1gLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hlciA9IEltcG9ydExvY2F0aW9uU2VhcmNoZXIuZnJvbVNvdXJjZShzb3VyY2UpO1xuICAgICAgICAgICAgZXhwZWN0KHNlYXJjaGVyLmdldExvY2F0aW9uKCkpLnRvRXF1YWwobG9jYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBlY3RJbXBvcnRMb2NhdGlvbignJywgWzAsIDBdKTtcblxuICAgIGV4cGVjdEltcG9ydExvY2F0aW9uKGBcbmltcG9ydCBoZWxsbyBmcm9tICd3b3JsZCc7XG5cbmZ1bmN0aW9uIGRvbmUoKSB7fVxuYCwgWzIsIDBdKTtcblxuICAgIGV4cGVjdEltcG9ydExvY2F0aW9uKGBcbmltcG9ydCBoZWxsbyBmcm9tICd3b3JsZCc7XG5cbmltcG9ydCBkb25lIGZyb20gJ3RoaW5ncyc7XG5cbmZ1bmN0aW9uIGRvbmUoKSB7fVxuYCwgWzQsIDBdKTtcblxuICAgIGV4cGVjdEltcG9ydExvY2F0aW9uKGBcbiAgICAgICAgLy8gc29tZSBjb21tZW50XG4vL2dvZXMgaGVyZVxuaW1wb3J0IGhlbGxvIGZyb20gJ3dvcmxkJztcblxuaW1wb3J0IGRvbmUgZnJvbSAndGhpbmdzJztcblxuZnVuY3Rpb24gZG9uZSgpIHt9XG5gLCBbNiwgMF0pO1xuXG4gICAgZXhwZWN0SW1wb3J0TG9jYXRpb24oYFxuICAgICAgICAvKipcbiAgICAgICAgaXRzIGEgY29tbWVudFxuICAgICAgICAqKi9cbmltcG9ydCBoZWxsbyBmcm9tICd3b3JsZCc7XG5cbmZ1bmN0aW9uIGRvbmUoKSB7fVxuYCwgWzUsIDBdKTtcblxuICAgIGV4cGVjdEltcG9ydExvY2F0aW9uKGBcbid1c2Ugc3RyaWN0Jztcbid1c2UgZGF0YSdcbmltcG9ydCBoZWxsbyBmcm9tICd3b3JsZCc7XG5cbmZ1bmN0aW9uIGRvbmUoKSB7fVxuYCwgWzQsIDBdKTtcblxuICAgIGV4cGVjdEltcG9ydExvY2F0aW9uKGBcbmltcG9ydCBoZWxsbyBmcm9tICd3b3JsZCc7XG5yZXF1aXJlKCdhJyk7XG5jb25zdCBjID0gcmVxdWlyZSgnYycpO1xuXG5mdW5jdGlvbiBkb25lKCkge31cbmAsIFs0LCAwXSk7XG59KTtcbiJdfQ==