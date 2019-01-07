module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mcrae/Desktop/fCC/randomQuote/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var db = {
  quotes: [{
    quote: "If you pour some music on whatever's wrong, it'll sure help out.",
    author: 'Levon Helm'
  }, {
    quote: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse'
  }, {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    author: 'Napoleon Hill'
  }, {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein'
  }, {
    quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    author: 'Robert Frost'
  }, {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale'
  }, {
    quote: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky'
  }, {
    quote: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
    author: 'Michael Jordan'
  }, {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart'
  }, {
    quote: 'Every strike brings me closer to the next home run.',
    author: 'Babe Ruth'
  }, {
    quote: 'Definiteness of purpose is the starting point of all achievement.',
    author: 'W. Clement Stone'
  }, {
    quote: 'We must balance conspicuous consumption with conscious capitalism.',
    author: 'Kevin Kruse'
  }, {
    quote: 'Life is what happens to you while you’re busy making other plans.',
    author: 'John Lennon'
  }, {
    quote: 'We become what we think about.',
    author: 'Earl Nightingale'
  }, {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
    author: 'Mark Twain'
  }, {
    quote: 'Life is 10% what happens to me and 90% of how I react to it.',
    author: 'Charles Swindoll'
  }, {
    quote: 'The most common way people give up their power is by thinking they don’t have any.',
    author: 'Alice Walker'
  }, {
    quote: 'The mind is everything. What you think you become.',
    author: 'Buddha'
  }, {
    quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb'
  }, {
    quote: 'An unexamined life is not worth living.',
    author: 'Socrates'
  }, {
    quote: 'Eighty percent of success is showing up.',
    author: 'Woody Allen'
  }, {
    quote: 'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs'
  }, {
    quote: 'Winning isn’t everything, but wanting to win is.',
    author: 'Vince Lombardi'
  }, {
    quote: 'I am not a product of my circumstances. I am a product of my decisions.',
    author: 'Stephen Covey'
  }, {
    quote: 'Every child is an artist.  The problem is how to remain an artist once he grows up.',
    author: 'Pablo Picasso'
  }, {
    quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
    author: 'Christopher Columbus'
  }, {
    quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    author: 'Maya Angelou'
  }, {
    quote: 'Either you run the day, or the day runs you.',
    author: 'Jim Rohn'
  }, {
    quote: 'Whether you think you can or you think you can’t, you’re right.',
    author: 'Henry Ford'
  }, {
    quote: 'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'Mark Twain'
  }, {
    quote: 'Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.',
    author: 'Johann Wolfgang von Goethe'
  }, {
    quote: 'The best revenge is massive success.',
    author: 'Frank Sinatra'
  }, {
    quote: 'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.',
    author: 'Zig Ziglar'
  }, {
    quote: 'Life shrinks or expands in proportion to one’s courage.',
    author: 'Anais Nin'
  }, {
    quote: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
    author: 'Vincent Van Gogh'
  }, {
    quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
    author: 'Aristotle'
  }, {
    quote: 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
    author: 'Jesus'
  }, {
    quote: 'The only person you are destined to become is the person you decide to be.',
    author: 'Ralph Waldo Emerson'
  }, {
    quote: 'Go confidently in the direction of your dreams.  Live the life you have imagined.',
    author: 'Henry David Thoreau'
  }, {
    quote: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
    author: 'Erma Bombeck'
  }, {
    quote: 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.',
    author: 'Booker T. Washington'
  }, {
    quote: 'Certain things catch your eye, but pursue only those that capture the heart.',
    author: ' Ancient Indian Proverb'
  }, {
    quote: 'Believe you can and you’re halfway there.',
    author: 'Theodore Roosevelt'
  }, {
    quote: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair'
  }, {
    quote: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
    author: 'Plato'
  }, {
    quote: 'Teach thy tongue to say, “I do not know,” and thous shalt progress.',
    author: 'Maimonides'
  }, {
    quote: 'Start where you are. Use what you have.  Do what you can.',
    author: 'Arthur Ashe'
  }, {
    quote: 'When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
    author: 'John Lennon'
  }, {
    quote: 'Fall seven times and stand up eight.',
    author: 'Japanese Proverb'
  }, {
    quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
    author: 'Helen Keller'
  }, {
    quote: 'Everything has beauty, but not everyone can see.',
    author: 'Confucius'
  }, {
    quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    author: 'Anne Frank'
  }, {
    quote: 'When I let go of what I am, I become what I might be.',
    author: 'Lao Tzu'
  }, {
    quote: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
    author: 'Maya Angelou'
  }, {
    quote: 'Happiness is not something readymade.  It comes from your own actions.',
    author: 'Dalai Lama'
  }, {
    quote: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
    author: 'Sheryl Sandberg'
  }, {
    quote: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.',
    author: 'Aristotle'
  }, {
    quote: 'If the wind will not serve, take to the oars.',
    author: 'Latin Proverb'
  }, {
    quote: 'You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.',
    author: 'Unknown'
  }, {
    quote: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
    author: 'Marie Curie'
  }, {
    quote: 'Too many of us are not living our dreams because we are living our fears.',
    author: 'Les Brown'
  }, {
    quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    author: 'Joshua J. Marine'
  }, {
    quote: 'If you want to lift yourself up, lift up someone else.',
    author: 'Booker T. Washington'
  }, {
    quote: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
    author: 'Leonardo da Vinci'
  }, {
    quote: 'Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.',
    author: 'Jamie Paolinetti'
  }, {
    quote: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame.',
    author: 'Erica Jong'
  }, {
    quote: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
    author: 'Bob Dylan'
  }, {
    quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: 'Benjamin Franklin'
  }, {
    quote: 'In order to succeed, your desire for success should be greater than your fear of failure.',
    author: 'Bill Cosby'
  }, {
    quote: 'A person who never made a mistake never tried anything new.',
    author: ' Albert Einstein'
  }, {
    quote: 'The person who says it cannot be done should not interrupt the person who is doing it.',
    author: 'Chinese Proverb'
  }, {
    quote: 'There are no traffic jams along the extra mile.',
    author: 'Roger Staubach'
  }, {
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot'
  }, {
    quote: 'You become what you believe.',
    author: 'Oprah Winfrey'
  }, {
    quote: 'I would rather die of passion than of boredom.',
    author: 'Vincent van Gogh'
  }, {
    quote: 'A truly rich man is one whose children run into his arms when his hands are empty.',
    author: 'Unknown'
  }, {
    quote: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
    author: 'Ann Landers'
  }, {
    quote: 'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
    author: 'Abigail Van Buren'
  }, {
    quote: 'Build your own dreams, or someone else will hire you to build theirs.',
    author: 'Farrah Gray'
  }, {
    quote: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
    author: 'Jesse Owens'
  }, {
    quote: 'Education costs money.  But then so does ignorance.',
    author: 'Sir Claus Moser'
  }, {
    quote: 'I have learned over the years that when one’s mind is made up, this diminishes fear.',
    author: 'Rosa Parks'
  }, {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius'
  }, {
    quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
    author: 'Oprah Winfrey'
  }, {
    quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
    author: 'Dalai Lama'
  }, {
    quote: 'You can’t use up creativity.  The more you use, the more you have.',
    author: 'Maya Angelou'
  }, {
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan'
  }, {
    quote: 'Our lives begin to end the day we become silent about things that matter.',
    author: 'Martin Luther King Jr.'
  }, {
    quote: 'Do what you can, where you are, with what you have.',
    author: 'Teddy Roosevelt'
  }, {
    quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.',
    author: 'Tony Robbins'
  }, {
    quote: 'Dreaming, after all, is a form of planning.',
    author: 'Gloria Steinem'
  }, {
    quote: 'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.',
    author: 'Mae Jemison'
  }, {
    quote: 'You may be disappointed if you fail, but you are doomed if you don’t try.',
    author: 'Beverly Sills'
  }, {
    quote: 'Remember no one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt'
  }, {
    quote: 'Life is what we make it, always has been, always will be.',
    author: 'Grandma Moses'
  }, {
    quote: 'The question isn’t who is going to let me; it’s who is going to stop me.',
    author: 'Ayn Rand'
  }, {
    quote: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    author: 'Henry Ford'
  }, {
    quote: 'It’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln'
  }, {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale'
  }, {
    quote: 'Either write something worth reading or do something worth writing.',
    author: 'Benjamin Franklin'
  }, {
    quote: 'Nothing is impossible, the word itself says, “I’m possible!”',
    author: '–Audrey Hepburn'
  }, {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  }, {
    quote: 'If you can dream it, you can achieve it.',
    author: 'Zig Ziglar'
  }, {
    quote: 'I taught you that.',
    author: 'Brian Jacobson'
  }, {
    quote: 'Is there beer in that cup?',
    author: 'Matt Traylor'
  }, {
    quote: 'The garden state!',
    author: 'John Teschner'
  }, {
    quote: "There's no way of knowing, it's impossible to tell.",
    author: 'Adam Martin'
  }, {
    quote: 'Opium? I said dopium! It was a jokium!',
    author: 'Andrew Irby'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ "./db.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var QuoteBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuoteBox, _React$Component);

  function QuoteBox() {
    var _this;

    _classCallCheck(this, QuoteBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuoteBox).call(this));
    _this.state = {
      current: {
        quote: "If you pour some music on whatever's wrong, it'll sure help out.",
        author: 'Levon Helm'
      }
    };
    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(QuoteBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('component did mount!');
    }
  }, {
    key: "clickHandler",
    value: function clickHandler() {
      console.log('clicked!');
      this.randomize(_db__WEBPACK_IMPORTED_MODULE_2__["default"].quotes); // console.log(this.state);
    }
  }, {
    key: "randomize",
    value: function randomize(arr) {
      var index = Math.ceil(Math.random() * arr.length);
      console.log('index', index);
      var current = arr[index];
      this.setState({
        current: current
      });
      console.log('new state is ', this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "quote-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, this.state.current.quote)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "author"
      }, this.state.current.author), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "new-quote",
        onClick: this.clickHandler
      }, "New Quote"));
    }
  }]);

  return QuoteBox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "thank u, next.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuoteBox, null));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map