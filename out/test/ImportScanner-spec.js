'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ImportScanner = require('../ImportScanner');

var _ImportScanner2 = _interopRequireDefault(_ImportScanner);

var _Configuration = require('../Configuration');

var _Configuration2 = _interopRequireDefault(_Configuration);

var _TestProject = require('./TestProject');

var _TestProject2 = _interopRequireDefault(_TestProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var folder = _TestProject2.default.getPath('some-source.js');

describe('ImportScanner', function () {
    var onComplete = void 0;
    var onProgress = void 0;
    var containsPath = function containsPath(path, not) {
        var matches = onProgress.calls.allArgs().filter(function (args) {
            return args[0].some(function (i) {
                return i.getRelativePath() === path;
            });
        });
        if (not) {
            if (matches.length > 0) {
                throw new Error('Expected calls to not contain path ' + path + ' but actual calls were ' + JSON.stringify(onProgress.calls.allArgs().map(function (args) {
                    return args[0];
                }), null, 4));
            }
        } else {

            if (matches.length === 0) {
                throw new Error('Expected calls to contain path ' + path + ' but actual calls were ' + JSON.stringify(onProgress.calls.allArgs().map(function (args) {
                    return args[0];
                }), null, 4));
            }
        }
    };

    beforeEach(function () {
        onComplete = jasmine.createSpy('onComplete');
        onProgress = jasmine.createSpy('onProgress');
    });

    it('should scan for imports', function () {
        var importScanner = _ImportScanner2.default.create(folder, 'import1', onProgress, _Configuration2.default.createDefault());
        return importScanner.start().then(onComplete).then(function () {
            containsPath('./import1');
            containsPath('./nested/import1');
            expect(onProgress.calls.mostRecent().args).toEqual(onComplete.calls.first().args);
        });
    });

    var expectImportFound = function expectImportFound(token, importPath) {
        it('it should find ' + token + ' as ' + importPath, function () {
            var importScanner = _ImportScanner2.default.create(folder, token, onProgress, _Configuration2.default.createDefault());
            return importScanner.start().then(onComplete).then(function () {
                containsPath(importPath);
            });
        });
    };

    expectImportFound('ASecondImport', './a-second-import');
    expectImportFound('aSecondImport', './a-second-import');
    expectImportFound('_aSecondImport', './a-second-import');
    expectImportFound('AThirdImport', './AThirdImport');
    expectImportFound('aPackage', 'a-package');

    it('it should find ignore ignored folders', function () {
        var importScanner = _ImportScanner2.default.create(folder, 'Import1', onProgress, _Configuration2.default.createDefault().setIgnoredFolders(['nested']));
        return importScanner.start().then(onComplete).then(function () {
            containsPath('./nested/import1', true);
        });
    });

    it('it should start at the configured root folders', function () {
        var importScanner = _ImportScanner2.default.create(folder, 'Import1', onProgress, _Configuration2.default.createDefault().setRootFolder(_TestProject2.default.getPath('nested')));
        return importScanner.start().then(onComplete).then(function () {
            containsPath('./nested/import1');
            containsPath('./import1', true);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0ltcG9ydFNjYW5uZXItc3BlYy5qcyJdLCJuYW1lcyI6WyJmb2xkZXIiLCJnZXRQYXRoIiwiZGVzY3JpYmUiLCJvbkNvbXBsZXRlIiwib25Qcm9ncmVzcyIsImNvbnRhaW5zUGF0aCIsInBhdGgiLCJub3QiLCJtYXRjaGVzIiwiY2FsbHMiLCJhbGxBcmdzIiwiZmlsdGVyIiwiYXJncyIsInNvbWUiLCJpIiwiZ2V0UmVsYXRpdmVQYXRoIiwibGVuZ3RoIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwiYmVmb3JlRWFjaCIsImphc21pbmUiLCJjcmVhdGVTcHkiLCJpdCIsImltcG9ydFNjYW5uZXIiLCJjcmVhdGUiLCJjcmVhdGVEZWZhdWx0Iiwic3RhcnQiLCJ0aGVuIiwiZXhwZWN0IiwibW9zdFJlY2VudCIsInRvRXF1YWwiLCJmaXJzdCIsImV4cGVjdEltcG9ydEZvdW5kIiwidG9rZW4iLCJpbXBvcnRQYXRoIiwic2V0SWdub3JlZEZvbGRlcnMiLCJzZXRSb290Rm9sZGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLHNCQUFZQyxPQUFaLENBQW9CLGdCQUFwQixDQUFmOztBQUVBQyxTQUFTLGVBQVQsRUFBMEIsWUFBTTtBQUM1QixRQUFJQyxtQkFBSjtBQUNBLFFBQUlDLG1CQUFKO0FBQ0EsUUFBSUMsZUFBZSxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQzlCLFlBQU1DLFVBQVVKLFdBQVdLLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCQyxNQUEzQixDQUFrQztBQUFBLG1CQUFRQyxLQUFLLENBQUwsRUFBUUMsSUFBUixDQUFhO0FBQUEsdUJBQUtDLEVBQUVDLGVBQUYsT0FBd0JULElBQTdCO0FBQUEsYUFBYixDQUFSO0FBQUEsU0FBbEMsQ0FBaEI7QUFDQSxZQUFJQyxHQUFKLEVBQVM7QUFDTCxnQkFBSUMsUUFB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QixFQUE2QixTQUE3QixFQUF3Q0ksVUFBeEMsRUFBb0Qsd0JBQWN1QixhQUFkLEdBQThCVyxhQUE5QixDQUE0QyxzQkFBWXJDLE9BQVosQ0FBb0IsUUFBcEIsQ0FBNUMsQ0FBcEQsQ0FBdEI7QUFDQSxlQUFPd0IsY0FBY0csS0FBZCxHQUNGQyxJQURFLENBQ0cxQixVQURILEVBRUYwQixJQUZFLENBRUcsWUFBTTtBQUNSeEIseUJBQWEsa0JBQWI7QUFDQUEseUJBQWEsV0FBYixFQUEwQixJQUExQjtBQUNILFNBTEUsQ0FBUDtBQU1ILEtBUkQ7QUFTSCxDQXJFRCIsImZpbGUiOiJJbXBvcnRTY2FubmVyLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBJbXBvcnRTY2FubmVyIGZyb20gJy4uL0ltcG9ydFNjYW5uZXInO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi4vQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgVGVzdFByb2plY3QgZnJvbSAnLi9UZXN0UHJvamVjdCc7XG5cbmNvbnN0IGZvbGRlciA9IFRlc3RQcm9qZWN0LmdldFBhdGgoJ3NvbWUtc291cmNlLmpzJyk7XG5cbmRlc2NyaWJlKCdJbXBvcnRTY2FubmVyJywgKCkgPT4ge1xuICAgIGxldCBvbkNvbXBsZXRlO1xuICAgIGxldCBvblByb2dyZXNzO1xuICAgIGxldCBjb250YWluc1BhdGggPSAocGF0aCwgbm90KSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBvblByb2dyZXNzLmNhbGxzLmFsbEFyZ3MoKS5maWx0ZXIoYXJncyA9PiBhcmdzWzBdLnNvbWUoaSA9PiBpLmdldFJlbGF0aXZlUGF0aCgpID09PSBwYXRoKSk7XG4gICAgICAgIGlmIChub3QpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGNhbGxzIHRvIG5vdCBjb250YWluIHBhdGggJHtwYXRofSBidXQgYWN0dWFsIGNhbGxzIHdlcmUgJHtKU09OLnN0cmluZ2lmeShvblByb2dyZXNzLmNhbGxzLmFsbEFyZ3MoKS5tYXAoYXJncyA9PiBhcmdzWzBdKSwgbnVsbCwgNCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgY2FsbHMgdG8gY29udGFpbiBwYXRoICR7cGF0aH0gYnV0IGFjdHVhbCBjYWxscyB3ZXJlICR7SlNPTi5zdHJpbmdpZnkob25Qcm9ncmVzcy5jYWxscy5hbGxBcmdzKCkubWFwKGFyZ3MgPT4gYXJnc1swXSksIG51bGwsIDQpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBvbkNvbXBsZXRlID0gamFzbWluZS5jcmVhdGVTcHkoJ29uQ29tcGxldGUnKTtcbiAgICAgICAgb25Qcm9ncmVzcyA9IGphc21pbmUuY3JlYXRlU3B5KCdvblByb2dyZXNzJyk7XG5cbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgc2NhbiBmb3IgaW1wb3J0cycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1wb3J0U2Nhbm5lciA9IEltcG9ydFNjYW5uZXIuY3JlYXRlKGZvbGRlciwgJ2ltcG9ydDEnLCBvblByb2dyZXNzLCBDb25maWd1cmF0aW9uLmNyZWF0ZURlZmF1bHQoKSk7XG4gICAgICAgIHJldHVybiBpbXBvcnRTY2FubmVyLnN0YXJ0KClcbiAgICAgICAgICAgIC50aGVuKG9uQ29tcGxldGUpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFpbnNQYXRoKCcuL2ltcG9ydDEnKTtcbiAgICAgICAgICAgICAgICBjb250YWluc1BhdGgoJy4vbmVzdGVkL2ltcG9ydDEnKTtcbiAgICAgICAgICAgICAgICBleHBlY3Qob25Qcm9ncmVzcy5jYWxscy5tb3N0UmVjZW50KCkuYXJncykudG9FcXVhbChvbkNvbXBsZXRlLmNhbGxzLmZpcnN0KCkuYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cGVjdEltcG9ydEZvdW5kID0gKHRva2VuLCBpbXBvcnRQYXRoKSA9PiB7XG4gICAgICAgIGl0KGBpdCBzaG91bGQgZmluZCAke3Rva2VufSBhcyAke2ltcG9ydFBhdGh9YCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1wb3J0U2Nhbm5lciA9IEltcG9ydFNjYW5uZXIuY3JlYXRlKGZvbGRlciwgdG9rZW4sIG9uUHJvZ3Jlc3MsIENvbmZpZ3VyYXRpb24uY3JlYXRlRGVmYXVsdCgpKTtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnRTY2FubmVyLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAudGhlbihvbkNvbXBsZXRlKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnNQYXRoKGltcG9ydFBhdGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZXhwZWN0SW1wb3J0Rm91bmQoJ0FTZWNvbmRJbXBvcnQnLCAnLi9hLXNlY29uZC1pbXBvcnQnKTtcbiAgICBleHBlY3RJbXBvcnRGb3VuZCgnYVNlY29uZEltcG9ydCcsICcuL2Etc2Vjb25kLWltcG9ydCcpO1xuICAgIGV4cGVjdEltcG9ydEZvdW5kKCdfYVNlY29uZEltcG9ydCcsICcuL2Etc2Vjb25kLWltcG9ydCcpO1xuICAgIGV4cGVjdEltcG9ydEZvdW5kKCdBVGhpcmRJbXBvcnQnLCAnLi9BVGhpcmRJbXBvcnQnKTtcbiAgICBleHBlY3RJbXBvcnRGb3VuZCgnYVBhY2thZ2UnLCAnYS1wYWNrYWdlJyk7XG5cbiAgICBpdChgaXQgc2hvdWxkIGZpbmQgaWdub3JlIGlnbm9yZWQgZm9sZGVyc2AsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1wb3J0U2Nhbm5lciA9IEltcG9ydFNjYW5uZXIuY3JlYXRlKGZvbGRlciwgJ0ltcG9ydDEnLCBvblByb2dyZXNzLCBDb25maWd1cmF0aW9uLmNyZWF0ZURlZmF1bHQoKS5zZXRJZ25vcmVkRm9sZGVycyhbJ25lc3RlZCddKSk7XG4gICAgICAgIHJldHVybiBpbXBvcnRTY2FubmVyLnN0YXJ0KClcbiAgICAgICAgICAgIC50aGVuKG9uQ29tcGxldGUpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFpbnNQYXRoKCcuL25lc3RlZC9pbXBvcnQxJywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KGBpdCBzaG91bGQgc3RhcnQgYXQgdGhlIGNvbmZpZ3VyZWQgcm9vdCBmb2xkZXJzYCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbXBvcnRTY2FubmVyID0gSW1wb3J0U2Nhbm5lci5jcmVhdGUoZm9sZGVyLCAnSW1wb3J0MScsIG9uUHJvZ3Jlc3MsIENvbmZpZ3VyYXRpb24uY3JlYXRlRGVmYXVsdCgpLnNldFJvb3RGb2xkZXIoVGVzdFByb2plY3QuZ2V0UGF0aCgnbmVzdGVkJykpKTtcbiAgICAgICAgcmV0dXJuIGltcG9ydFNjYW5uZXIuc3RhcnQoKVxuICAgICAgICAgICAgLnRoZW4ob25Db21wbGV0ZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluc1BhdGgoJy4vbmVzdGVkL2ltcG9ydDEnKTtcbiAgICAgICAgICAgICAgICBjb250YWluc1BhdGgoJy4vaW1wb3J0MScsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXX0=