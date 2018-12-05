(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/app.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/app.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Declare global variable*/\n:root {\n  --primary-font: \"Oxygen\";\n  --primary-color: #ffffff;\n  --secondary-color: rgb(255, 255, 255);\n  --primary-text-color: #000000;\n  --secondary-text-color: #ffffff;\n  --send-message-form: #f5f5f5;\n  --message-bubble: rgb(249, 249, 249);\n  --my-message-bubble: rgb(62, 62, 62);\n  --primary-background-color: rgb(58, 58, 58);\n}\n\nbody {\n  overflow: hidden;\n  background-color: rgb(58, 58, 58);\n  background-color: var(--primary-background-color);\n  position: relative;\n  margin: auto;\n  height: auto;\n  min-height: 100% !important;\n  text-align: center;\n}\n\n.chat-box {\n  vertical-align: top;\n  display: inline-block;\n  position: relative;\n  height: 95vh;\n  min-width: 700px;\n  width: 80%;\n  padding: 20pt 30pt;\n  border-radius: 20px;\n  box-sizing: border-box;\n  background: linear-gradient(135deg, rgb(255, 189, 67) 40%, rgb(250, 166, 95));\n  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.1);\n}\n\n.chat-area {\n  margin-top: 20pt;\n  width: 100%;\n  height: 80%;\n  display: inline-flex;\n  padding-bottom: 10px;\n}\n\n.message-slot,\n.my-message-slot {\n  position: relative;\n  width: 100%;\n  font-family: \"Oxygen\";\n  font-family: var(--primary-font);\n  text-align: left;\n}\n\n.my-message-slot {\n  margin: 3pt 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.message-bubble,\n.my-message-bubble {\n  font-size: 15px;\n  padding: 8pt;\n  border-radius: 8px;\n  max-width: 250px;\n  display: inline-block;\n  word-wrap: break-word;\n  text-align: left;\n}\n\n.message-bubble {\n  color: #000000;\n  color: var(--primary-text-color);\n  background: rgb(249, 249, 249);\n  background: var(--message-bubble);\n}\n\n.my-message-bubble {\n  color: rgb(255, 255, 255);\n  color: var(--secondary-color);\n  background: rgb(62, 62, 62);\n  background: var(--my-message-bubble);\n  margin-right: 15px;\n}\n\n.message-time,\n.my-message-time {\n  font-size: 10pt;\n  font-weight: bold;\n  color: #ffffff;\n  color: var(--primary-color);\n  opacity: 0.9;\n}\n\n.message-time {\n  display: inline-block;\n  vertical-align: bottom;\n  padding-left: 8pt;\n}\n\n.my-message-time {\n  padding-right: 8pt;\n  bottom: 0;\n}\n\n.message-slot .message-sender {\n  font-family: \"Oxygen\";\n  font-family: var(--primary-font);\n  font-size: 15px;\n  color: #ffffff;\n  color: var(--primary-color);\n  margin: 4pt 0pt;\n  opacity: 0.9;\n}\n\n.empty-area {\n  grid-area: b;\n  background-color: white;\n}\n\n.empty-area2 {\n  grid-area: n;\n  background-color: white;\n}\n\n.title-font {\n  height: 10%;\n  padding: 0pt 10pt;\n  font-family: \"Oxygen\";\n  font-family: var(--primary-font);\n  font-size: 75px;\n  color: white;\n  text-align: left;\n}\n\n.message-list {\n  width: 100%;\n  max-height: 100%;\n  margin-top: auto;\n  overflow-y: overlay;\n}\n\n.message-list::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: transparent;\n}\n\n.message-list::-webkit-scrollbar {\n  width: 12px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.message-list::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(249, 249, 249, 0.5);\n}\n\n.send-message {\n  position: absolute;\n  margin: 0 auto;\n  width: 92%;\n  left: 0;\n  right: 0;\n  bottom: 20pt;\n}\n\n.send-message input {\n  width: 100%;\n  padding: 4pt 10pt;\n  border-style: none;\n  background: #ffffff;\n  font-weight: 200;\n  border: solid #ffffff;\n  border-radius: 25px;\n}\n\n.send-message input::-webkit-input-placeholder {\n  color: slategray;\n  font-style: oblique;\n}\n\n.send-message input::-ms-input-placeholder {\n  color: slategray;\n  font-style: oblique;\n}\n\n.send-message input::placeholder {\n  color: slategray;\n  font-style: oblique;\n}\n\n.send-message input:focus {\n  outline: none !important;\n}\n\n.date {\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 10%;\n  border-radius: 8px;\n  background: rgba(248, 248, 248, 0.39);\n}\n\n.date .date-text {\n  text-align: center;\n  font-size: 9px;\n  color: beige;\n  position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/chatList.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/chatList.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-list {\n  display: inline-block;\n  width: 15%;\n  border-radius: 20px;\n  vertical-align: top;\n  background: linear-gradient(100deg, rgb(255, 67, 114) 10%, rgb(250, 166, 95));  height: 95vh;\n  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.1);\n}\n\n.chat-rooms {\n  margin: 50px auto 0 auto;\n  width: 80%;\n  font-family: var(--primary-font);\n  font-size: 42px;\n  color: white;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 20px auto;\n  padding: 0;\n  width: 90%;\n}\n\nbutton.chat-button {\n  text-align: left;\n  border-radius: 10px;\n  display: inline-block;\n  font-family: var(--primary-font);\n  font-size: 35px;\n  color: white;\n  background: transparent;\n  border: none;\n  width: 82%;\n  outline: none;\n  margin: 5pt 0;\n}\n\nbutton:hover.chat-button {\n  background: rgba(255, 255, 255, 0.3);\n}\n\nbutton:active.chat-button {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/login.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --primary-font: \"Quicksand\";\n}\n\n.top-level {\n  height: 100%;\n  background: url(" + escape(__webpack_require__(/*! ../images/dock.jpg */ "./src/images/dock.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.column {\n  width: calc(100% / 3);\n  display: inline-block;\n}\n\np {\n  font-size: 20px;\n  margin: 0;\n  font-family: \"Quicksand\";\n  font-family: var(--primary-font);\n  color: var(--secondary-text-color);\n}\n\np.manatee {\n  font-size: 90px;\n  font-weight: 500;\n  margin-top: 30%;\n  margin-bottom: 0;\n}\n\np.desc {\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 0;\n}\n\n.send-name {\n  display: flex;\n  width: 95%;\n  height: 2%;\n  padding-top: 2%;\n  max-width: 250px;\n}\n\nimg {\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin: 0px;\n  padding: 0px;\n  border: 0;\n}\n\n.container-google-text,\n.container-facebook-text {\n  font-style: normal;\n  font-family: \"Quicksand\";\n  font-family: var(--primary-font);\n  display: inline-block;\n  margin-top: 2px;\n}\n\n.container-google-text {\n  color: grey;\n  margin-left: -25px;\n}\n\n.container-facebook-text {\n  color: white;\n  margin-left: -10px;\n}\n\n.container-google-color {\n  border-radius: 7px;\n  border-color: white;\n  background-color: white;\n}\n\n.container-facebook-color {\n  border-radius: 7px;\n  border-color: #034aa6;\n  background-color: #034aa6;\n}\n\n.send-name input {\n  width: 100%;\n  padding: 15px 10px;\n  margin-top: 20px;\n\n  border-style: none;\n  background: #ffffff;\n  \n  font-weight: 200;\n  color: grey;\n  \n  border: solid #ffffff;\n  border-radius: 7px;\n  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);\n}\n\n.send-name input::-webkit-input-placeholder {\n  color: grey;\n  font-style: normal;\n  font-family: \"Quicksand\";\n  font-family: var(--primary-font);\n}\n\n.send-name input::-ms-input-placeholder {\n  color: grey;\n  font-style: normal;\n  font-family: \"Quicksand\";\n  font-family: var(--primary-font);\n}\n\n.send-name input::placeholder {\n  color: grey;\n  font-style: normal;\n  font-family: \"Quicksand\";\n  font-family: var(--primary-font);\n}\n\n.send-name input:focus {\n  outline: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/components/ChatList.js":
/*!************************************!*\
  !*** ./src/components/ChatList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatList; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_chatList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/chatList.css */ "./src/styles/chatList.css");
/* harmony import */ var _styles_chatList_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_chatList_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/wisatong/work/freshwater/src/components/ChatList.js";



var ChatRoomButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatRoomButton, _React$Component);

  function ChatRoomButton(props) {
    var _this;

    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatRoomButton);

    _this = Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatRoomButton).call(this, props));
    _this.state = {
      redirect: false,
      next: "",
      chatRooms: ["lounge", "cat", "book"]
    };
    return _this;
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatRoomButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var redirect = this.state.redirect;
      if (redirect) return this.props.redirection(this.state.next, this.props.username);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.state.chatRooms.map(function (name) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "chat-button",
          onClick: function onClick() {
            return _this2.setState({
              redirect: true,
              next: name
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, name);
      }));
    }
  }]);

  return ChatRoomButton;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var ChatList =
/*#__PURE__*/
function (_React$Component2) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatList, _React$Component2);

  function ChatList(props) {
    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatList);

    return Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatList).call(this, props));
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chat-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chat-rooms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Chat rooms"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChatRoomButton, {
        redirection: this.props.redirection,
        username: this.props.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }
  }]);

  return ChatList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/LoginPage.js":
/*!*************************************!*\
  !*** ./src/components/LoginPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app.css */ "./src/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/login.css */ "./src/styles/login.css");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/home/wisatong/work/freshwater/src/components/LoginPage.js";





var LoginPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginPage, _React$Component);

  function LoginPage(props) {
    var _this;

    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPage);

    _this = Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginPage).call(this, props));

    _this.handleKeyPress = function (event) {
      if (event.key === "Enter" && _this.state.username.trim() !== "") {
        _this.setState({
          redirect: true
        });

        return null;
      }
    };

    _this.state = {
      username: "",
      redirect: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleKeyPress = _this.handleKeyPress.bind(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.nameInput.focus();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        username: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var redirect = this.state.redirect;
      if (redirect) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
        push: true,
        to: {
          pathname: "/lounge",
          state: {
            username: this.state.username
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "top-level",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "manatee",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Manatee"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "A simple chat app"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "send-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: function ref(input) {
          return _this2.nameInput = input;
        },
        placeholder: "Enter your name",
        type: "text",
        value: this.state.username,
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))));
    }
  }]);

  return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/components/Message.js":
/*!***********************************!*\
  !*** ./src/components/Message.js ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");

var Message = function Message(sender, destination, text, time) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Message);

  this.sender = sender;
  this.destination = destination;
  this.message = text;
  this.time = time;
};

/***/ }),

/***/ "./src/components/MessageBubble.js":
/*!*****************************************!*\
  !*** ./src/components/MessageBubble.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageBubble; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/wisatong/work/freshwater/src/components/MessageBubble.js";


var MessageBubble =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MessageBubble, _React$Component);

  function MessageBubble() {
    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessageBubble);

    return Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MessageBubble).apply(this, arguments));
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MessageBubble, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "message-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, this.props.message), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "message-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, this.props.time));
    }
  }]);

  return MessageBubble;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/MessageList.js":
/*!***************************************!*\
  !*** ./src/components/MessageList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageList; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MessageBubble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageBubble */ "./src/components/MessageBubble.js");
/* harmony import */ var _MyMessageBubble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyMessageBubble */ "./src/components/MyMessageBubble.js");





var _jsxFileName = "/home/wisatong/work/freshwater/src/components/MessageList.js";




var MessageList =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MessageList, _React$Component);

  function MessageList(props) {
    var _this;

    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessageList);

    _this = Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MessageList).call(this, props));
    _this.state = {
      username: _this.props.username
    };
    return _this;
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MessageList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.msgList != null) this.msgList.scrollTop = this.msgList.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chat-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "message-list",
        ref: function ref(msgList) {
          return _this2.msgList = msgList;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.messages.map(function (message, index) {
        if (message.sender === _this2.state.username) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: index,
            className: "my-message-slot",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_MyMessageBubble__WEBPACK_IMPORTED_MODULE_7__["default"], {
            message: message.message,
            time: message.time,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: index,
            className: "message-slot",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "message-sender",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, message.sender), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_MessageBubble__WEBPACK_IMPORTED_MODULE_6__["default"], {
            message: message.message,
            time: message.time,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }));
        }
      })));
    }
  }]);

  return MessageList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/MyMessageBubble.js":
/*!*******************************************!*\
  !*** ./src/components/MyMessageBubble.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyMessageBubble; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/wisatong/work/freshwater/src/components/MyMessageBubble.js";


var MyMessageBubble =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyMessageBubble, _React$Component);

  function MyMessageBubble() {
    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyMessageBubble);

    return Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyMessageBubble).apply(this, arguments));
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyMessageBubble, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "my-message-slot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "my-message-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, this.props.time), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "my-message-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, this.props.message));
    }
  }]);

  return MyMessageBubble;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/PublicRoom.js":
/*!**************************************!*\
  !*** ./src/components/PublicRoom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PublicRoom; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app.css */ "./src/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MessageList */ "./src/components/MessageList.js");
/* harmony import */ var _SendMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SendMessage */ "./src/components/SendMessage.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Message */ "./src/components/Message.js");
/* harmony import */ var _socketClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../socketClient */ "./src/socketClient.js");
/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ChatList */ "./src/components/ChatList.js");






var _jsxFileName = "/home/wisatong/work/freshwater/src/components/PublicRoom.js";








var sock;

var PublicRoom =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PublicRoom, _React$Component);

  function PublicRoom() {
    var _this;

    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PublicRoom);

    _this = Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PublicRoom).call(this));
    _this.state = {
      user: "",
      chatName: "",
      messages: []
    };

    _this.redirectTo.bind(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));

    return _this;
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PublicRoom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.socketSetup();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var username = this.props.location.state.username;
      this.setState({
        user: username,
        chatName: this.props.location.pathname.substring(1)
      });
    }
  }, {
    key: "socketSetup",
    value: function socketSetup() {
      var _this2 = this;

      sock = _socketClient__WEBPACK_IMPORTED_MODULE_12__["connect"]("ws://35.240.212.170/ws/".concat(this.props.location.pathname.substring(1)));

      sock.onmessage = function (msg) {
        var some = JSON.parse(msg.data);
        var time = new Date(some.time);
        console.log("[info] receive message: ".concat(msg.data));

        _this2.state.messages.push(new _Message__WEBPACK_IMPORTED_MODULE_11__["Message"](some.sender, some.destination, some.message, time.getHours() + ":" + time.getMinutes()));

        _this2.setState({
          messages: _this2.state.messages
        });
      };

      this.sendMessageToSocket = this.sendMessageToSocket.bind(this);
    }
  }, {
    key: "sendMessageToSocket",
    value: function sendMessageToSocket(message) {
      var date = Math.floor(Date.now());
      var msg = JSON.stringify(new _Message__WEBPACK_IMPORTED_MODULE_11__["Message"](this.state.user, this.state.chatName, message, date));
      sock.send(msg);
    }
  }, {
    key: "redirectTo",
    value: function redirectTo(chatName, username) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
        push: true,
        to: {
          pathname: "/login",
          state: {
            user: username
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ChatList__WEBPACK_IMPORTED_MODULE_13__["default"], {
        redirection: this.redirectTo,
        username: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "chat-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "title-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " ", this.state.chatName, " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MessageList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        messages: this.state.messages,
        username: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SendMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sendMessage: function sendMessage(message) {
          return _this3.sendMessageToSocket(message);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })));
    }
  }]);

  return PublicRoom;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/components/SendMessage.js":
/*!***************************************!*\
  !*** ./src/components/SendMessage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SendMessage; });
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/home/wisatong/work/freshwater/src/components/SendMessage.js";


var SendMessage =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SendMessage, _React$Component);

  function SendMessage(props) {
    var _this;

    Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SendMessage);

    _this = Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SendMessage).call(this, props));

    _this.handleKeyPress = function (event) {
      var text = _this.state.message.trim();

      if (event.key === "Enter" && text !== "") {
        _this.props.sendMessage(_this.state.message);

        _this.setState({
          message: ""
        });
      }
    };

    _this.state = {
      message: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleKeyPress = _this.handleKeyPress.bind(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_wisatong_work_freshwater_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SendMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.sendMessageInput != null) this.sendMessageInput.focus();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "send-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: function ref(input) {
          return _this2.sendMessageInput = input;
        },
        placeholder: "Write your message here",
        value: this.state.message,
        type: "message",
        maxLength: "255",
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    }
  }]);

  return SendMessage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/images/dock.jpg":
/*!*****************************!*\
  !*** ./src/images/dock.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dock.6062c1c2.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/Route */ "./node_modules/react-router-dom/Route.js");
/* harmony import */ var react_router_dom_Route__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_PublicRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PublicRoom */ "./src/components/PublicRoom.js");
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LoginPage */ "./src/components/LoginPage.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./src/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wisatong/work/freshwater/src/index.js";







var Routing = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_2___default.a, {
  path: "/",
  exact: true,
  component: _components_LoginPage__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom_Route__WEBPACK_IMPORTED_MODULE_2___default.a, {
  path: "/:chatName",
  exact: true,
  component: _components_PublicRoom__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Routing, document.getElementById("root"));

/***/ }),

/***/ "./src/socketClient.js":
/*!*****************************!*\
  !*** ./src/socketClient.js ***!
  \*****************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
function connect(url) {
  var ws = new WebSocket(url);

  ws.onopen = function () {
    console.log('[info] successfully connected');
  };

  ws.onclose = function () {
    console.log('[info] socket closed');
  };

  ws.onerror = function (error) {
    console.log("[error] ".concat(JSON.stringify(error)));
  };

  ws.onmessage = function (msg) {
    console.log("[info] receive message: ".concat(msg.data));
  };

  return ws;
}

/***/ }),

/***/ "./src/styles/app.css":
/*!****************************!*\
  !*** ./src/styles/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/app.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/app.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/app.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/chatList.css":
/*!*********************************!*\
  !*** ./src/styles/chatList.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./chatList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/chatList.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./chatList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/chatList.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./chatList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/chatList.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/login.css":
/*!******************************!*\
  !*** ./src/styles/login.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/wisatong/work/freshwater/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/wisatong/work/freshwater/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map