webpackHotUpdate("static\\development\\pages\\class.js",{

/***/ "./_components/ClassPage/listClass.js":
/*!********************************************!*\
  !*** ./_components/ClassPage/listClass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/antd/lib/table/style/css.js");
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "D:\\Developer\\ReactJS\\test\\_components\\ClassPage\\listClass.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var columns = [{
  title: "Name",
  dataIndex: "name",
  sorter: true,
  render: function render(name) {
    return "".concat(name.first, " ").concat(name.last);
  },
  width: "20%"
}, {
  title: "Action",
  key: "action",
  render: function render(text, name) {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 33
      }
    }, "Halo");
  }
}];

var listClass = function listClass() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      classData = _useState[0],
      setClassData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetch();
  }, []);

  var handleTableChange = function handleTableChange(pagination, filters, sorter) {
    var pager = _objectSpread({}, pagination);

    pager.current = pagination.current;
    setPagination(pager);
    fetch(_objectSpread({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order
    }, filters));
  };

  var fetch = function fetch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // console.log("params:", params);
    setLoading(true);
    var config = {
      method: "get",
      url: "https://randomuser.me/api",
      params: _objectSpread({
        results: 10
      }, params)
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default()(config).then(function (data) {
      // console.log(data.data.results);
      var pagination = _objectSpread({}, pagination); // Read total count from server
      // pagination.total = data.totalCount;


      pagination.total = 200;
      setLoading(false);
      setClassData(data.data.results);
      setPagination(pagination);
    });
  };

  return __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    columns: columns,
    rowKey: function rowKey(record) {
      return record.login.uuid;
    },
    dataSource: classData,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (listClass);

/***/ })

})
//# sourceMappingURL=class.js.9c7e2df2448eac8b8ada.hot-update.js.map