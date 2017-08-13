'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImportMatchers = require('./ImportMatchers');

var _ImportMatchers2 = _interopRequireDefault(_ImportMatchers);

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
            return [line - backtrackCount, 0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbXBvcnRMb2NhdGlvblNlYXJjaGVyLmpzIl0sIm5hbWVzIjpbIkltcG9ydExvY2F0aW9uU2VhcmNoZXIiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsInNwbGl0IiwibGluZSIsImJhY2t0cmFja0NvdW50IiwiaW5Db21tZW50IiwibGVuZ3RoIiwiYmVnaW5zQ29tbWVudCIsImlzU2tpcHBhYmxlIiwiZW5kc0NvbW1lbnQiLCJpc0JhY2t0cmFja2luZ0xpbmUiLCJnZXRTa2lwcGFibGVNYXRjaGVycyIsInNvbWUiLCJtYXRjaCIsIm0iLCJnZXRCYWNrdHJhY2tpbmdMaW5lcyIsImdldEFsbE1hdGNoZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBRXFCQSxzQjs7O21DQUNDQyxNLEVBQVE7QUFDdEIsbUJBQU8sSUFBSUQsc0JBQUosQ0FBMkJDLE1BQTNCLENBQVA7QUFDSDs7O0FBRUQsb0NBQVlBLE1BQVosRUFBb0I7QUFBQTs7QUFDaEJDLGVBQU9DLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLEVBQUVGLGNBQUYsRUFBcEI7QUFDSDs7OztzQ0FFYTtBQUNWLGdCQUFNRyxRQUFRLEtBQUtILE1BQUwsQ0FBWUksS0FBWixDQUFrQixJQUFsQixDQUFkO0FBQ0EsZ0JBQUlDLGFBQUo7QUFDQSxnQkFBSUMsaUJBQWlCLENBQXJCO0FBQ0EsZ0JBQUlDLFlBQVksS0FBaEI7QUFDQSxpQkFBS0YsT0FBTyxDQUFaLEVBQWVBLE9BQU9GLE1BQU1LLE1BQTVCLEVBQW9DSCxNQUFwQyxFQUE0QztBQUN4QyxvQkFBSSxLQUFLSSxhQUFMLENBQW1CTixNQUFNRSxJQUFOLENBQW5CLENBQUosRUFBcUM7QUFDakNFLGdDQUFZLElBQVo7QUFDSDtBQUNELG9CQUFJLENBQUMsS0FBS0csV0FBTCxDQUFpQlAsTUFBTUUsSUFBTixDQUFqQixDQUFELElBQWtDLENBQUNFLFNBQXZDLEVBQWtEO0FBQzlDO0FBQ0g7QUFDRCxvQkFBSSxLQUFLSSxXQUFMLENBQWlCUixNQUFNRSxJQUFOLENBQWpCLENBQUosRUFBbUM7QUFDL0JFLGdDQUFZLEtBQVo7QUFDSDtBQUNELG9CQUFJLEtBQUtLLGtCQUFMLENBQXdCVCxNQUFNRSxJQUFOLENBQXhCLEtBQXdDLENBQUNFLFNBQTdDLEVBQXdEO0FBQ3BERDtBQUNILGlCQUZELE1BRU87QUFDSEEscUNBQWlCLENBQWpCO0FBQ0g7QUFDSjtBQUNELG1CQUFPLENBQUNELE9BQU9DLGNBQVIsRUFBd0IsQ0FBeEIsQ0FBUDtBQUNIOzs7b0NBRVdELEksRUFBTTtBQUNkLG1CQUFPLEtBQUtRLG9CQUFMLEdBQTRCQyxJQUE1QixDQUFpQztBQUFBLHVCQUFLVCxLQUFLVSxLQUFMLENBQVdDLENBQVgsQ0FBTDtBQUFBLGFBQWpDLENBQVA7QUFDSDs7OzJDQUVrQlgsSSxFQUFNO0FBQ3JCLG1CQUFPLEtBQUtZLG9CQUFMLEdBQTRCSCxJQUE1QixDQUFpQztBQUFBLHVCQUFLVCxLQUFLVSxLQUFMLENBQVdDLENBQVgsQ0FBTDtBQUFBLGFBQWpDLENBQVA7QUFDSDs7OytDQUVzQjtBQUNuQixtQkFBTyxDQUNILE9BREcsQ0FBUDtBQUdIOzs7K0NBRXNCO0FBQ25CLG9CQUNJLDZCQURKLEVBRUksWUFGSiw0QkFHTyxLQUFLQyxvQkFBTCxFQUhQLHNCQUlPLHlCQUFlQyxjQUFmLEVBSlA7QUFNSDs7O3NDQUVhYixJLEVBQU07QUFDaEIsbUJBQU9BLEtBQUtVLEtBQUwsQ0FBVyxNQUFYLENBQVA7QUFDSDs7O29DQUVXVixJLEVBQU07QUFDZCxtQkFBT0EsS0FBS1UsS0FBTCxDQUFXLE1BQVgsQ0FBUDtBQUNIOzs7Ozs7a0JBOURnQmhCLHNCIiwiZmlsZSI6IkltcG9ydExvY2F0aW9uU2VhcmNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1wb3J0TWF0Y2hlcnMgZnJvbSAnLi9JbXBvcnRNYXRjaGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcG9ydExvY2F0aW9uU2VhcmNoZXIge1xuICAgIHN0YXRpYyBmcm9tU291cmNlKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEltcG9ydExvY2F0aW9uU2VhcmNoZXIoc291cmNlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNvdXJjZSB9KTtcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSB0aGlzLnNvdXJjZS5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCBsaW5lO1xuICAgICAgICBsZXQgYmFja3RyYWNrQ291bnQgPSAwO1xuICAgICAgICBsZXQgaW5Db21tZW50ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGluZSA9IDA7IGxpbmUgPCBsaW5lcy5sZW5ndGg7IGxpbmUrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmVnaW5zQ29tbWVudChsaW5lc1tsaW5lXSkpIHtcbiAgICAgICAgICAgICAgICBpbkNvbW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2tpcHBhYmxlKGxpbmVzW2xpbmVdKSAmJiAhaW5Db21tZW50KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lbmRzQ29tbWVudChsaW5lc1tsaW5lXSkpIHtcbiAgICAgICAgICAgICAgICBpbkNvbW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQmFja3RyYWNraW5nTGluZShsaW5lc1tsaW5lXSkgJiYgIWluQ29tbWVudCkge1xuICAgICAgICAgICAgICAgIGJhY2t0cmFja0NvdW50Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhY2t0cmFja0NvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2xpbmUgLSBiYWNrdHJhY2tDb3VudCwgMF07XG4gICAgfVxuXG4gICAgaXNTa2lwcGFibGUobGluZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTa2lwcGFibGVNYXRjaGVycygpLnNvbWUobSA9PiBsaW5lLm1hdGNoKG0pKTtcbiAgICB9XG5cbiAgICBpc0JhY2t0cmFja2luZ0xpbmUobGluZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYWNrdHJhY2tpbmdMaW5lcygpLnNvbWUobSA9PiBsaW5lLm1hdGNoKG0pKTtcbiAgICB9XG5cbiAgICBnZXRCYWNrdHJhY2tpbmdMaW5lcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC9eXFxzKiQvLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGdldFNraXBwYWJsZU1hdGNoZXJzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgL15cXHMqWydcIl1bXidcIl0rWydcIl1cXHMqOz9cXHMqJC8sXG4gICAgICAgICAgICAvXlxccypcXC9cXC8uKi8sXG4gICAgICAgICAgICAuLi50aGlzLmdldEJhY2t0cmFja2luZ0xpbmVzKCksXG4gICAgICAgICAgICAuLi5JbXBvcnRNYXRjaGVycy5nZXRBbGxNYXRjaGVycygpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGJlZ2luc0NvbW1lbnQobGluZSkge1xuICAgICAgICByZXR1cm4gbGluZS5tYXRjaCgvXFwvXFwqLyk7XG4gICAgfVxuXG4gICAgZW5kc0NvbW1lbnQobGluZSkge1xuICAgICAgICByZXR1cm4gbGluZS5tYXRjaCgvXFwqXFwvLyk7XG4gICAgfVxufVxuIl19