(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _loading = __webpack_require__(2);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function Loading() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'loading-infinite' },
	    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _loading2.default } })
	  );
	};

	var InfiniteScroll = function (_React$Component) {
	  _inherits(InfiniteScroll, _React$Component);

	  function InfiniteScroll() {
	    _classCallCheck(this, InfiniteScroll);

	    var _this = _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call(this));

	    _this.infiniteScrollId = "infiniteScroll_" + Math.floor(Math.random() * 1000 + 1);

	    return _this;
	  }

	  _createClass(InfiniteScroll, [{
	    key: 'handleScroll',
	    value: function handleScroll(event) {
	      var currentOffsetHeight = parseInt(this.props.offsetHeight, 10) || 50;
	      if (event && event.srcElement && !this.props.isFetching && this.props.onLoad) {
	        var offsetHeight = event.srcElement.scrollHeight - event.srcElement.offsetHeight;
	        var scrollTop = event.srcElement.scrollTop;
	        if (scrollTop + currentOffsetHeight > offsetHeight) {
	          this.props.onLoad();
	        }
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var infiniteScroll = document.getElementById(this.infiniteScrollId);
	      infiniteScroll.addEventListener('scroll', this.handleScroll.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var infiniteScroll = document.getElementById(this.infiniteScrollId);
	      infiniteScroll.removeEventListener('scroll', this.handleScroll.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { height: '100%', overflowY: 'scroll' }, className: this.props.styleScrollBarClass || "styleScrollBar",
	          id: this.infiniteScrollId },
	        this.props.children,
	        this.props.isFetching && _react2.default.createElement(
	          'div',
	          null,
	          this.props.loaderComponent ? this.props.loaderComponent : _react2.default.createElement(Loading, null)
	        )
	      );
	    }
	  }]);

	  return InfiniteScroll;
	}(_react2.default.Component);

	exports.default = InfiniteScroll;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?><svg width='30px' height='30px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect><circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"183.7831702350029 98.96016858807849\" stroke=\"#696162\" fill=\"none\" stroke-width=\"10\"><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform></circle></svg>\r\n"

/***/ }
/******/ ])
});
;