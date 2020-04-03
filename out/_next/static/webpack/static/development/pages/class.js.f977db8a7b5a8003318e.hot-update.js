webpackHotUpdate("static\\development\\pages\\class.js",{

/***/ "./pages/class.js":
/*!************************!*\
  !*** ./pages/class.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/antd/lib/breadcrumb/style/css.js");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_page_header_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/page-header/style/css */ "./node_modules/antd/lib/page-header/style/css.js");
/* harmony import */ var antd_lib_page_header_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_page_header_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/page-header */ "./node_modules/antd/lib/page-header/index.js");
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_components/MainLayout */ "./_components/MainLayout.js");
/* harmony import */ var _components_ClassPage_addClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_components/ClassPage/addClass */ "./_components/ClassPage/addClass.js");







var _this = undefined,
    _jsxFileName = "D:\\Developer\\ReactJS\\test\\pages\\class.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content;


var detailPage = {
  title: "Class",
  navSelected: {
    main: "class",
    sub: ""
  }
};

var ClassPage = function ClassPage() {
  return __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navSelected: detailPage.navSelected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(Header, {
    className: "site-layout-background",
    style: Style.Header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "site-page-header",
    title: detailPage.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx(Content, {
    style: {
      margin: "0 16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "16px 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["PieChartOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }), " Dashboard"), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, detailPage.title)), __jsx("div", {
    className: "site-layout-background",
    style: Style.Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_ClassPage_addClass__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassPage);
var Style = {
  Header: {
    background: "#fff",
    padding: 0
  },
  Content: {
    background: "#fff",
    padding: 24,
    minHeight: 360
  }
};

/***/ })

})
//# sourceMappingURL=class.js.f977db8a7b5a8003318e.hot-update.js.map