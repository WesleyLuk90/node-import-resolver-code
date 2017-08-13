'use strict';
'use babel';

var _PackageScanner = require('../PackageScanner');

var _PackageScanner2 = _interopRequireDefault(_PackageScanner);

var _TestProject = require('./TestProject');

var _TestProject2 = _interopRequireDefault(_TestProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PackageScanner', function () {
    it('should scan package.json', function () {
        var scanner = _PackageScanner2.default.fromFilePath(_TestProject2.default.getPath());

        return scanner.getPackageList().then(function (packageList) {
            expect(packageList).toContain('a-package');
            expect(packageList).toContain('b-package');
            expect(packageList).toContain('path');
            expect(packageList).toContain('http');
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L1BhY2thZ2VTY2FubmVyLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsInNjYW5uZXIiLCJmcm9tRmlsZVBhdGgiLCJnZXRQYXRoIiwiZ2V0UGFja2FnZUxpc3QiLCJ0aGVuIiwicGFja2FnZUxpc3QiLCJleHBlY3QiLCJ0b0NvbnRhaW4iXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxnQkFBVCxFQUEyQixZQUFNO0FBQzdCQyxPQUFHLDBCQUFILEVBQStCLFlBQU07QUFDakMsWUFBTUMsVUFBVSx5QkFBZUMsWUFBZixDQUE0QixzQkFBWUMsT0FBWixFQUE1QixDQUFoQjs7QUFFQSxlQUFPRixRQUFRRyxjQUFSLEdBQ0ZDLElBREUsQ0FDRyxVQUFDQyxXQUFELEVBQWlCO0FBQ25CQyxtQkFBT0QsV0FBUCxFQUFvQkUsU0FBcEIsQ0FBOEIsV0FBOUI7QUFDQUQsbUJBQU9ELFdBQVAsRUFBb0JFLFNBQXBCLENBQThCLFdBQTlCO0FBQ0FELG1CQUFPRCxXQUFQLEVBQW9CRSxTQUFwQixDQUE4QixNQUE5QjtBQUNBRCxtQkFBT0QsV0FBUCxFQUFvQkUsU0FBcEIsQ0FBOEIsTUFBOUI7QUFDSCxTQU5FLENBQVA7QUFPSCxLQVZEO0FBV0gsQ0FaRCIsImZpbGUiOiJQYWNrYWdlU2Nhbm5lci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBQYWNrYWdlU2Nhbm5lciBmcm9tICcuLi9QYWNrYWdlU2Nhbm5lcic7XG5pbXBvcnQgVGVzdFByb2plY3QgZnJvbSAnLi9UZXN0UHJvamVjdCc7XG5cbmRlc2NyaWJlKCdQYWNrYWdlU2Nhbm5lcicsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHNjYW4gcGFja2FnZS5qc29uJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzY2FubmVyID0gUGFja2FnZVNjYW5uZXIuZnJvbUZpbGVQYXRoKFRlc3RQcm9qZWN0LmdldFBhdGgoKSk7XG5cbiAgICAgICAgcmV0dXJuIHNjYW5uZXIuZ2V0UGFja2FnZUxpc3QoKVxuICAgICAgICAgICAgLnRoZW4oKHBhY2thZ2VMaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHBhY2thZ2VMaXN0KS50b0NvbnRhaW4oJ2EtcGFja2FnZScpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChwYWNrYWdlTGlzdCkudG9Db250YWluKCdiLXBhY2thZ2UnKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocGFja2FnZUxpc3QpLnRvQ29udGFpbigncGF0aCcpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChwYWNrYWdlTGlzdCkudG9Db250YWluKCdodHRwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyJdfQ==