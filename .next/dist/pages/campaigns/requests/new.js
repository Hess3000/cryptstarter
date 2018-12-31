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

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stuart/udemy/cryptstarter/pages/campaigns/requests/new.js?entry';


var requestNew = function (_Component) {
	(0, _inherits3.default)(requestNew, _Component);

	function requestNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, requestNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = requestNew.__proto__ || (0, _getPrototypeOf2.default)(requestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			description: '',
			value: '',
			recipientAddress: '',
			loading: '',
			error: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, value, recipientAddress, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, value = _this$state.value, recipientAddress = _this$state.recipientAddress;

								_this.setState({ loading: true });

								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.paymentRequest(description, value, recipientAddress).send({
									from: accounts[0] });

							case 10:
								console.log(accounts[0]);
								_context.next = 17;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](4);

								_this.setState({ error: _context.t0.message });
								console.log("paymentRequest", _context.t0.message);

							case 17:

								_this.setState({ loading: false });

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(requestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Create a request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.error, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(_semanticUiReact.Message, {
				error: true,
				header: 'We have an problem!',
				content: this.state.error,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_semanticUiReact.Input, {
				label: 'Description',
				value: this.setState.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_semanticUiReact.Input, {
				label: 'Amount in Ether',
				value: this.setState.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, _react2.default.createElement(_semanticUiReact.Input, {
				label: 'Recipient address',
				value: this.setState.recipientAddress,
				onChange: function onChange(event) {
					return _this3.setState({ recipientAddress: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			})), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: !!this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, 'Create')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return requestNew;
}(_react.Component);

exports.default = requestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwicmVxdWVzdE5ldyIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudEFkZHJlc3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJwYXltZW50UmVxdWVzdCIsInNlbmQiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2tOLEFBRUw7Z0JBQVEsQUFDTSxBQUNiO1VBRk8sQUFFQSxBQUNQO3FCQUhPLEFBR1ksQUFDbkI7WUFKTyxBQUlFLEFBQ1Q7VUFMTyxBQUtBLEE7QUFMQSxBQUNQLFdBZ0JELEE7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO3FFQUFBOztrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBQ0E7QUFGSSxtQkFFTyx3QkFBUyxNQUFBLEFBQUssTUFGckIsQUFFTyxBQUFvQjtzQkFDWSxNQUh2QyxBQUc0QyxPQUg1QyxBQUdGLDBCQUhFLEFBR0YsYUFIRSxBQUdXLG9CQUhYLEFBR1csT0FIWCxBQUdrQiwrQkFIbEIsQUFHa0IsQUFFNUI7O2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FMTCxBQUtWLEFBQWMsQUFBVTs7d0JBTGQ7d0JBQUE7ZUFRYyxjQUFBLEFBQUssSUFSbkIsQUFRYyxBQUFTOztZQUExQjtBQVJHLDRCQUFBO3dCQUFBO2VBU0gsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZUFBakIsQUFDTCxhQURLLEFBRUwsT0FGSyxBQUdMLGtCQUhLLEFBSUo7ZUFDSyxTQWRFLEFBU0gsQUFJQyxBQUNBLEFBQVMsRUFEVCxBQUNOOztZQUNEO2dCQUFBLEFBQVEsSUFBSSxTQWZILEFBZVQsQUFBWSxBQUFTO3dCQWZaO0FBQUE7O1lBQUE7d0JBQUE7d0NBbUJUOztjQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sWUFBdEIsQUFBYyxBQUFZLEFBQzFCO2dCQUFBLEFBQVEsSUFBUixBQUFZLGtCQUFrQixZQXBCckIsQUFvQlQsQUFBa0M7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBdkJOLEFBdUJWLEFBQWMsQUFBVzs7WUF2QmY7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQTBCRjtnQkFFUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQztXQUFELEFBRUM7WUFGRCxBQUVRLEFBQ1A7YUFBUyxLQUFBLEFBQUssTUFIZixBQUdxQjs7ZUFIckI7aUJBREQsQUFDQyxBQUtBO0FBTEE7QUFDQyx1QkFJQSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQztXQUFELEFBQ08sQUFDTjtXQUFPLEtBQUEsQUFBSyxTQUZiLEFBRXNCLEFBQ3JCO2NBQVUseUJBQUE7WUFDVCxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BRDFCLEFBQ1QsQUFBYyxBQUE0QjtBQUo1Qzs7ZUFBQTtpQkFQRixBQU1DLEFBQ0MsQUFRRDtBQVJDO0FBQ0Msd0JBT0QsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7V0FBRCxBQUNPLEFBQ047V0FBTyxLQUFBLEFBQUssU0FGYixBQUVzQixBQUNyQjtjQUFVLHlCQUFBO1lBQ1QsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQURwQixBQUNULEFBQWMsQUFBc0I7QUFKdEM7O2VBQUE7aUJBaEJGLEFBZUMsQUFDQyxBQVFEO0FBUkM7QUFDQyx3QkFPRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQztXQUFELEFBQ08sQUFDTjtXQUFPLEtBQUEsQUFBSyxTQUZiLEFBRXNCLEFBQ3JCO2NBQVUseUJBQUE7WUFDVCxPQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFrQixNQUFBLEFBQU0sT0FEL0IsQUFDVCxBQUFjLEFBQWlDO0FBSmpEOztlQUFBO2lCQXpCRixBQXdCQyxBQUNDLEFBUUQ7QUFSQztBQUNDLHdCQU9GLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7ZUFBdEM7aUJBQUE7QUFBQTtNQXBDSCxBQUNDLEFBRUMsQUFpQ0MsQUFNSDs7Ozs7MEdBL0U0QixBOzs7OztZQUNwQjtBLGtCQUFZLE1BQU0sQSxNQUFsQixBOzBDQUdELEVBQUUsU0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZGdCLEEsQUE0RnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3R1YXJ0L3VkZW15L2NyeXB0c3RhcnRlciJ9