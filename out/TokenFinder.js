'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _EditorPosition = require('./EditorPosition');

var _EditorPosition2 = _interopRequireDefault(_EditorPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenMatcher = /[a-z_$0-9]/i;
var maxScan = 100;

var TokenFinder = function () {
    function TokenFinder() {
        _classCallCheck(this, TokenFinder);
    }

    _createClass(TokenFinder, [{
        key: 'getToken',
        value: function getToken() {
            var position = _Editor2.default.getEditorCursorStart();
            var token = this.scanReverse(position) + this.scanForward(position);
            if (this.isEmpty(token)) {
                return null;
            }
            return token;
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(token) {
            return token.length === 0;
        }
    }, {
        key: 'scanForward',
        value: function scanForward(startCursor) {
            var _this = this;

            return this.scan(startCursor, function (c) {
                return _this.nextCursor(c);
            }, function (o, c) {
                return o + c;
            });
        }
    }, {
        key: 'nextCursor',
        value: function nextCursor(cursor) {
            return new _EditorPosition2.default(cursor.row, cursor.column + 1);
        }
    }, {
        key: 'scanReverse',
        value: function scanReverse(startCursor) {
            var _this2 = this;

            return this.scan(startCursor, function (c) {
                return _this2.previousCursor(c);
            }, function (o, c) {
                return c + o;
            });
        }
    }, {
        key: 'previousCursor',
        value: function previousCursor(cursor) {
            return new _EditorPosition2.default(cursor.row, Math.max(cursor.column - 1, 0));
        }
    }, {
        key: 'scan',
        value: function scan(initialCursor, cursorNextFunction, appendFunction) {
            var thisCursor = initialCursor;
            var nextCursor = cursorNextFunction(thisCursor);
            var output = "";
            for (var i = 0; i < 100; i++) {
                var character = _Editor2.default.getTextFromRange(thisCursor, nextCursor);
                if (!character.match(tokenMatcher)) {
                    return output;
                }
                output = appendFunction(output, character);
                thisCursor = nextCursor;
                nextCursor = cursorNextFunction(thisCursor);
            }
            throw new Error('Scanned ' + maxScan + ' characters but could not find the end of the token');
        }
    }]);

    return TokenFinder;
}();

exports.default = TokenFinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2tlbkZpbmRlci5qcyJdLCJuYW1lcyI6WyJ0b2tlbk1hdGNoZXIiLCJtYXhTY2FuIiwiVG9rZW5GaW5kZXIiLCJwb3NpdGlvbiIsImdldEVkaXRvckN1cnNvclN0YXJ0IiwidG9rZW4iLCJzY2FuUmV2ZXJzZSIsInNjYW5Gb3J3YXJkIiwiaXNFbXB0eSIsImxlbmd0aCIsInN0YXJ0Q3Vyc29yIiwic2NhbiIsIm5leHRDdXJzb3IiLCJjIiwibyIsImN1cnNvciIsInJvdyIsImNvbHVtbiIsInByZXZpb3VzQ3Vyc29yIiwiTWF0aCIsIm1heCIsImluaXRpYWxDdXJzb3IiLCJjdXJzb3JOZXh0RnVuY3Rpb24iLCJhcHBlbmRGdW5jdGlvbiIsInRoaXNDdXJzb3IiLCJvdXRwdXQiLCJpIiwiY2hhcmFjdGVyIiwiZ2V0VGV4dEZyb21SYW5nZSIsIm1hdGNoIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGVBQWUsYUFBckI7QUFDQSxJQUFNQyxVQUFVLEdBQWhCOztJQUVxQkMsVzs7Ozs7OzttQ0FFTjtBQUNQLGdCQUFNQyxXQUFXLGlCQUFPQyxvQkFBUCxFQUFqQjtBQUNBLGdCQUFNQyxRQUFRLEtBQUtDLFdBQUwsQ0FBaUJILFFBQWpCLElBQTZCLEtBQUtJLFdBQUwsQ0FBaUJKLFFBQWpCLENBQTNDO0FBQ0EsZ0JBQUksS0FBS0ssT0FBTCxDQUFhSCxLQUFiLENBQUosRUFBeUI7QUFDckIsdUJBQU8sSUFBUDtBQUNIO0FBQ0QsbUJBQU9BLEtBQVA7QUFDSDs7O2dDQUVPQSxLLEVBQU87QUFDWCxtQkFBT0EsTUFBTUksTUFBTixLQUFpQixDQUF4QjtBQUNIOzs7b0NBRVdDLFcsRUFBYTtBQUFBOztBQUNyQixtQkFBTyxLQUFLQyxJQUFMLENBQVVELFdBQVYsRUFBdUI7QUFBQSx1QkFBSyxNQUFLRSxVQUFMLENBQWdCQyxDQUFoQixDQUFMO0FBQUEsYUFBdkIsRUFBZ0QsVUFBQ0MsQ0FBRCxFQUFJRCxDQUFKO0FBQUEsdUJBQVVDLElBQUlELENBQWQ7QUFBQSxhQUFoRCxDQUFQO0FBQ0g7OzttQ0FFVUUsTSxFQUFRO0FBQ2YsbUJBQU8sNkJBQW1CQSxPQUFPQyxHQUExQixFQUErQkQsT0FBT0UsTUFBUCxHQUFnQixDQUEvQyxDQUFQO0FBQ0g7OztvQ0FFV1AsVyxFQUFhO0FBQUE7O0FBQ3JCLG1CQUFPLEtBQUtDLElBQUwsQ0FBVUQsV0FBVixFQUF1QjtBQUFBLHVCQUFLLE9BQUtRLGNBQUwsQ0FBb0JMLENBQXBCLENBQUw7QUFBQSxhQUF2QixFQUFvRCxVQUFDQyxDQUFELEVBQUlELENBQUo7QUFBQSx1QkFBVUEsSUFBSUMsQ0FBZDtBQUFBLGFBQXBELENBQVA7QUFDSDs7O3VDQUVjQyxNLEVBQVE7QUFDbkIsbUJBQU8sNkJBQW1CQSxPQUFPQyxHQUExQixFQUErQkcsS0FBS0MsR0FBTCxDQUFTTCxPQUFPRSxNQUFQLEdBQWdCLENBQXpCLEVBQTRCLENBQTVCLENBQS9CLENBQVA7QUFDSDs7OzZCQUVJSSxhLEVBQWVDLGtCLEVBQW9CQyxjLEVBQWdCO0FBQ3BELGdCQUFJQyxhQUFhSCxhQUFqQjtBQUNBLGdCQUFJVCxhQUFhVSxtQkFBbUJFLFVBQW5CLENBQWpCO0FBQ0EsZ0JBQUlDLFNBQVMsRUFBYjtBQUNBLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxHQUFwQixFQUF5QkEsR0FBekIsRUFBOEI7QUFDMUIsb0JBQU1DLFlBQVksaUJBQU9DLGdCQUFQLENBQXdCSixVQUF4QixFQUFvQ1osVUFBcEMsQ0FBbEI7QUFDQSxvQkFBSSxDQUFDZSxVQUFVRSxLQUFWLENBQWdCN0IsWUFBaEIsQ0FBTCxFQUFvQztBQUNoQywyQkFBT3lCLE1BQVA7QUFDSDtBQUNEQSx5QkFBU0YsZUFBZUUsTUFBZixFQUF1QkUsU0FBdkIsQ0FBVDtBQUNBSCw2QkFBYVosVUFBYjtBQUNBQSw2QkFBYVUsbUJBQW1CRSxVQUFuQixDQUFiO0FBQ0g7QUFDRCxrQkFBTSxJQUFJTSxLQUFKLGNBQXFCN0IsT0FBckIseURBQU47QUFDSDs7Ozs7O2tCQTdDZ0JDLFciLCJmaWxlIjoiVG9rZW5GaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcic7XG5pbXBvcnQgRWRpdG9yUG9zaXRpb24gZnJvbSAnLi9FZGl0b3JQb3NpdGlvbic7XG5cbmNvbnN0IHRva2VuTWF0Y2hlciA9IC9bYS16XyQwLTldL2k7XG5jb25zdCBtYXhTY2FuID0gMTAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbkZpbmRlciB7XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBFZGl0b3IuZ2V0RWRpdG9yQ3Vyc29yU3RhcnQoKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnNjYW5SZXZlcnNlKHBvc2l0aW9uKSArIHRoaXMuc2NhbkZvcndhcmQocG9zaXRpb24pO1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGlzRW1wdHkodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBzY2FuRm9yd2FyZChzdGFydEN1cnNvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FuKHN0YXJ0Q3Vyc29yLCBjID0+IHRoaXMubmV4dEN1cnNvcihjKSwgKG8sIGMpID0+IG8gKyBjKTtcbiAgICB9XG5cbiAgICBuZXh0Q3Vyc29yKGN1cnNvcikge1xuICAgICAgICByZXR1cm4gbmV3IEVkaXRvclBvc2l0aW9uKGN1cnNvci5yb3csIGN1cnNvci5jb2x1bW4gKyAxKTtcbiAgICB9XG5cbiAgICBzY2FuUmV2ZXJzZShzdGFydEN1cnNvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FuKHN0YXJ0Q3Vyc29yLCBjID0+IHRoaXMucHJldmlvdXNDdXJzb3IoYyksIChvLCBjKSA9PiBjICsgbyk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNDdXJzb3IoY3Vyc29yKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWRpdG9yUG9zaXRpb24oY3Vyc29yLnJvdywgTWF0aC5tYXgoY3Vyc29yLmNvbHVtbiAtIDEsIDApKTtcbiAgICB9XG5cbiAgICBzY2FuKGluaXRpYWxDdXJzb3IsIGN1cnNvck5leHRGdW5jdGlvbiwgYXBwZW5kRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHRoaXNDdXJzb3IgPSBpbml0aWFsQ3Vyc29yO1xuICAgICAgICBsZXQgbmV4dEN1cnNvciA9IGN1cnNvck5leHRGdW5jdGlvbih0aGlzQ3Vyc29yKTtcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IEVkaXRvci5nZXRUZXh0RnJvbVJhbmdlKHRoaXNDdXJzb3IsIG5leHRDdXJzb3IpO1xuICAgICAgICAgICAgaWYgKCFjaGFyYWN0ZXIubWF0Y2godG9rZW5NYXRjaGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgPSBhcHBlbmRGdW5jdGlvbihvdXRwdXQsIGNoYXJhY3Rlcik7XG4gICAgICAgICAgICB0aGlzQ3Vyc29yID0gbmV4dEN1cnNvcjtcbiAgICAgICAgICAgIG5leHRDdXJzb3IgPSBjdXJzb3JOZXh0RnVuY3Rpb24odGhpc0N1cnNvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTY2FubmVkICR7bWF4U2Nhbn0gY2hhcmFjdGVycyBidXQgY291bGQgbm90IGZpbmQgdGhlIGVuZCBvZiB0aGUgdG9rZW5gKTtcbiAgICB9XG59XG4iXX0=