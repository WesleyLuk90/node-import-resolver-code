'use strict';
'use babel';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJzdHlsZSIsImZvbGRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJmb2xkZXIiLCJyb290Rm9sZGVyIiwic2V0SW1wb3J0U3R5bGUiLCJzZXRJZ25vcmVkRm9sZGVycyIsInNldFJvb3RGb2xkZXIiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7dUNBUUZDLEssRUFBTztBQUNsQixrQ0FBT0EsVUFBVSxRQUFWLElBQXNCQSxVQUFVLFNBQWhDLElBQTZDQSxTQUFTLElBQTdEO0FBQ0EsaUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLG1CQUFPLElBQVA7QUFDSDs7O3lDQUVnQjtBQUNiLG1CQUFPLEtBQUtBLEtBQVo7QUFDSDs7OzBDQUVpQkMsTyxFQUFTO0FBQ3ZCLGdCQUFJQSxPQUFKLEVBQWE7QUFDVCxzQ0FBT0MsTUFBTUMsT0FBTixDQUFjRixPQUFkLENBQVA7QUFDQSxxQkFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7Ozs0Q0FFbUI7QUFDaEIsbUJBQU8sS0FBS0EsT0FBWjtBQUNIOzs7c0NBRWFHLE0sRUFBUTtBQUNsQixpQkFBS0MsVUFBTCxHQUFrQkQsTUFBbEI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7Ozt3Q0FFZTtBQUNaLG1CQUFPLEtBQUtDLFVBQVo7QUFDSDs7O3dDQXBDc0I7QUFDbkIsbUJBQU8sSUFBSU4sYUFBSixHQUNGTyxjQURFLENBQ2EsSUFEYixFQUVGQyxpQkFGRSxDQUVnQixDQUFDLGNBQUQsQ0FGaEIsRUFHRkMsYUFIRSxDQUdZLElBSFosQ0FBUDtBQUlIOzs7Ozs7a0JBTmdCVCxhIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgc3RhdGljIGNyZWF0ZURlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uZmlndXJhdGlvbigpXG4gICAgICAgICAgICAuc2V0SW1wb3J0U3R5bGUobnVsbClcbiAgICAgICAgICAgIC5zZXRJZ25vcmVkRm9sZGVycyhbJ25vZGVfbW9kdWxlcyddKVxuICAgICAgICAgICAgLnNldFJvb3RGb2xkZXIobnVsbCk7XG4gICAgfVxuXG4gICAgc2V0SW1wb3J0U3R5bGUoc3R5bGUpIHtcbiAgICAgICAgYXNzZXJ0KHN0eWxlID09PSAnaW1wb3J0JyB8fCBzdHlsZSA9PT0gJ3JlcXVpcmUnIHx8IHN0eWxlID09IG51bGwpO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldEltcG9ydFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZTtcbiAgICB9XG5cbiAgICBzZXRJZ25vcmVkRm9sZGVycyhmb2xkZXJzKSB7XG4gICAgICAgIGlmIChmb2xkZXJzKSB7XG4gICAgICAgICAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShmb2xkZXJzKSk7XG4gICAgICAgICAgICB0aGlzLmZvbGRlcnMgPSBmb2xkZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldElnbm9yZWRGb2xkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2xkZXJzO1xuICAgIH1cblxuICAgIHNldFJvb3RGb2xkZXIoZm9sZGVyKSB7XG4gICAgICAgIHRoaXMucm9vdEZvbGRlciA9IGZvbGRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0Um9vdEZvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdEZvbGRlcjtcbiAgICB9XG59XG4iXX0=