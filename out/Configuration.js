'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
    function Configuration() {
        _classCallCheck(this, Configuration);
    }

    _createClass(Configuration, [{
        key: 'setImportStyle',
        value: function setImportStyle(style) {
            (0, _assert2.default)(style === 'import' || style === 'require' || style == null);
            this.style = style;
            return this;
        }
    }, {
        key: 'getImportStyle',
        value: function getImportStyle() {
            return this.style;
        }
    }, {
        key: 'setIgnoredFolders',
        value: function setIgnoredFolders(folders) {
            if (folders) {
                (0, _assert2.default)(Array.isArray(folders));
                this.folders = folders;
            }
            return this;
        }
    }, {
        key: 'getIgnoredFolders',
        value: function getIgnoredFolders() {
            return this.folders;
        }
    }, {
        key: 'setRootFolder',
        value: function setRootFolder(folder) {
            this.rootFolder = folder;
            return this;
        }
    }, {
        key: 'getRootFolder',
        value: function getRootFolder() {
            return this.rootFolder;
        }
    }], [{
        key: 'createDefault',
        value: function createDefault() {
            return new Configuration().setImportStyle(null).setIgnoredFolders(['node_modules']).setRootFolder(null);
        }
    }]);

    return Configuration;
}();

exports.default = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJzdHlsZSIsImZvbGRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJmb2xkZXIiLCJyb290Rm9sZGVyIiwic2V0SW1wb3J0U3R5bGUiLCJzZXRJZ25vcmVkRm9sZGVycyIsInNldFJvb3RGb2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7O3VDQVFGQyxLLEVBQU87QUFDbEIsa0NBQU9BLFVBQVUsUUFBVixJQUFzQkEsVUFBVSxTQUFoQyxJQUE2Q0EsU0FBUyxJQUE3RDtBQUNBLGlCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7Ozt5Q0FFZ0I7QUFDYixtQkFBTyxLQUFLQSxLQUFaO0FBQ0g7OzswQ0FFaUJDLE8sRUFBUztBQUN2QixnQkFBSUEsT0FBSixFQUFhO0FBQ1Qsc0NBQU9DLE1BQU1DLE9BQU4sQ0FBY0YsT0FBZCxDQUFQO0FBQ0EscUJBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CO0FBQ2hCLG1CQUFPLEtBQUtBLE9BQVo7QUFDSDs7O3NDQUVhRyxNLEVBQVE7QUFDbEIsaUJBQUtDLFVBQUwsR0FBa0JELE1BQWxCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7d0NBRWU7QUFDWixtQkFBTyxLQUFLQyxVQUFaO0FBQ0g7Ozt3Q0FwQ3NCO0FBQ25CLG1CQUFPLElBQUlOLGFBQUosR0FDRk8sY0FERSxDQUNhLElBRGIsRUFFRkMsaUJBRkUsQ0FFZ0IsQ0FBQyxjQUFELENBRmhCLEVBR0ZDLGFBSEUsQ0FHWSxJQUhaLENBQVA7QUFJSDs7Ozs7O2tCQU5nQlQsYSIsImZpbGUiOiJDb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgICBzdGF0aWMgY3JlYXRlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25maWd1cmF0aW9uKClcbiAgICAgICAgICAgIC5zZXRJbXBvcnRTdHlsZShudWxsKVxuICAgICAgICAgICAgLnNldElnbm9yZWRGb2xkZXJzKFsnbm9kZV9tb2R1bGVzJ10pXG4gICAgICAgICAgICAuc2V0Um9vdEZvbGRlcihudWxsKTtcbiAgICB9XG5cbiAgICBzZXRJbXBvcnRTdHlsZShzdHlsZSkge1xuICAgICAgICBhc3NlcnQoc3R5bGUgPT09ICdpbXBvcnQnIHx8IHN0eWxlID09PSAncmVxdWlyZScgfHwgc3R5bGUgPT0gbnVsbCk7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0SW1wb3J0U3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlO1xuICAgIH1cblxuICAgIHNldElnbm9yZWRGb2xkZXJzKGZvbGRlcnMpIHtcbiAgICAgICAgaWYgKGZvbGRlcnMpIHtcbiAgICAgICAgICAgIGFzc2VydChBcnJheS5pc0FycmF5KGZvbGRlcnMpKTtcbiAgICAgICAgICAgIHRoaXMuZm9sZGVycyA9IGZvbGRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0SWdub3JlZEZvbGRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGRlcnM7XG4gICAgfVxuXG4gICAgc2V0Um9vdEZvbGRlcihmb2xkZXIpIHtcbiAgICAgICAgdGhpcy5yb290Rm9sZGVyID0gZm9sZGVyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRSb290Rm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290Rm9sZGVyO1xuICAgIH1cbn1cbiJdfQ==