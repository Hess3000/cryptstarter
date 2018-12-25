'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CryptstarterFactory = require('./build/CryptstarterFactory.json');

var _CryptstarterFactory2 = _interopRequireDefault(_CryptstarterFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contractInstance = new _web2.default.eth.Contract(JSON.parse(_CryptstarterFactory2.default.interface), '0xAB91860Dc6C4F8075bbAE8A7cc56ef3d3B391782');

exports.default = contractInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNyeXB0c3RhcnRlckZhY3RvcnkiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFnQyxBQUFoQzs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ3hCLEtBQUssQUFBTCxNQUFXLDhCQUFvQixBQUEvQixBQUR3QixZQUV4QixBQUZ3QixBQUF6QixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0dWFydC91ZGVteS9jcnlwdHN0YXJ0ZXIifQ==