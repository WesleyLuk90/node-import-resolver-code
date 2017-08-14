'use strict';
'use babel';

var _TokenFinder = require('../TokenFinder');

var _TokenFinder2 = _interopRequireDefault(_TokenFinder);

var _EditorUtils = require('./EditorUtils');

var _EditorUtils2 = _interopRequireDefault(_EditorUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TokenFinder', function () {
    beforeEach(function () {
        return _EditorUtils2.default.createTestFile();
    });

    it('should find no tokens', function () {
        var finder = new _TokenFinder2.default();
        expect(finder.getToken()).toEqual(null);
    });

    describe('with cursor position', function () {
        beforeEach(function () {
            return _EditorUtils2.default.setText('some random info\nfindAToken\nmore data');
        });

        it('should find a highlighted token when cursor is in the middle', function () {
            _EditorUtils2.default.setCursor(1, 3);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the start', function () {
            _EditorUtils2.default.setCursor(1, 0);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toEqual('findAToken');
        });

        it('should find a highlighted token when cursor is at the end', function () {
            _EditorUtils2.default.setCursor(1, 10);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toEqual('findAToken');
        });
    });

    describe('with selection', function () {
        beforeEach(function () {
            return _EditorUtils2.default.setText('some random info\n@#$% findAToken !@#$\nmore data');
        });

        it('should not find an invalid token', function () {
            _EditorUtils2.default.setSelection(1, 1, 1, 3);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe(null);
        });

        it('should find an exactly selected token', function () {
            _EditorUtils2.default.setSelection(1, 6, 1, 15);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a partially selected token', function () {
            _EditorUtils2.default.setSelection(1, 8, 1, 10);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should find a exactly token at the start of a selection', function () {
            _EditorUtils2.default.setSelection(1, 6, 1, 20);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe("findAToken");
        });

        it('should fail to find a token not at the start', function () {
            _EditorUtils2.default.setSelection(1, 0, 1, 15);
            var finder = new _TokenFinder2.default();
            expect(finder.getToken()).toBe(null);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L1Rva2VuRmluZGVyLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiY3JlYXRlVGVzdEZpbGUiLCJpdCIsImZpbmRlciIsImV4cGVjdCIsImdldFRva2VuIiwidG9FcXVhbCIsInNldFRleHQiLCJzZXRDdXJzb3IiLCJzZXRTZWxlY3Rpb24iLCJ0b0JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsYUFBVCxFQUF3QixZQUFNO0FBQzFCQyxlQUFXO0FBQUEsZUFBTSxzQkFBWUMsY0FBWixFQUFOO0FBQUEsS0FBWDs7QUFFQUMsT0FBRyx1QkFBSCxFQUE0QixZQUFNO0FBQzlCLFlBQU1DLFNBQVMsMkJBQWY7QUFDQUMsZUFBT0QsT0FBT0UsUUFBUCxFQUFQLEVBQTBCQyxPQUExQixDQUFrQyxJQUFsQztBQUNILEtBSEQ7O0FBS0FQLGFBQVMsc0JBQVQsRUFBaUMsWUFBTTtBQUNuQ0MsbUJBQVc7QUFBQSxtQkFDUCxzQkFBWU8sT0FBWiwyQ0FETztBQUFBLFNBQVg7O0FBS0FMLFdBQUcsOERBQUgsRUFBbUUsWUFBTTtBQUNyRSxrQ0FBWU0sU0FBWixDQUFzQixDQUF0QixFQUF5QixDQUF6QjtBQUNBLGdCQUFNTCxTQUFTLDJCQUFmO0FBQ0FDLG1CQUFPRCxPQUFPRSxRQUFQLEVBQVAsRUFBMEJDLE9BQTFCLENBQWtDLFlBQWxDO0FBQ0gsU0FKRDs7QUFNQUosV0FBRyw2REFBSCxFQUFrRSxZQUFNO0FBQ3BFLGtDQUFZTSxTQUFaLENBQXNCLENBQXRCLEVBQXlCLENBQXpCO0FBQ0EsZ0JBQU1MLFNBQVMsMkJBQWY7QUFDQUMsbUJBQU9ELE9BQU9FLFFBQVAsRUFBUCxFQUEwQkMsT0FBMUIsQ0FBa0MsWUFBbEM7QUFDSCxTQUpEOztBQU1BSixXQUFHLDJEQUFILEVBQWdFLFlBQU07QUFDbEUsa0NBQVlNLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUIsRUFBekI7QUFDQSxnQkFBTUwsU0FBUywyQkFBZjtBQUNBQyxtQkFBT0QsT0FBT0UsUUFBUCxFQUFQLEVBQTBCQyxPQUExQixDQUFrQyxZQUFsQztBQUNILFNBSkQ7QUFLSCxLQXZCRDs7QUF5QkFQLGFBQVMsZ0JBQVQsRUFBMkIsWUFBTTtBQUM3QkMsbUJBQVc7QUFBQSxtQkFDUCxzQkFBWU8sT0FBWixxREFETztBQUFBLFNBQVg7O0FBS0FMLFdBQUcsa0NBQUgsRUFBdUMsWUFBTTtBQUN6QyxrQ0FBWU8sWUFBWixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUNBLGdCQUFNTixTQUFTLDJCQUFmO0FBQ0FDLG1CQUFPRCxPQUFPRSxRQUFQLEVBQVAsRUFBMEJLLElBQTFCLENBQStCLElBQS9CO0FBQ0gsU0FKRDs7QUFNQVIsV0FBRyx1Q0FBSCxFQUE0QyxZQUFNO0FBQzlDLGtDQUFZTyxZQUFaLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLEVBQWxDO0FBQ0EsZ0JBQU1OLFNBQVMsMkJBQWY7QUFDQUMsbUJBQU9ELE9BQU9FLFFBQVAsRUFBUCxFQUEwQkssSUFBMUIsQ0FBK0IsWUFBL0I7QUFDSCxTQUpEOztBQU1BUixXQUFHLHdDQUFILEVBQTZDLFlBQU07QUFDL0Msa0NBQVlPLFlBQVosQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsRUFBbEM7QUFDQSxnQkFBTU4sU0FBUywyQkFBZjtBQUNBQyxtQkFBT0QsT0FBT0UsUUFBUCxFQUFQLEVBQTBCSyxJQUExQixDQUErQixZQUEvQjtBQUNILFNBSkQ7O0FBTUFSLFdBQUcseURBQUgsRUFBOEQsWUFBTTtBQUNoRSxrQ0FBWU8sWUFBWixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxFQUFsQztBQUNBLGdCQUFNTixTQUFTLDJCQUFmO0FBQ0FDLG1CQUFPRCxPQUFPRSxRQUFQLEVBQVAsRUFBMEJLLElBQTFCLENBQStCLFlBQS9CO0FBQ0gsU0FKRDs7QUFNQVIsV0FBRyw4Q0FBSCxFQUFtRCxZQUFNO0FBQ3JELGtDQUFZTyxZQUFaLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLEVBQWxDO0FBQ0EsZ0JBQU1OLFNBQVMsMkJBQWY7QUFDQUMsbUJBQU9ELE9BQU9FLFFBQVAsRUFBUCxFQUEwQkssSUFBMUIsQ0FBK0IsSUFBL0I7QUFDSCxTQUpEO0FBS0gsS0FuQ0Q7QUFvQ0gsQ0FyRUQiLCJmaWxlIjoiVG9rZW5GaW5kZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgVG9rZW5GaW5kZXIgZnJvbSAnLi4vVG9rZW5GaW5kZXInO1xuaW1wb3J0IEVkaXRvclV0aWxzIGZyb20gJy4vRWRpdG9yVXRpbHMnO1xuXG5kZXNjcmliZSgnVG9rZW5GaW5kZXInLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiBFZGl0b3JVdGlscy5jcmVhdGVUZXN0RmlsZSgpKTtcblxuICAgIGl0KCdzaG91bGQgZmluZCBubyB0b2tlbnMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRlciA9IG5ldyBUb2tlbkZpbmRlcigpO1xuICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvRXF1YWwobnVsbCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnd2l0aCBjdXJzb3IgcG9zaXRpb24nLCAoKSA9PiB7XG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT5cbiAgICAgICAgICAgIEVkaXRvclV0aWxzLnNldFRleHQoYHNvbWUgcmFuZG9tIGluZm9cbmZpbmRBVG9rZW5cbm1vcmUgZGF0YWApKTtcblxuICAgICAgICBpdCgnc2hvdWxkIGZpbmQgYSBoaWdobGlnaHRlZCB0b2tlbiB3aGVuIGN1cnNvciBpcyBpbiB0aGUgbWlkZGxlJywgKCkgPT4ge1xuICAgICAgICAgICAgRWRpdG9yVXRpbHMuc2V0Q3Vyc29yKDEsIDMpO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvRXF1YWwoJ2ZpbmRBVG9rZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmaW5kIGEgaGlnaGxpZ2h0ZWQgdG9rZW4gd2hlbiBjdXJzb3IgaXMgYXQgdGhlIHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgRWRpdG9yVXRpbHMuc2V0Q3Vyc29yKDEsIDApO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvRXF1YWwoJ2ZpbmRBVG9rZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmaW5kIGEgaGlnaGxpZ2h0ZWQgdG9rZW4gd2hlbiBjdXJzb3IgaXMgYXQgdGhlIGVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIEVkaXRvclV0aWxzLnNldEN1cnNvcigxLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9FcXVhbCgnZmluZEFUb2tlbicpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd3aXRoIHNlbGVjdGlvbicsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PlxuICAgICAgICAgICAgRWRpdG9yVXRpbHMuc2V0VGV4dChgc29tZSByYW5kb20gaW5mb1xuQCMkJSBmaW5kQVRva2VuICFAIyRcbm1vcmUgZGF0YWApKTtcblxuICAgICAgICBpdCgnc2hvdWxkIG5vdCBmaW5kIGFuIGludmFsaWQgdG9rZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBFZGl0b3JVdGlscy5zZXRTZWxlY3Rpb24oMSwgMSwgMSwgMyk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9CZShudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBmaW5kIGFuIGV4YWN0bHkgc2VsZWN0ZWQgdG9rZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBFZGl0b3JVdGlscy5zZXRTZWxlY3Rpb24oMSwgNiwgMSwgMTUpO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvQmUoXCJmaW5kQVRva2VuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIGZpbmQgYSBwYXJ0aWFsbHkgc2VsZWN0ZWQgdG9rZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBFZGl0b3JVdGlscy5zZXRTZWxlY3Rpb24oMSwgOCwgMSwgMTApO1xuICAgICAgICAgICAgY29uc3QgZmluZGVyID0gbmV3IFRva2VuRmluZGVyKCk7XG4gICAgICAgICAgICBleHBlY3QoZmluZGVyLmdldFRva2VuKCkpLnRvQmUoXCJmaW5kQVRva2VuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIGZpbmQgYSBleGFjdGx5IHRva2VuIGF0IHRoZSBzdGFydCBvZiBhIHNlbGVjdGlvbicsICgpID0+IHtcbiAgICAgICAgICAgIEVkaXRvclV0aWxzLnNldFNlbGVjdGlvbigxLCA2LCAxLCAyMCk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9CZShcImZpbmRBVG9rZW5cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgZmFpbCB0byBmaW5kIGEgdG9rZW4gbm90IGF0IHRoZSBzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIEVkaXRvclV0aWxzLnNldFNlbGVjdGlvbigxLCAwLCAxLCAxNSk7XG4gICAgICAgICAgICBjb25zdCBmaW5kZXIgPSBuZXcgVG9rZW5GaW5kZXIoKTtcbiAgICAgICAgICAgIGV4cGVjdChmaW5kZXIuZ2V0VG9rZW4oKSkudG9CZShudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXX0=