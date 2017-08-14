'use strict';

var _ImportLocationSearcher = require('../ImportLocationSearcher');

var _ImportLocationSearcher2 = _interopRequireDefault(_ImportLocationSearcher);

var _EditorPosition = require('../EditorPosition');

var _EditorPosition2 = _interopRequireDefault(_EditorPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImportLocationSearcher', function () {
    function expectImportLocation(source, location) {
        it('should determine the insert location for ' + source + ' as ' + location, function () {
            var searcher = _ImportLocationSearcher2.default.fromSource(source);
            expect(searcher.getLocation()).toEqual(new _EditorPosition2.default(location[0], location[1]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydExvY2F0aW9uU2VhcmNoZXItc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImV4cGVjdEltcG9ydExvY2F0aW9uIiwic291cmNlIiwibG9jYXRpb24iLCJpdCIsInNlYXJjaGVyIiwiZnJvbVNvdXJjZSIsImV4cGVjdCIsImdldExvY2F0aW9uIiwidG9FcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3JDLGFBQVNDLG9CQUFULENBQThCQyxNQUE5QixFQUFzQ0MsUUFBdEMsRUFBZ0Q7QUFDNUNDLHlEQUErQ0YsTUFBL0MsWUFBNERDLFFBQTVELEVBQXdFLFlBQU07QUFDMUUsZ0JBQU1FLFdBQVcsaUNBQXVCQyxVQUF2QixDQUFrQ0osTUFBbEMsQ0FBakI7QUFDQUssbUJBQU9GLFNBQVNHLFdBQVQsRUFBUCxFQUErQkMsT0FBL0IsQ0FBdUMsNkJBQW1CTixTQUFTLENBQVQsQ0FBbkIsRUFBZ0NBLFNBQVMsQ0FBVCxDQUFoQyxDQUF2QztBQUNILFNBSEQ7QUFJSDs7QUFFREYseUJBQXFCLEVBQXJCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekI7O0FBRUFBLG1GQUlELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKQzs7QUFNQUEsbUhBTUQsQ0FBQyxDQUFELEVBQUksQ0FBSixDQU5DOztBQVFBQSx5SkFRRCxDQUFDLENBQUQsRUFBSSxDQUFKLENBUkM7O0FBVUFBLG9JQU9ELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FQQzs7QUFTQUEsa0hBTUQsQ0FBQyxDQUFELEVBQUksQ0FBSixDQU5DOztBQVFBQSwrSEFNRCxDQUFDLENBQUQsRUFBSSxDQUFKLENBTkM7QUFPSCxDQTFERCIsImZpbGUiOiJJbXBvcnRMb2NhdGlvblNlYXJjaGVyLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1wb3J0TG9jYXRpb25TZWFyY2hlciBmcm9tICcuLi9JbXBvcnRMb2NhdGlvblNlYXJjaGVyJztcbmltcG9ydCBFZGl0b3JQb3NpdGlvbiBmcm9tICcuLi9FZGl0b3JQb3NpdGlvbic7XG5cbmRlc2NyaWJlKCdJbXBvcnRMb2NhdGlvblNlYXJjaGVyJywgKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGV4cGVjdEltcG9ydExvY2F0aW9uKHNvdXJjZSwgbG9jYXRpb24pIHtcbiAgICAgICAgaXQoYHNob3VsZCBkZXRlcm1pbmUgdGhlIGluc2VydCBsb2NhdGlvbiBmb3IgJHtzb3VyY2V9IGFzICR7bG9jYXRpb259YCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBJbXBvcnRMb2NhdGlvblNlYXJjaGVyLmZyb21Tb3VyY2Uoc291cmNlKTtcbiAgICAgICAgICAgIGV4cGVjdChzZWFyY2hlci5nZXRMb2NhdGlvbigpKS50b0VxdWFsKG5ldyBFZGl0b3JQb3NpdGlvbihsb2NhdGlvblswXSwgbG9jYXRpb25bMV0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwZWN0SW1wb3J0TG9jYXRpb24oJycsIFswLCAwXSk7XG5cbiAgICBleHBlY3RJbXBvcnRMb2NhdGlvbihgXG5pbXBvcnQgaGVsbG8gZnJvbSAnd29ybGQnO1xuXG5mdW5jdGlvbiBkb25lKCkge31cbmAsIFsyLCAwXSk7XG5cbiAgICBleHBlY3RJbXBvcnRMb2NhdGlvbihgXG5pbXBvcnQgaGVsbG8gZnJvbSAnd29ybGQnO1xuXG5pbXBvcnQgZG9uZSBmcm9tICd0aGluZ3MnO1xuXG5mdW5jdGlvbiBkb25lKCkge31cbmAsIFs0LCAwXSk7XG5cbiAgICBleHBlY3RJbXBvcnRMb2NhdGlvbihgXG4gICAgICAgIC8vIHNvbWUgY29tbWVudFxuLy9nb2VzIGhlcmVcbmltcG9ydCBoZWxsbyBmcm9tICd3b3JsZCc7XG5cbmltcG9ydCBkb25lIGZyb20gJ3RoaW5ncyc7XG5cbmZ1bmN0aW9uIGRvbmUoKSB7fVxuYCwgWzYsIDBdKTtcblxuICAgIGV4cGVjdEltcG9ydExvY2F0aW9uKGBcbiAgICAgICAgLyoqXG4gICAgICAgIGl0cyBhIGNvbW1lbnRcbiAgICAgICAgKiovXG5pbXBvcnQgaGVsbG8gZnJvbSAnd29ybGQnO1xuXG5mdW5jdGlvbiBkb25lKCkge31cbmAsIFs1LCAwXSk7XG5cbiAgICBleHBlY3RJbXBvcnRMb2NhdGlvbihgXG4ndXNlIHN0cmljdCc7XG4ndXNlIGRhdGEnXG5pbXBvcnQgaGVsbG8gZnJvbSAnd29ybGQnO1xuXG5mdW5jdGlvbiBkb25lKCkge31cbmAsIFs0LCAwXSk7XG5cbiAgICBleHBlY3RJbXBvcnRMb2NhdGlvbihgXG5pbXBvcnQgaGVsbG8gZnJvbSAnd29ybGQnO1xucmVxdWlyZSgnYScpO1xuY29uc3QgYyA9IHJlcXVpcmUoJ2MnKTtcblxuZnVuY3Rpb24gZG9uZSgpIHt9XG5gLCBbNCwgMF0pO1xufSk7XG4iXX0=