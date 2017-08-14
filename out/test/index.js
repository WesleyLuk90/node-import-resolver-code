'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jasmine = require('jasmine');
var path = require('path');
require('source-map-support').install();

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
        try {
            jasmine.execute();
        } catch (e) {
            done(e.stack);
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkphc21pbmUiLCJyZXF1aXJlIiwicGF0aCIsImluc3RhbGwiLCJDdXN0b21SZXBvcnRlciIsImRvbmUiLCJzcGVjUmVzdWx0cyIsInJlc3VsdCIsInB1c2giLCJnZXRGYWlsZWRTcGVjcyIsIm1hcCIsInIiLCJlcnJvcnMiLCJmYWlsZWRFeHBlY3RhdGlvbnMiLCJlIiwic3RhY2siLCJqb2luIiwiZnVsbE5hbWUiLCJmaWx0ZXIiLCJsZW5ndGgiLCJmb3JtYXRFcnJvcnMiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1biIsInRlc3RSb290IiwiamFzbWluZSIsImxvYWRDb25maWciLCJzcGVjX2RpciIsInJlbGF0aXZlIiwicHJvY2VzcyIsImN3ZCIsInNwZWNfZmlsZXMiLCJyZXBvcnRlciIsIm9uQ29tcGxldGUiLCJyZXBvcnREb25lIiwiYWRkUmVwb3J0ZXIiLCJleGVjdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjtBQUNBQSxRQUFRLG9CQUFSLEVBQThCRSxPQUE5Qjs7SUFFTUMsYztBQUNGLDRCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNIOzs7O2lDQUVRQyxNLEVBQVE7QUFDYixpQkFBS0QsV0FBTCxDQUFpQkUsSUFBakIsQ0FBc0JELE1BQXRCO0FBQ0g7Ozt1Q0FFYztBQUNYLG1CQUFPLEtBQUtFLGNBQUwsR0FDRkMsR0FERSxDQUNFLFVBQUNDLENBQUQsRUFBTztBQUNSLG9CQUFNQyxTQUFTRCxFQUFFRSxrQkFBRixDQUFxQkgsR0FBckIsQ0FBeUI7QUFBQSwyQkFBS0ksRUFBRUMsS0FBUDtBQUFBLGlCQUF6QixFQUF1Q0MsSUFBdkMsQ0FBNEMsSUFBNUMsQ0FBZjtBQUNBLHVCQUFVTCxFQUFFTSxRQUFaLFVBQXlCTCxNQUF6QjtBQUNILGFBSkUsRUFLRkksSUFMRSxDQUtHLElBTEgsQ0FBUDtBQU1IOzs7eUNBRWdCO0FBQ2IsbUJBQU8sS0FBS1YsV0FBTCxDQUNGWSxNQURFLENBQ0s7QUFBQSx1QkFBS1AsRUFBRUUsa0JBQUYsQ0FBcUJNLE1BQXJCLEdBQThCLENBQW5DO0FBQUEsYUFETCxDQUFQO0FBRUg7OztxQ0FFWTtBQUNULGdCQUFJLEtBQUtWLGNBQUwsR0FBc0JVLE1BQXRCLEdBQStCLENBQW5DLEVBQXNDO0FBQ2xDLHFCQUFLZCxJQUFMLENBQVUsS0FBS2UsWUFBTCxFQUFWLEVBQStCLEtBQUtkLFdBQUwsQ0FBaUJhLE1BQWhEO0FBQ0FFLHdCQUFRQyxHQUFSLENBQWUsS0FBS2IsY0FBTCxHQUFzQlUsTUFBckMsU0FBK0MsS0FBS2IsV0FBTCxDQUFpQmEsTUFBaEU7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS2QsSUFBTCxDQUFVLElBQVYsRUFBZ0IsS0FBS0MsV0FBTCxDQUFpQmEsTUFBakM7QUFDQUUsd0JBQVFDLEdBQVIsVUFBbUIsS0FBS2hCLFdBQUwsQ0FBaUJhLE1BQXBDO0FBQ0g7QUFDSjs7Ozs7O0FBR0xJLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkMsT0FEYSxlQUNUQyxRQURTLEVBQ0NyQixJQURELEVBQ087QUFDaEIsWUFBTXNCLFVBQVUsSUFBSTNCLE9BQUosRUFBaEI7QUFDQTJCLGdCQUFRQyxVQUFSLENBQW1CO0FBQ2ZDLHNCQUFVM0IsS0FBSzRCLFFBQUwsQ0FBY0MsUUFBUUMsR0FBUixFQUFkLEVBQTZCTixRQUE3QixDQURLO0FBRWZPLHdCQUFZLENBQ1IsYUFEUSxFQUVSLGdCQUZRO0FBRkcsU0FBbkI7QUFPQSxZQUFNQyxXQUFXLElBQUk5QixjQUFKLENBQW1CQyxJQUFuQixDQUFqQjtBQUNBc0IsZ0JBQVFRLFVBQVIsQ0FBbUI7QUFBQSxtQkFBTUQsU0FBU0UsVUFBVCxFQUFOO0FBQUEsU0FBbkI7QUFDQVQsZ0JBQVFVLFdBQVIsQ0FBb0JILFFBQXBCO0FBQ0EsWUFBSTtBQUNBUCxvQkFBUVcsT0FBUjtBQUNILFNBRkQsQ0FFRSxPQUFPeEIsQ0FBUCxFQUFVO0FBQ1JULGlCQUFLUyxFQUFFQyxLQUFQO0FBQ0g7QUFDSjtBQWxCWSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEphc21pbmUgPSByZXF1aXJlKCdqYXNtaW5lJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xucmVxdWlyZSgnc291cmNlLW1hcC1zdXBwb3J0JykuaW5zdGFsbCgpO1xuXG5jbGFzcyBDdXN0b21SZXBvcnRlciB7XG4gICAgY29uc3RydWN0b3IoZG9uZSkge1xuICAgICAgICB0aGlzLmRvbmUgPSBkb25lO1xuICAgICAgICB0aGlzLnNwZWNSZXN1bHRzID0gW107XG4gICAgfVxuXG4gICAgc3BlY0RvbmUocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc3BlY1Jlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgIH1cblxuICAgIGZvcm1hdEVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmFpbGVkU3BlY3MoKVxuICAgICAgICAgICAgLm1hcCgocikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHIuZmFpbGVkRXhwZWN0YXRpb25zLm1hcChlID0+IGUuc3RhY2spLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtyLmZ1bGxOYW1lfVxcbiR7ZXJyb3JzfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIGdldEZhaWxlZFNwZWNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGVjUmVzdWx0c1xuICAgICAgICAgICAgLmZpbHRlcihyID0+IHIuZmFpbGVkRXhwZWN0YXRpb25zLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJlcG9ydERvbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEZhaWxlZFNwZWNzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kb25lKHRoaXMuZm9ybWF0RXJyb3JzKCksIHRoaXMuc3BlY1Jlc3VsdHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZ2V0RmFpbGVkU3BlY3MoKS5sZW5ndGh9LyR7dGhpcy5zcGVjUmVzdWx0cy5sZW5ndGh9IHRlc3RzIGZhaWxlZGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb25lKG51bGwsIHRoaXMuc3BlY1Jlc3VsdHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBbGwgJHt0aGlzLnNwZWNSZXN1bHRzLmxlbmd0aH0gdGVzdHMgcGFzc2ApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBydW4odGVzdFJvb3QsIGRvbmUpIHtcbiAgICAgICAgY29uc3QgamFzbWluZSA9IG5ldyBKYXNtaW5lKCk7XG4gICAgICAgIGphc21pbmUubG9hZENvbmZpZyh7XG4gICAgICAgICAgICBzcGVjX2RpcjogcGF0aC5yZWxhdGl2ZShwcm9jZXNzLmN3ZCgpLCB0ZXN0Um9vdCksXG4gICAgICAgICAgICBzcGVjX2ZpbGVzOiBbXG4gICAgICAgICAgICAgICAgJypbc1NdcGVjLmpzJyxcbiAgICAgICAgICAgICAgICAnKiovKltzU11wZWMuanMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcG9ydGVyID0gbmV3IEN1c3RvbVJlcG9ydGVyKGRvbmUpO1xuICAgICAgICBqYXNtaW5lLm9uQ29tcGxldGUoKCkgPT4gcmVwb3J0ZXIucmVwb3J0RG9uZSgpKTtcbiAgICAgICAgamFzbWluZS5hZGRSZXBvcnRlcihyZXBvcnRlcik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqYXNtaW5lLmV4ZWN1dGUoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9uZShlLnN0YWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn07Il19