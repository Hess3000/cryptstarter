'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory.js');

var _factory2 = _interopRequireDefault(_factory);

var _layout = require('../components/layout.js');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stuart/udemy/cryptstarter/pages/index.js?entry';


var CrypstarterIndex = function (_Component) {
	(0, _inherits3.default)(CrypstarterIndex, _Component);

	function CrypstarterIndex() {
		(0, _classCallCheck3.default)(this, CrypstarterIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CrypstarterIndex.__proto__ || (0, _getPrototypeOf2.default)(CrypstarterIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CrypstarterIndex, [{
		key: 'renderCryptstarter',
		value: function renderCryptstarter() {
			var items = this.props.campaigns.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					}, 'Link to address details'),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, 'Open campaigns'), _react2.default.createElement(_semanticUiReact.Button, {
				floated: 'right',
				content: 'Create New',
				icon: 'add',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}), this.renderCryptstarter()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedContracts().call();

							case 2:
								campaigns = _context.sent;
								return _context.abrupt('return', { campaigns: campaigns });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CrypstarterIndex;
}(_react.Component);

exports.default = CrypstarterIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImNvbnRyYWN0SW5zdGFuY2UiLCJMYXlvdXQiLCJDcnlwc3RhcnRlckluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ3J5cHRzdGFydGVyIiwibWV0aG9kcyIsImdldERlcGxveWVkQ29udHJhY3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O3VDQVFnQixBQUNwQjtPQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2pEOzthQUFPLEFBQ0UsQUFDUjtrQ0FBYSxjQUFBOztpQkFBQTttQkFBQTtBQUFBO0FBQUEsTUFBQSxFQUZQLEFBRU8sQUFDYjtZQUhELEFBQU8sQUFHQyxBQUVSO0FBTE8sQUFDTjtBQUZGLEFBQWMsQUFRZCxJQVJjOzt3Q0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQUFQLEFBQU8sQUFDUDtBQURPO0lBQUE7Ozs7MkJBR0MsQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUVDO0FBRkQ7QUFBQSxzQkFFQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFFQSxtQ0FBQSxBQUFDO2FBQUQsQUFDUyxBQUNSO2FBRkQsQUFFUyxBQUNSO1VBSEQsQUFHTSxBQUNMO2FBSkQ7O2VBQUE7aUJBSkQsQUFJQyxBQU1DO0FBTkQ7QUFDQyxZQVBKLEFBQ0MsQUFDQyxBQVVFLEFBQUssQUFJVDs7Ozs7Ozs7Ozs7O2VBbEN3QixrQkFBQSxBQUFpQixRQUFqQixBQUF5Qix1QkFBekIsQUFBZ0QsQTs7WUFBbEU7QTt5Q0FFQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxzQixBLEFBd0MvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3R1YXJ0L3VkZW15L2NyeXB0c3RhcnRlciJ9