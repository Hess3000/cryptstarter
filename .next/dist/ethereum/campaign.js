'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Cryptstarter = require('./build/Cryptstarter.json');

var _Cryptstarter2 = _interopRequireDefault(_Cryptstarter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_Cryptstarter2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1QixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDM0I7UUFBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTixLQUFLLEFBQUwsTUFBVyx1QkFBZ0IsQUFBM0IsQUFETSxZQUVOLEFBRk0sQUFBUCxBQUlBO0FBTEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0dWFydC91ZGVteS9jcnlwdHN0YXJ0ZXIifQ==