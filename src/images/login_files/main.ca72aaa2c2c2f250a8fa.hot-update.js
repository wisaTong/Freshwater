webpackHotUpdate("main",{

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



/***/ })

})
//# sourceMappingURL=main.ca72aaa2c2c2f250a8fa.hot-update.js.map