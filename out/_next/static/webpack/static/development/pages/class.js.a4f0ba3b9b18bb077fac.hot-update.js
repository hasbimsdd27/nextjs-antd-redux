webpackHotUpdate("static\\development\\pages\\class.js",{

/***/ "./_components/ClassPage/deleteClass.js":
/*!**********************************************!*\
  !*** ./_components/ClassPage/deleteClass.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _this = undefined,
    _jsxFileName = "D:\\Developer\\ReactJS\\test\\_components\\ClassPage\\deleteClass.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var deleteClassModal = function deleteClassModal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modal = _useState[0],
      showModal = _useState[1];

  showDeleteConfirm = function showDeleteConfirm() {
    var nameData = _this.props.nameData;
    confirm({
      title: "Are you sure delete ".concat(nameData, " class?"),
      icon: __jsx(ExclamationCircleOutlined, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 19
        }
      }),
      content: "If this class is deleted, then the data associated with this class will be lost.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: function onOk() {
        console.log("OK");
      },
      onCancel: function onCancel() {
        console.log("Cancel");
      }
    });
  };

  return __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "danger",
    onClick: _this.showDeleteConfirm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(DeleteOutlined, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (deleteClassModal);

/***/ })

})
//# sourceMappingURL=class.js.a4f0ba3b9b18bb077fac.hot-update.js.map