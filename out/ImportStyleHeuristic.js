'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImportMatchers = require('./ImportMatchers');

var _ImportMatchers2 = _interopRequireDefault(_ImportMatchers);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImportStyleHeuristic = function () {
    _createClass(ImportStyleHeuristic, null, [{
        key: 'fromSource',
        value: function fromSource(source, config) {
            (0, _assert2.default)(typeof source === 'string');
            (0, _assert2.default)(config);
            return new ImportStyleHeuristic(source, config);
        }
    }]);

    function ImportStyleHeuristic(source, config) {
        _classCallCheck(this, ImportStyleHeuristic);

        Object.assign(this, { source: source, config: config });
    }

    _createClass(ImportStyleHeuristic, [{
        key: 'countRequires',
        value: function countRequires() {
            return this.regexSum(_ImportMatchers2.default.getRequireMatchers());
        }
    }, {
        key: 'countImports',
        value: function countImports() {
            return this.regexSum(_ImportMatchers2.default.getImportStyleMatchers());
        }
    }, {
        key: 'regexSum',
        value: function regexSum(regexes) {
            var _this = this;

            return regexes.reduce(function (sum, regex) {
                return sum + _this.regexCount(regex);
            }, 0);
        }
    }, {
        key: 'regexCount',
        value: function regexCount(regex) {
            var count = 0;
            (0, _assert2.default)(regex.flags.indexOf('g') > -1);
            while (regex.exec(this.source)) {
                count++;
            }
            return count;
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            if (this.config.getImportStyle()) {
                return this.config.getImportStyle();
            }
            var requires = this.countRequires();
            var imports = this.countImports();
            if (requires > imports) {
                return 'require';
            }
            return 'import';
        }
    }]);

    return ImportStyleHeuristic;
}();

exports.default = ImportStyleHeuristic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnRTdHlsZUhldXJpc3RpYy5qcyJdLCJuYW1lcyI6WyJJbXBvcnRTdHlsZUhldXJpc3RpYyIsInNvdXJjZSIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsInJlZ2V4U3VtIiwiZ2V0UmVxdWlyZU1hdGNoZXJzIiwiZ2V0SW1wb3J0U3R5bGVNYXRjaGVycyIsInJlZ2V4ZXMiLCJyZWR1Y2UiLCJzdW0iLCJyZWdleCIsInJlZ2V4Q291bnQiLCJjb3VudCIsImZsYWdzIiwiaW5kZXhPZiIsImV4ZWMiLCJnZXRJbXBvcnRTdHlsZSIsInJlcXVpcmVzIiwiY291bnRSZXF1aXJlcyIsImltcG9ydHMiLCJjb3VudEltcG9ydHMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsb0I7OzttQ0FDQ0MsTSxFQUFRQyxNLEVBQVE7QUFDOUIsa0NBQU8sT0FBT0QsTUFBUCxLQUFrQixRQUF6QjtBQUNBLGtDQUFPQyxNQUFQO0FBQ0EsbUJBQU8sSUFBSUYsb0JBQUosQ0FBeUJDLE1BQXpCLEVBQWlDQyxNQUFqQyxDQUFQO0FBQ0g7OztBQUVELGtDQUFZRCxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QjtBQUFBOztBQUN4QkMsZUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRUgsY0FBRixFQUFVQyxjQUFWLEVBQXBCO0FBQ0g7Ozs7d0NBRWU7QUFDWixtQkFBTyxLQUFLRyxRQUFMLENBQWMseUJBQWVDLGtCQUFmLEVBQWQsQ0FBUDtBQUNIOzs7dUNBRWM7QUFDWCxtQkFBTyxLQUFLRCxRQUFMLENBQWMseUJBQWVFLHNCQUFmLEVBQWQsQ0FBUDtBQUNIOzs7aUNBRVFDLE8sRUFBUztBQUFBOztBQUNkLG1CQUFPQSxRQUFRQyxNQUFSLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsdUJBQWdCRCxNQUFNLE1BQUtFLFVBQUwsQ0FBZ0JELEtBQWhCLENBQXRCO0FBQUEsYUFBZixFQUE2RCxDQUE3RCxDQUFQO0FBQ0g7OzttQ0FFVUEsSyxFQUFPO0FBQ2QsZ0JBQUlFLFFBQVEsQ0FBWjtBQUNBLGtDQUFPRixNQUFNRyxLQUFOLENBQVlDLE9BQVosQ0FBb0IsR0FBcEIsSUFBMkIsQ0FBQyxDQUFuQztBQUNBLG1CQUFPSixNQUFNSyxJQUFOLENBQVcsS0FBS2YsTUFBaEIsQ0FBUCxFQUFnQztBQUM1Qlk7QUFDSDtBQUNELG1CQUFPQSxLQUFQO0FBQ0g7OzttQ0FFVTtBQUNQLGdCQUFJLEtBQUtYLE1BQUwsQ0FBWWUsY0FBWixFQUFKLEVBQWtDO0FBQzlCLHVCQUFPLEtBQUtmLE1BQUwsQ0FBWWUsY0FBWixFQUFQO0FBQ0g7QUFDRCxnQkFBTUMsV0FBVyxLQUFLQyxhQUFMLEVBQWpCO0FBQ0EsZ0JBQU1DLFVBQVUsS0FBS0MsWUFBTCxFQUFoQjtBQUNBLGdCQUFJSCxXQUFXRSxPQUFmLEVBQXdCO0FBQ3BCLHVCQUFPLFNBQVA7QUFDSDtBQUNELG1CQUFPLFFBQVA7QUFDSDs7Ozs7O2tCQTFDZ0JwQixvQiIsImZpbGUiOiJJbXBvcnRTdHlsZUhldXJpc3RpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgSW1wb3J0TWF0Y2hlcnMgZnJvbSAnLi9JbXBvcnRNYXRjaGVycyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcG9ydFN0eWxlSGV1cmlzdGljIHtcbiAgICBzdGF0aWMgZnJvbVNvdXJjZShzb3VyY2UsIGNvbmZpZykge1xuICAgICAgICBhc3NlcnQodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpO1xuICAgICAgICBhc3NlcnQoY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbXBvcnRTdHlsZUhldXJpc3RpYyhzb3VyY2UsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBjb25maWcpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNvdXJjZSwgY29uZmlnIH0pO1xuICAgIH1cblxuICAgIGNvdW50UmVxdWlyZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2V4U3VtKEltcG9ydE1hdGNoZXJzLmdldFJlcXVpcmVNYXRjaGVycygpKTtcbiAgICB9XG5cbiAgICBjb3VudEltcG9ydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2V4U3VtKEltcG9ydE1hdGNoZXJzLmdldEltcG9ydFN0eWxlTWF0Y2hlcnMoKSk7XG4gICAgfVxuXG4gICAgcmVnZXhTdW0ocmVnZXhlcykge1xuICAgICAgICByZXR1cm4gcmVnZXhlcy5yZWR1Y2UoKHN1bSwgcmVnZXgpID0+IHN1bSArIHRoaXMucmVnZXhDb3VudChyZWdleCksIDApO1xuICAgIH1cblxuICAgIHJlZ2V4Q291bnQocmVnZXgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgYXNzZXJ0KHJlZ2V4LmZsYWdzLmluZGV4T2YoJ2cnKSA+IC0xKTtcbiAgICAgICAgd2hpbGUgKHJlZ2V4LmV4ZWModGhpcy5zb3VyY2UpKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICBnZXRTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmdldEltcG9ydFN0eWxlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRJbXBvcnRTdHlsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVpcmVzID0gdGhpcy5jb3VudFJlcXVpcmVzKCk7XG4gICAgICAgIGNvbnN0IGltcG9ydHMgPSB0aGlzLmNvdW50SW1wb3J0cygpO1xuICAgICAgICBpZiAocmVxdWlyZXMgPiBpbXBvcnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlcXVpcmUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW1wb3J0JztcbiAgICB9XG59XG4iXX0=