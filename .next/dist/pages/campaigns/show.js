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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stuart/udemy/cryptstarter/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    managerAddress = _props.managerAddress,
			    campaignBalance = _props.campaignBalance,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    investorsCount = _props.investorsCount;

			var items = [{
				header: managerAddress,
				description: "The manager created this campaign and can create payment requests",
				meta: 'Address of manager',
				style: { overflowWrap: 'break-word' }
			}, {
				header: _web2.default.utils.fromWei(minimumContribution, 'ether'),
				description: "The minimum amount of ether needed to become an investor",
				meta: 'Minimum contribution (ether)'
			}, {
				header: requestsCount,
				description: "The campaign creator can ask for payment requests",
				meta: 'Payment requests count'
			}, {
				header: investorsCount,
				description: "Number of investors in this campaign who have already donated",
				meta: 'Investors'
			}, {
				header: campaignBalance,
				description: "Amount of ether in this campaign",
				meta: 'Campaign balance'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Campaign Show'), this.renderCards(), _react2.default.createElement(_ContributeForm2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;

								console.log(props);

								return _context.abrupt('return', {
									campaignBalance: summary[0],
									minimumContribution: summary[1],
									requestsCount: summary[2],
									investorsCount: summary[3],
									managerAddress: summary[4]
								});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtYW5hZ2VyQWRkcmVzcyIsImNhbXBhaWduQmFsYW5jZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiaW52ZXN0b3JzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUzs7QUFDVCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFFckI7Ozs7Ozs7Ozs7O2dDQWVVO2dCQU9WLEtBUFUsQUFPTDtPQVBLLEFBRWIsd0JBRmEsQUFFYjtPQUZhLEFBR2IseUJBSGEsQUFHYjtPQUhhLEFBSWIsNkJBSmEsQUFJYjtPQUphLEFBS2IsdUJBTGEsQUFLYjtPQUxhLEFBTWIsd0JBTmEsQUFNYixBQUdEOztPQUFNO1lBQ0wsQUFDUyxBQUNSO2lCQUZELEFBRWMsQUFDYjtVQUhELEFBR08sQUFDTjtXQUFPLEVBQUUsY0FMRyxBQUNiLEFBSVEsQUFBZ0I7QUFKeEIsQUFDQyxJQUZZO1lBUUosY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLHFCQUQ1QixBQUNTLEFBQXdDLEFBQ2hEO2lCQUZELEFBRWMsQUFDYjtVQVZZLEFBT2IsQUFHTztBQUhQLEFBQ0M7WUFJRCxBQUNTLEFBQ1I7aUJBRkQsQUFFYyxBQUNiO1VBZlksQUFZYixBQUdPO0FBSFAsQUFDQztZQUlELEFBQ1MsQUFDUjtpQkFGRCxBQUVjLEFBQ2I7VUFwQlksQUFpQmIsQUFHTztBQUhQLEFBQ0M7WUFJRCxBQUNTLEFBQ1I7aUJBRkQsQUFFYyxBQUNiO1VBekJGLEFBQWMsQUFzQmIsQUFHTyxBQUdSO0FBTkMsQUFDQzs7d0NBS0ssQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBRVI7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQyx1QkFGRixBQUVFLEFBQUssQUFDTiwrQkFBQSxBQUFDOztlQUFEO2lCQUpGLEFBQ0MsQUFHQyxBQUlGO0FBSkU7QUFBQTs7Ozs7d0dBNUQwQixBOzs7OztZQUN0QjtBLG1CQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFNLEEsQUFBckI7O2VBQ0ssU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQSxBQUE4Qjs7WUFBOUM7QSwyQkFDTjs7Z0JBQUEsQUFBUSxJQUFSLEFBQVk7OzswQkFHTSxRQURaLEFBQ1ksQUFBUSxBQUN6Qjs4QkFBcUIsUUFGaEIsQUFFZ0IsQUFBUSxBQUM3Qjt3QkFBZSxRQUhWLEFBR1UsQUFBUSxBQUN2Qjt5QkFBZ0IsUUFKWCxBQUlXLEFBQVEsQUFDeEI7eUJBQWdCLFFBTFgsQUFLVyxBQUFRLEE7QUFMbkIsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVB3QixBLEFBb0UzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdHVhcnQvdWRlbXkvY3J5cHRzdGFydGVyIn0=