'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImportMatchers = require('./ImportMatchers');

var _ImportMatchers2 = _interopRequireDefault(_ImportMatchers);

var _EditorPosition = require('./EditorPosition');

var _EditorPosition2 = _interopRequireDefault(_EditorPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImportLocationSearcher = function () {
    _createClass(ImportLocationSearcher, null, [{
        key: 'fromSource',
        value: function fromSource(source) {
            return new ImportLocationSearcher(source);
        }
    }]);

    function ImportLocationSearcher(source) {
        _classCallCheck(this, ImportLocationSearcher);

        Object.assign(this, { source: source });
    }

    _createClass(ImportLocationSearcher, [{
        key: 'getLocation',
        value: function getLocation() {
            var lines = this.source.split('\n');
            var line = void 0;
            var backtrackCount = 0;
            var inComment = false;
            for (line = 0; line < lines.length; line++) {
                if (this.beginsComment(lines[line])) {
                    inComment = true;
                }
                if (!this.isSkippable(lines[line]) && !inComment) {
                    break;
                }
                if (this.endsComment(lines[line])) {
                    inComment = false;
                }
                if (this.isBacktrackingLine(lines[line]) && !inComment) {
                    backtrackCount++;
                } else {
                    backtrackCount = 0;
                }
            }
            return new _EditorPosition2.default(line - backtrackCount, 0);
        }
    }, {
        key: 'isSkippable',
        value: function isSkippable(line) {
            return this.getSkippableMatchers().some(function (m) {
                return line.match(m);
            });
        }
    }, {
        key: 'isBacktrackingLine',
        value: function isBacktrackingLine(line) {
            return this.getBacktrackingLines().some(function (m) {
                return line.match(m);
            });
        }
    }, {
        key: 'getBacktrackingLines',
        value: function getBacktrackingLines() {
            return [/^\s*$/];
        }
    }, {
        key: 'getSkippableMatchers',
        value: function getSkippableMatchers() {
            return [/^\s*['"][^'"]+['"]\s*;?\s*$/, /^\s*\/\/.*/].concat(_toConsumableArray(this.getBacktrackingLines()), _toConsumableArray(_ImportMatchers2.default.getAllMatchers()));
        }
    }, {
        key: 'beginsComment',
        value: function beginsComment(line) {
            return line.match(/\/\*/);
        }
    }, {
        key: 'endsComment',
        value: function endsComment(line) {
            return line.match(/\*\//);
        }
    }]);

    return ImportLocationSearcher;
}();

exports.default = ImportLocationSearcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnRMb2NhdGlvblNlYXJjaGVyLmpzIl0sIm5hbWVzIjpbIkltcG9ydExvY2F0aW9uU2VhcmNoZXIiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsInNwbGl0IiwibGluZSIsImJhY2t0cmFja0NvdW50IiwiaW5Db21tZW50IiwibGVuZ3RoIiwiYmVnaW5zQ29tbWVudCIsImlzU2tpcHBhYmxlIiwiZW5kc0NvbW1lbnQiLCJpc0JhY2t0cmFja2luZ0xpbmUiLCJnZXRTa2lwcGFibGVNYXRjaGVycyIsInNvbWUiLCJtYXRjaCIsIm0iLCJnZXRCYWNrdHJhY2tpbmdMaW5lcyIsImdldEFsbE1hdGNoZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7bUNBQ0NDLE0sRUFBUTtBQUN0QixtQkFBTyxJQUFJRCxzQkFBSixDQUEyQkMsTUFBM0IsQ0FBUDtBQUNIOzs7QUFFRCxvQ0FBWUEsTUFBWixFQUFvQjtBQUFBOztBQUNoQkMsZUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRUYsY0FBRixFQUFwQjtBQUNIOzs7O3NDQUVhO0FBQ1YsZ0JBQU1HLFFBQVEsS0FBS0gsTUFBTCxDQUFZSSxLQUFaLENBQWtCLElBQWxCLENBQWQ7QUFDQSxnQkFBSUMsYUFBSjtBQUNBLGdCQUFJQyxpQkFBaUIsQ0FBckI7QUFDQSxnQkFBSUMsWUFBWSxLQUFoQjtBQUNBLGlCQUFLRixPQUFPLENBQVosRUFBZUEsT0FBT0YsTUFBTUssTUFBNUIsRUFBb0NILE1BQXBDLEVBQTRDO0FBQ3hDLG9CQUFJLEtBQUtJLGFBQUwsQ0FBbUJOLE1BQU1FLElBQU4sQ0FBbkIsQ0FBSixFQUFxQztBQUNqQ0UsZ0NBQVksSUFBWjtBQUNIO0FBQ0Qsb0JBQUksQ0FBQyxLQUFLRyxXQUFMLENBQWlCUCxNQUFNRSxJQUFOLENBQWpCLENBQUQsSUFBa0MsQ0FBQ0UsU0FBdkMsRUFBa0Q7QUFDOUM7QUFDSDtBQUNELG9CQUFJLEtBQUtJLFdBQUwsQ0FBaUJSLE1BQU1FLElBQU4sQ0FBakIsQ0FBSixFQUFtQztBQUMvQkUsZ0NBQVksS0FBWjtBQUNIO0FBQ0Qsb0JBQUksS0FBS0ssa0JBQUwsQ0FBd0JULE1BQU1FLElBQU4sQ0FBeEIsS0FBd0MsQ0FBQ0UsU0FBN0MsRUFBd0Q7QUFDcEREO0FBQ0gsaUJBRkQsTUFFTztBQUNIQSxxQ0FBaUIsQ0FBakI7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sNkJBQW1CRCxPQUFPQyxjQUExQixFQUEwQyxDQUExQyxDQUFQO0FBQ0g7OztvQ0FFV0QsSSxFQUFNO0FBQ2QsbUJBQU8sS0FBS1Esb0JBQUwsR0FBNEJDLElBQTVCLENBQWlDO0FBQUEsdUJBQUtULEtBQUtVLEtBQUwsQ0FBV0MsQ0FBWCxDQUFMO0FBQUEsYUFBakMsQ0FBUDtBQUNIOzs7MkNBRWtCWCxJLEVBQU07QUFDckIsbUJBQU8sS0FBS1ksb0JBQUwsR0FBNEJILElBQTVCLENBQWlDO0FBQUEsdUJBQUtULEtBQUtVLEtBQUwsQ0FBV0MsQ0FBWCxDQUFMO0FBQUEsYUFBakMsQ0FBUDtBQUNIOzs7K0NBRXNCO0FBQ25CLG1CQUFPLENBQ0gsT0FERyxDQUFQO0FBR0g7OzsrQ0FFc0I7QUFDbkIsb0JBQ0ksNkJBREosRUFFSSxZQUZKLDRCQUdPLEtBQUtDLG9CQUFMLEVBSFAsc0JBSU8seUJBQWVDLGNBQWYsRUFKUDtBQU1IOzs7c0NBRWFiLEksRUFBTTtBQUNoQixtQkFBT0EsS0FBS1UsS0FBTCxDQUFXLE1BQVgsQ0FBUDtBQUNIOzs7b0NBRVdWLEksRUFBTTtBQUNkLG1CQUFPQSxLQUFLVSxLQUFMLENBQVcsTUFBWCxDQUFQO0FBQ0g7Ozs7OztrQkE5RGdCaEIsc0IiLCJmaWxlIjoiSW1wb3J0TG9jYXRpb25TZWFyY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbXBvcnRNYXRjaGVycyBmcm9tICcuL0ltcG9ydE1hdGNoZXJzJztcbmltcG9ydCBFZGl0b3JQb3NpdGlvbiBmcm9tICcuL0VkaXRvclBvc2l0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0TG9jYXRpb25TZWFyY2hlciB7XG4gICAgc3RhdGljIGZyb21Tb3VyY2Uoc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW1wb3J0TG9jYXRpb25TZWFyY2hlcihzb3VyY2UpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgc291cmNlIH0pO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuc291cmNlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgIGxldCBiYWNrdHJhY2tDb3VudCA9IDA7XG4gICAgICAgIGxldCBpbkNvbW1lbnQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsaW5lID0gMDsgbGluZSA8IGxpbmVzLmxlbmd0aDsgbGluZSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iZWdpbnNDb21tZW50KGxpbmVzW2xpbmVdKSkge1xuICAgICAgICAgICAgICAgIGluQ29tbWVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTa2lwcGFibGUobGluZXNbbGluZV0pICYmICFpbkNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVuZHNDb21tZW50KGxpbmVzW2xpbmVdKSkge1xuICAgICAgICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCYWNrdHJhY2tpbmdMaW5lKGxpbmVzW2xpbmVdKSAmJiAhaW5Db21tZW50KSB7XG4gICAgICAgICAgICAgICAgYmFja3RyYWNrQ291bnQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFja3RyYWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRWRpdG9yUG9zaXRpb24obGluZSAtIGJhY2t0cmFja0NvdW50LCAwKTtcbiAgICB9XG5cbiAgICBpc1NraXBwYWJsZShsaW5lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNraXBwYWJsZU1hdGNoZXJzKCkuc29tZShtID0+IGxpbmUubWF0Y2gobSkpO1xuICAgIH1cblxuICAgIGlzQmFja3RyYWNraW5nTGluZShsaW5lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhY2t0cmFja2luZ0xpbmVzKCkuc29tZShtID0+IGxpbmUubWF0Y2gobSkpO1xuICAgIH1cblxuICAgIGdldEJhY2t0cmFja2luZ0xpbmVzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgL15cXHMqJC8sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0U2tpcHBhYmxlTWF0Y2hlcnMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAvXlxccypbJ1wiXVteJ1wiXStbJ1wiXVxccyo7P1xccyokLyxcbiAgICAgICAgICAgIC9eXFxzKlxcL1xcLy4qLyxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0QmFja3RyYWNraW5nTGluZXMoKSxcbiAgICAgICAgICAgIC4uLkltcG9ydE1hdGNoZXJzLmdldEFsbE1hdGNoZXJzKCksXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYmVnaW5zQ29tbWVudChsaW5lKSB7XG4gICAgICAgIHJldHVybiBsaW5lLm1hdGNoKC9cXC9cXCovKTtcbiAgICB9XG5cbiAgICBlbmRzQ29tbWVudChsaW5lKSB7XG4gICAgICAgIHJldHVybiBsaW5lLm1hdGNoKC9cXCpcXC8vKTtcbiAgICB9XG59XG4iXX0=