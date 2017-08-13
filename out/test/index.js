'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jasmine = require('jasmine');
var fs = require('fs');
var util = require('util');
var path = require('path');

var CustomReporter = function () {
    function CustomReporter(done) {
        _classCallCheck(this, CustomReporter);

        this.done = done;
        this.specResults = [];
    }

    _createClass(CustomReporter, [{
        key: 'specDone',
        value: function specDone(result) {
            this.specResults.push(result);
        }
    }, {
        key: 'formatErrors',
        value: function formatErrors() {
            return this.getFailedSpecs().map(function (r) {
                var errors = r.failedExpectations.map(function (e) {
                    return e.stack;
                }).join('\n');
                return r.fullName + '\n' + errors;
            }).join('\n');
        }
    }, {
        key: 'getFailedSpecs',
        value: function getFailedSpecs() {
            return this.specResults.filter(function (r) {
                return r.failedExpectations.length > 0;
            });
        }
    }, {
        key: 'reportDone',
        value: function reportDone() {
            if (this.getFailedSpecs().length > 0) {
                this.done(this.formatErrors(), this.specResults.length);
                console.log(this.getFailedSpecs().length + '/' + this.specResults.length + ' tests failed');
            } else {
                this.done(null, this.specResults.length);
                console.log('All ' + this.specResults.length + ' tests pass');
            }
        }
    }]);

    return CustomReporter;
}();

module.exports = {
    run: function run(testRoot, done) {
        var jasmine = new Jasmine();
        jasmine.loadConfig({
            spec_dir: path.relative(process.cwd(), testRoot),
            spec_files: ['*[sS]pec.js', '**/*[sS]pec.js']
        });
        var reporter = new CustomReporter(done);
        jasmine.onComplete(function () {
            return reporter.reportDone();
        });
        jasmine.addReporter(reporter);
        jasmine.execute();
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkphc21pbmUiLCJyZXF1aXJlIiwiZnMiLCJ1dGlsIiwicGF0aCIsIkN1c3RvbVJlcG9ydGVyIiwiZG9uZSIsInNwZWNSZXN1bHRzIiwicmVzdWx0IiwicHVzaCIsImdldEZhaWxlZFNwZWNzIiwibWFwIiwiciIsImVycm9ycyIsImZhaWxlZEV4cGVjdGF0aW9ucyIsImUiLCJzdGFjayIsImpvaW4iLCJmdWxsTmFtZSIsImZpbHRlciIsImxlbmd0aCIsImZvcm1hdEVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIiwicnVuIiwidGVzdFJvb3QiLCJqYXNtaW5lIiwibG9hZENvbmZpZyIsInNwZWNfZGlyIiwicmVsYXRpdmUiLCJwcm9jZXNzIiwiY3dkIiwic3BlY19maWxlcyIsInJlcG9ydGVyIiwib25Db21wbGV0ZSIsInJlcG9ydERvbmUiLCJhZGRSZXBvcnRlciIsImV4ZWN1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLEtBQUtELFFBQVEsSUFBUixDQUFYO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUSxNQUFSLENBQWI7QUFDQSxJQUFNRyxPQUFPSCxRQUFRLE1BQVIsQ0FBYjs7SUFFTUksYztBQUNGLDRCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNIOzs7O2lDQUVRQyxNLEVBQVE7QUFDYixpQkFBS0QsV0FBTCxDQUFpQkUsSUFBakIsQ0FBc0JELE1BQXRCO0FBQ0g7Ozt1Q0FFYztBQUNYLG1CQUFPLEtBQUtFLGNBQUwsR0FDRkMsR0FERSxDQUNFLFVBQUNDLENBQUQsRUFBTztBQUNSLG9CQUFNQyxTQUFTRCxFQUFFRSxrQkFBRixDQUFxQkgsR0FBckIsQ0FBeUI7QUFBQSwyQkFBS0ksRUFBRUMsS0FBUDtBQUFBLGlCQUF6QixFQUF1Q0MsSUFBdkMsQ0FBNEMsSUFBNUMsQ0FBZjtBQUNBLHVCQUFVTCxFQUFFTSxRQUFaLFVBQXlCTCxNQUF6QjtBQUNILGFBSkUsRUFLRkksSUFMRSxDQUtHLElBTEgsQ0FBUDtBQU1IOzs7eUNBRWdCO0FBQ2IsbUJBQU8sS0FBS1YsV0FBTCxDQUNGWSxNQURFLENBQ0s7QUFBQSx1QkFBS1AsRUFBRUUsa0JBQUYsQ0FBcUJNLE1BQXJCLEdBQThCLENBQW5DO0FBQUEsYUFETCxDQUFQO0FBRUg7OztxQ0FFWTtBQUNULGdCQUFJLEtBQUtWLGNBQUwsR0FBc0JVLE1BQXRCLEdBQStCLENBQW5DLEVBQXNDO0FBQ2xDLHFCQUFLZCxJQUFMLENBQVUsS0FBS2UsWUFBTCxFQUFWLEVBQStCLEtBQUtkLFdBQUwsQ0FBaUJhLE1BQWhEO0FBQ0FFLHdCQUFRQyxHQUFSLENBQWUsS0FBS2IsY0FBTCxHQUFzQlUsTUFBckMsU0FBK0MsS0FBS2IsV0FBTCxDQUFpQmEsTUFBaEU7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS2QsSUFBTCxDQUFVLElBQVYsRUFBZ0IsS0FBS0MsV0FBTCxDQUFpQmEsTUFBakM7QUFDQUUsd0JBQVFDLEdBQVIsVUFBbUIsS0FBS2hCLFdBQUwsQ0FBaUJhLE1BQXBDO0FBQ0g7QUFDSjs7Ozs7O0FBR0xJLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkMsT0FEYSxlQUNUQyxRQURTLEVBQ0NyQixJQURELEVBQ087QUFDaEIsWUFBTXNCLFVBQVUsSUFBSTVCLE9BQUosRUFBaEI7QUFDQTRCLGdCQUFRQyxVQUFSLENBQW1CO0FBQ2ZDLHNCQUFVMUIsS0FBSzJCLFFBQUwsQ0FBY0MsUUFBUUMsR0FBUixFQUFkLEVBQTZCTixRQUE3QixDQURLO0FBRWZPLHdCQUFZLENBQ1IsYUFEUSxFQUVSLGdCQUZRO0FBRkcsU0FBbkI7QUFPQSxZQUFNQyxXQUFXLElBQUk5QixjQUFKLENBQW1CQyxJQUFuQixDQUFqQjtBQUNBc0IsZ0JBQVFRLFVBQVIsQ0FBbUI7QUFBQSxtQkFBTUQsU0FBU0UsVUFBVCxFQUFOO0FBQUEsU0FBbkI7QUFDQVQsZ0JBQVFVLFdBQVIsQ0FBb0JILFFBQXBCO0FBQ0FQLGdCQUFRVyxPQUFSO0FBQ0g7QUFkWSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEphc21pbmUgPSByZXF1aXJlKCdqYXNtaW5lJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY2xhc3MgQ3VzdG9tUmVwb3J0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRvbmUpIHtcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICAgICAgdGhpcy5zcGVjUmVzdWx0cyA9IFtdO1xuICAgIH1cblxuICAgIHNwZWNEb25lKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnNwZWNSZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG5cbiAgICBmb3JtYXRFcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZhaWxlZFNwZWNzKClcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSByLmZhaWxlZEV4cGVjdGF0aW9ucy5tYXAoZSA9PiBlLnN0YWNrKS5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ci5mdWxsTmFtZX1cXG4ke2Vycm9yc31gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICBnZXRGYWlsZWRTcGVjcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlY1Jlc3VsdHNcbiAgICAgICAgICAgIC5maWx0ZXIociA9PiByLmZhaWxlZEV4cGVjdGF0aW9ucy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICByZXBvcnREb25lKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRGYWlsZWRTcGVjcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZSh0aGlzLmZvcm1hdEVycm9ycygpLCB0aGlzLnNwZWNSZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmdldEZhaWxlZFNwZWNzKCkubGVuZ3RofS8ke3RoaXMuc3BlY1Jlc3VsdHMubGVuZ3RofSB0ZXN0cyBmYWlsZWRgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZShudWxsLCB0aGlzLnNwZWNSZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsICR7dGhpcy5zcGVjUmVzdWx0cy5sZW5ndGh9IHRlc3RzIHBhc3NgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcnVuKHRlc3RSb290LCBkb25lKSB7XG4gICAgICAgIGNvbnN0IGphc21pbmUgPSBuZXcgSmFzbWluZSgpO1xuICAgICAgICBqYXNtaW5lLmxvYWRDb25maWcoe1xuICAgICAgICAgICAgc3BlY19kaXI6IHBhdGgucmVsYXRpdmUocHJvY2Vzcy5jd2QoKSwgdGVzdFJvb3QpLFxuICAgICAgICAgICAgc3BlY19maWxlczogW1xuICAgICAgICAgICAgICAgICcqW3NTXXBlYy5qcycsXG4gICAgICAgICAgICAgICAgJyoqLypbc1NdcGVjLmpzJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXBvcnRlciA9IG5ldyBDdXN0b21SZXBvcnRlcihkb25lKTtcbiAgICAgICAgamFzbWluZS5vbkNvbXBsZXRlKCgpID0+IHJlcG9ydGVyLnJlcG9ydERvbmUoKSk7XG4gICAgICAgIGphc21pbmUuYWRkUmVwb3J0ZXIocmVwb3J0ZXIpO1xuICAgICAgICBqYXNtaW5lLmV4ZWN1dGUoKTtcbiAgICB9XG59OyJdfQ==