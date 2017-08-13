'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImportMatchers = function () {
    function ImportMatchers() {
        _classCallCheck(this, ImportMatchers);
    }

    _createClass(ImportMatchers, null, [{
        key: 'getRequireMatchers',
        value: function getRequireMatchers() {
            return [/^\s*require\(\s*['"][^'"]+['"]\s*\)\s*;?$/g, /(var|let|const)\s+[a-z0-9_$]+\s+=\s+require\(.*\)/g];
        }
    }, {
        key: 'getImportMatchers',
        value: function getImportMatchers() {
            return [/import\s+[a-z0-9_$]+\s+from\s+.*?/gi, /import\s+\{(\s*[a-z0-9_$]+\s*,?\s*)+\}\s+from\s+.*?/gi];
        }
    }, {
        key: 'getImportStyleMatchers',
        value: function getImportStyleMatchers() {
            return [/(^|\n)\s*export default /gi, /(^|\n)\s*export /g].concat(_toConsumableArray(this.getImportMatchers()));
        }
    }, {
        key: 'getAllMatchers',
        value: function getAllMatchers() {
            return [].concat(_toConsumableArray(this.getRequireMatchers()), _toConsumableArray(this.getImportMatchers()));
        }
    }]);

    return ImportMatchers;
}();

exports.default = ImportMatchers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnRNYXRjaGVycy5qcyJdLCJuYW1lcyI6WyJJbXBvcnRNYXRjaGVycyIsImdldEltcG9ydE1hdGNoZXJzIiwiZ2V0UmVxdWlyZU1hdGNoZXJzIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs2Q0FDVztBQUN4QixtQkFBTyxDQUNILDRDQURHLEVBRUgsb0RBRkcsQ0FBUDtBQUlIOzs7NENBRTBCO0FBQ3ZCLG1CQUFPLENBQ0gscUNBREcsRUFFSCx1REFGRyxDQUFQO0FBSUg7OztpREFFK0I7QUFDNUIsb0JBQ0ksNEJBREosRUFFSSxtQkFGSiw0QkFHTyxLQUFLQyxpQkFBTCxFQUhQO0FBS0g7Ozt5Q0FFdUI7QUFDcEIsZ0RBQVcsS0FBS0Msa0JBQUwsRUFBWCxzQkFBeUMsS0FBS0QsaUJBQUwsRUFBekM7QUFDSDs7Ozs7O2tCQXpCZ0JELGMiLCJmaWxlIjoiSW1wb3J0TWF0Y2hlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0TWF0Y2hlcnMge1xuICAgIHN0YXRpYyBnZXRSZXF1aXJlTWF0Y2hlcnMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAvXlxccypyZXF1aXJlXFwoXFxzKlsnXCJdW14nXCJdK1snXCJdXFxzKlxcKVxccyo7PyQvZyxcbiAgICAgICAgICAgIC8odmFyfGxldHxjb25zdClcXHMrW2EtejAtOV8kXStcXHMrPVxccytyZXF1aXJlXFwoLipcXCkvZyxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW1wb3J0TWF0Y2hlcnMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAvaW1wb3J0XFxzK1thLXowLTlfJF0rXFxzK2Zyb21cXHMrLio/L2dpLFxuICAgICAgICAgICAgL2ltcG9ydFxccytcXHsoXFxzKlthLXowLTlfJF0rXFxzKiw/XFxzKikrXFx9XFxzK2Zyb21cXHMrLio/L2dpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbXBvcnRTdHlsZU1hdGNoZXJzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyhefFxcbilcXHMqZXhwb3J0IGRlZmF1bHQgL2dpLFxuICAgICAgICAgICAgLyhefFxcbilcXHMqZXhwb3J0IC9nLFxuICAgICAgICAgICAgLi4udGhpcy5nZXRJbXBvcnRNYXRjaGVycygpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxNYXRjaGVycygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmdldFJlcXVpcmVNYXRjaGVycygpLCAuLi50aGlzLmdldEltcG9ydE1hdGNoZXJzKCldO1xuICAgIH1cbn1cbiJdfQ==