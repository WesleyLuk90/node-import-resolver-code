'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorPosition = function EditorPosition(row, column) {
    _classCallCheck(this, EditorPosition);

    (0, _assert2.default)(row >= 0, 'Expected row to be positive but got ' + row);
    (0, _assert2.default)(column >= 0, 'Expected column to be positive but got ' + column);
    this.row = row;
    this.column = column;
};

exports.default = EditorPosition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FZGl0b3JQb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJFZGl0b3JQb3NpdGlvbiIsInJvdyIsImNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxjLEdBQ2pCLHdCQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUF5QjtBQUFBOztBQUNyQiwwQkFBT0QsT0FBTyxDQUFkLDJDQUF3REEsR0FBeEQ7QUFDQSwwQkFBT0MsVUFBVSxDQUFqQiw4Q0FBOERBLE1BQTlEO0FBQ0EsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsQzs7a0JBTmdCRixjIiwiZmlsZSI6IkVkaXRvclBvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yUG9zaXRpb24ge1xyXG4gICAgY29uc3RydWN0b3Iocm93LCBjb2x1bW4pIHtcclxuICAgICAgICBhc3NlcnQocm93ID49IDAsIGBFeHBlY3RlZCByb3cgdG8gYmUgcG9zaXRpdmUgYnV0IGdvdCAke3Jvd31gKTtcclxuICAgICAgICBhc3NlcnQoY29sdW1uID49IDAsIGBFeHBlY3RlZCBjb2x1bW4gdG8gYmUgcG9zaXRpdmUgYnV0IGdvdCAke2NvbHVtbn1gKVxyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xyXG4gICAgfVxyXG59Il19