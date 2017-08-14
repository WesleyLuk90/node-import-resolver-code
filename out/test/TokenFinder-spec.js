'use strict';
'use babel';

var _TokenFinder = require('../TokenFinder');

var _TokenFinder2 = _interopRequireDefault(_TokenFinder);

var _vscode = require('vscode');

var _vscode2 = _interopRequireDefault(_vscode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TokenFinder', function () {
    beforeEach(function () {
        return _vscode2.default.window.showTextDocument(_vscode2.default.Uri.parse('untitled:node-import-resolver-TokenFinder'));
    });

    function setText(text) {
        var editor = _vscode2.default.window.activeTextEditor;
        return editor.edit(function (editBuilder) {
            editBuilder.delete(new _vscode2.default.Range(new _vscode2.default.Position(0, 0), new _vscode2.default.Position(10000, 10000)));
            editBuilder.insert(new _vscode2.default.Position(0, 0), text);
        });
    }

    function setCursor(row, column) {
        _vscode2.default.window.activeTextEditor.selection = new _vscode2.default.Selection(new _vscode2.default.Position(row, column), new _vscode2.default.Position(row, column));
    }

    function setSelection(row1, column1, row2, column2) {
        _vscode2.default.window.activeTextEditor.selection = new _vscode2.default.Selection(new _vscode2.default.Position(row1, column1), new _vscode2.default.Position(row2, column2));
    }

    it('should find no tokens', function () {
        var finder = new _TokenFinder2.default();
        expect(finder.getToken()).toEqual(null);
    });

    describe('with cursor position', function () {
        beforeEach(function () {
            return setText('some random info\nfindAToken\nmore data');
        });

        it('should find a highlighted token when cursor is in the middle', function () {
            setCursor(1, 3);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the start', function () {
            setCursor(1, 0);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the end', function () {
            setCursor(1, 10);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toEqual('findAToken');
        });
    });

    describe('with selection', function () {
        beforeEach(function () {
            return setText('some random info\n@#$% findAToken !@#$\nmore data');
        });

        it('should not find an invalid token', function () {
            setSelection(1, 1, 1, 3);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe(null);
        });

        it('should find an exactly selected token', function () {
            setSelection(1, 6, 1, 15);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a partially selected token', function () {
            setSelection(1, 8, 1, 10);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a exactly token at the start of a selection', function () {
            setSelection(1, 6, 1, 20);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should fail to find a token not at the start', function () {
            setSelection(1, 0, 1, 15);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe(null);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L1Rva2VuRmluZGVyLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwid2luZG93Iiwic2hvd1RleHREb2N1bWVudCIsIlVyaSIsInBhcnNlIiwic2V0VGV4dCIsInRleHQiLCJlZGl0b3IiLCJhY3RpdmVUZXh0RWRpdG9yIiwiZWRpdCIsImVkaXRCdWlsZGVyIiwiZGVsZXRlIiwiUmFuZ2UiLCJQb3NpdGlvbiIsImluc2VydCIsInNldEN1cnNvciIsInJvdyIsImNvbHVtbiIsInNlbGVjdGlvbiIsIlNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInJvdzEiLCJjb2x1bW4xIiwicm93MiIsImNvbHVtbjIiLCJpdCIsImZpbmRlciIsImV4cGVjdCIsImdldFRva2VuIiwidG9FcXVhbCIsInRvQmUiXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxhQUFULEVBQXdCLFlBQU07QUFDMUJDLGVBQVcsWUFBTTtBQUNiLGVBQU8saUJBQU9DLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0IsaUJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQiwyQ0FBakIsQ0FBL0IsQ0FBUDtBQUNILEtBRkQ7O0FBSUEsYUFBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbkIsWUFBTUMsU0FBUyxpQkFBT04sTUFBUCxDQUFjTyxnQkFBN0I7QUFDQSxlQUFPRCxPQUFPRSxJQUFQLENBQVksVUFBQ0MsV0FBRCxFQUFpQjtBQUNoQ0Esd0JBQVlDLE1BQVosQ0FBbUIsSUFBSSxpQkFBT0MsS0FBWCxDQUFpQixJQUFJLGlCQUFPQyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQWpCLEVBQTRDLElBQUksaUJBQU9BLFFBQVgsQ0FBb0IsS0FBcEIsRUFBMkIsS0FBM0IsQ0FBNUMsQ0FBbkI7QUFDQUgsd0JBQVlJLE1BQVosQ0FBbUIsSUFBSSxpQkFBT0QsUUFBWCxDQUFvQixDQUFwQixF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QkFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCO0FBQ0EsZ0JBQU1NLFNBQVMsMkJBQWY7QUFDQUMsbUJBQU9ELE9BQU9FLFFBQVAsRUFBUCxFQUEwQkUsSUFBMUIsQ0FBK0IsWUFBL0I7QUFDSCxTQUpEOztBQU1BTCxXQUFHLDhDQUFILEVBQW1ELFlBQU07QUFDckRMLHlCQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsRUFBdEI7QUFDQSxnQkFBTU0sU0FBUywyQkFBZjtBQUNBQyxtQkFBT0QsT0FBT0UsUUFBUCxFQUFQLEVBQTBCRSxJQUExQixDQUErQixJQUEvQjtBQUNILFNBSkQ7QUFLSCxLQW5DRDtBQW9DSCxDQXZGRCIsImZpbGUiOiJUb2tlbkZpbmRlci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBUb2tlbkZpbmRlciBmcm9tICcuLi9Ub2tlbkZpbmRlcic7XG5pbXBvcnQgdnNjb2RlIGZyb20gJ3ZzY29kZSc7XG5cbmRlc2NyaWJlKCdUb2tlbkZpbmRlcicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHZzY29kZS53aW5kb3cuc2hvd1RleHREb2N1bWVudCh2c2NvZGUuVXJpLnBhcnNlKCd1bnRpdGxlZDpub2RlLWltcG9ydC1yZXNvbHZlci1Ub2tlbkZpbmRlcicpKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldFRleHQodGV4dCkge1xuICAgICAgICBjb25zdCBlZGl0b3IgPSB2c2NvZGUud2luZG93LmFjdGl2ZVRleHRFZGl0b3I7XG4gICAgICAgIHJldHVybiBlZGl0b3IuZWRpdCgoZWRpdEJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgIGVkaXRCdWlsZGVyLmRlbGV0ZShuZXcgdnNjb2RlLlJhbmdlKG5ldyB2c2NvZGUuUG9zaXRpb24oMCwgMCksIG5ldyB2c2NvZGUuUG9zaXRpb24oMTAwMDAsIDEwMDAwKSkpO1xuICAgICAgICAgICAgZWRpdEJ1aWxkZXIuaW5zZXJ0KG5ldyB2c2NvZGUuUG9zaXRpb24oMCwgMCksIHRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJzb3Iocm93LCBjb2x1bW4pIHtcbiAgICAgICAgdnNjb2RlLndpbmRvdy5hY3RpdmVUZXh0RWRpdG9yLnNlbGVjdGlvbiA9IG5ldyB2c2NvZGUuU2VsZWN0aW9uKG5ldyB2c2NvZGUuUG9zaXRpb24ocm93LCBjb2x1bW4pLCBuZXcgdnNjb2RlLlBvc2l0aW9uKHJvdywgY29sdW1uKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKHJvdzEsIGNvbHVtbjEsIHJvdzIsIGNvbHVtbjIpIHtcbiAgICAgICAgdnNjb2RlLndpbmRvdy5hY3RpdmVUZXh0RWRpdG9yLnNlbGVjdGlvbiA9IG5ldyB2c2NvZGUuU2VsZWN0aW9uKG5ldyB2c2NvZGUuUG9zaXRpb24ocm93MSwgY29sdW1uMSksIG5ldyB2c2NvZGUuUG9zaXRpb24ocm93MiwgY29sdW1uMikpO1xuICAgIH1cblxuICAgIGl0KCdzaG91bGQgZmluZCBubyB0b2tlbnMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRlciA9IG5ldyBUb2tlbkZpbmRlcigpO1xuICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvRXF1YWwobnVsbCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnd2l0aCBjdXJzb3IgcG9zaXRpb24nLCAoKSA9PiB7XG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT5cbiAgICAgICAgICAgIHNldFRleHQoYHNvbWUgcmFuZG9tIGluZm9cbmZpbmRBVG9rZW5cbm1vcmUgZGF0YWApKTtcblxuICAgICAgICBpdCgnc2hvdWxkIGZpbmQgYSBoaWdobGlnaHRlZCB0b2tlbiB3aGVuIGN1cnNvciBpcyBpbiB0aGUgbWlkZGxlJywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3Vyc29yKDEsIDMpO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvRXF1YWwoJ2ZpbmRBVG9rZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmaW5kIGEgaGlnaGxpZ2h0ZWQgdG9rZW4gd2hlbiBjdXJzb3IgaXMgYXQgdGhlIHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3Vyc29yKDEsIDApO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvRXF1YWwoJ2ZpbmRBVG9rZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmaW5kIGEgaGlnaGxpZ2h0ZWQgdG9rZW4gd2hlbiBjdXJzb3IgaXMgYXQgdGhlIGVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnNvcigxLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9FcXVhbCgnZmluZEFUb2tlbicpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd3aXRoIHNlbGVjdGlvbicsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PlxuICAgICAgICAgICAgc2V0VGV4dChgc29tZSByYW5kb20gaW5mb1xuQCMkJSBmaW5kQVRva2VuICFAIyRcbm1vcmUgZGF0YWApKTtcblxuICAgICAgICBpdCgnc2hvdWxkIG5vdCBmaW5kIGFuIGludmFsaWQgdG9rZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oMSwgMSwgMSwgMyk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9CZShudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmaW5kIGFuIGV4YWN0bHkgc2VsZWN0ZWQgdG9rZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oMSwgNiwgMSwgMTUpO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvQmUoXCJmaW5kQVRva2VuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIGZpbmQgYSBwYXJ0aWFsbHkgc2VsZWN0ZWQgdG9rZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oMSwgOCwgMSwgMTApO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvQmUoXCJmaW5kQVRva2VuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIGZpbmQgYSBleGFjdGx5IHRva2VuIGF0IHRoZSBzdGFydCBvZiBhIHNlbGVjdGlvbicsICgpID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbigxLCA2LCAxLCAyMCk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9CZShcImZpbmRBVG9rZW5cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgZmFpbCB0byBmaW5kIGEgdG9rZW4gbm90IGF0IHRoZSBzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbigxLCAwLCAxLCAxNSk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9CZShudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXX0=