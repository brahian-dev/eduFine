module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/landing/sections/FirstSection.js":
/*!*****************************************************!*\
  !*** ./components/landing/sections/FirstSection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/brahian-dev/Documents/University/Proyect/EduFine/components/landing/sections/FirstSection.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst FirstSection = () => {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 7,\n    className: \"principalText row justify-content-center align-items-center pt-5 mt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"ml-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }, \"\\xBF Tienes problemas para organizar tus recursos virtuales ?\", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 21\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"primary\",\n    className: \"mt-5\",\n    size: \"lg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 25\n    }\n  }, \"Comienza la aventura\")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"row justify-content-center align-items-center principalText pt-5 ml-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"images img-fluid\",\n    src: \"/imgFirstSection.jpg\",\n    alt: \"Edufine Image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xhbmRpbmcvc2VjdGlvbnMvRmlyc3RTZWN0aW9uLmpzPzNjYjAiXSwibmFtZXMiOlsiRmlyc3RTZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFNBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksYUFBUyxFQUFDLHVFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBRUksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFTLEVBQUMsTUFBcEM7QUFBMkMsUUFBSSxFQUFDLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosQ0FGSixDQURKLENBREosRUFTSSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLHVFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFrQyxPQUFHLEVBQUMsc0JBQXRDO0FBQTZELE9BQUcsRUFBQyxlQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FUSixDQURKO0FBZUgsQ0FoQkQ7O0FBa0JlQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGFuZGluZy9zZWN0aW9ucy9GaXJzdFNlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgRmlyc3RTZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIG1kPXs3fSBjbGFzc05hbWU9XCJwcmluY2lwYWxUZXh0IHJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBwdC01IG10LTVcIj5cbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgwr8gVGllbmVzIHByb2JsZW1hcyBwYXJhIG9yZ2FuaXphciB0dXMgcmVjdXJzb3MgdmlydHVhbGVzID9cbiAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJtdC01XCIgc2l6ZT1cImxnXCI+Q29taWVuemEgbGEgYXZlbnR1cmE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHByaW5jaXBhbFRleHQgcHQtNSBtbC01XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZXMgaW1nLWZsdWlkXCIgc3JjPVwiL2ltZ0ZpcnN0U2VjdGlvbi5qcGdcIiBhbHQ9XCJFZHVmaW5lIEltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpcnN0U2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/landing/sections/FirstSection.js\n");

/***/ }),

/***/ "./components/landing/sections/SecondSection.js":
/*!******************************************************!*\
  !*** ./components/landing/sections/SecondSection.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/custom.module.scss */ \"./components/landing/sections/styles/custom.module.scss\");\n/* harmony import */ var _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/brahian-dev/Documents/University/Proyect/EduFine/components/landing/sections/SecondSection.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst SecondSection = () => {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    className: `${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.__Second_Section}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 7,\n    className: \"justify-content-right principalText pt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: `${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.__Second_Section_Img} img-fluid`,\n    src: \"/imgSecondSection.png\",\n    alt: \"Edufine Image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"principalText row justify-content-end align-items-center pt-5 mt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, \"EduFine sera tu mejor aliado\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SecondSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xhbmRpbmcvc2VjdGlvbnMvU2Vjb25kU2VjdGlvbi5qcz80OWE4Il0sIm5hbWVzIjpbIlNlY29uZFNlY3Rpb24iLCJzdHlsZXMiLCJfX1NlY29uZF9TZWN0aW9uIiwiX19TZWNvbmRfU2VjdGlvbl9JbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLFNBQ0ksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBSSxHQUFFQyxpRUFBTSxDQUFDQyxnQkFBaUIsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLGFBQVMsRUFBQywwQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFHLEdBQUVELGlFQUFNLENBQUNFLG9CQUFxQixZQUEvQztBQUE0RCxPQUFHLEVBQUMsdUJBQWhFO0FBQXdGLE9BQUcsRUFBQyxlQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FESixDQUpKLENBREo7QUFVSCxDQVhEOztBQWFlSCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGFuZGluZy9zZWN0aW9ucy9TZWNvbmRTZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jdXN0b20ubW9kdWxlLnNjc3MnXG5cbmNvbnN0IFNlY29uZFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9eyBgJHtzdHlsZXMuX19TZWNvbmRfU2VjdGlvbn1gIH0+XG4gICAgICAgICAgICA8Q29sIG1kPXs3fSBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtcmlnaHQgcHJpbmNpcGFsVGV4dCBwdC01XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5fX1NlY29uZF9TZWN0aW9uX0ltZ30gaW1nLWZsdWlkYH0gc3JjPVwiL2ltZ1NlY29uZFNlY3Rpb24ucG5nXCIgYWx0PVwiRWR1ZmluZSBJbWFnZVwiIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHJpbmNpcGFsVGV4dCByb3cganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNSBtdC01XCI+XG4gICAgICAgICAgICAgICAgPENvbD5FZHVGaW5lIHNlcmEgdHUgbWVqb3IgYWxpYWRvPC9Db2w+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/landing/sections/SecondSection.js\n");

/***/ }),

/***/ "./components/landing/sections/ThreeSection.js":
/*!*****************************************************!*\
  !*** ./components/landing/sections/ThreeSection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/custom.module.scss */ \"./components/landing/sections/styles/custom.module.scss\");\n/* harmony import */ var _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/brahian-dev/Documents/University/Proyect/EduFine/components/landing/sections/ThreeSection.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ThreeSection = () => {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 7,\n    className: \"principalText row justify-content-center align-items-center pt-5 mt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, \"Creamos Ambientes virtuales, para que te sea mas facil ense\\xF1ar\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"row justify-content-center align-items-center principalText pt-5 ml-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: `${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.__Second_Section_Img} img-fluid`,\n    src: \"/imgThreeSection.jpg\",\n    alt: \"Edufine Image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xhbmRpbmcvc2VjdGlvbnMvVGhyZWVTZWN0aW9uLmpzPzc0NWYiXSwibmFtZXMiOlsiVGhyZWVTZWN0aW9uIiwic3R5bGVzIiwiX19TZWNvbmRfU2VjdGlvbl9JbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFNBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksYUFBUyxFQUFDLHVFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQURKLENBREosRUFJSSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxFQUFDLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUcsR0FBRUMsaUVBQU0sQ0FBQ0Msb0JBQXFCLFlBQS9DO0FBQTRELE9BQUcsRUFBQyxzQkFBaEU7QUFBdUYsT0FBRyxFQUFDLGVBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBREo7QUFVSCxDQVhEOztBQWFlRiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGFuZGluZy9zZWN0aW9ucy9UaHJlZVNlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2N1c3RvbS5tb2R1bGUuc2NzcydcblxuY29uc3QgVGhyZWVTZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIG1kPXs3fSBjbGFzc05hbWU9XCJwcmluY2lwYWxUZXh0IHJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBwdC01IG10LTVcIj5cbiAgICAgICAgICAgICAgICA8Q29sPkNyZWFtb3MgQW1iaWVudGVzIHZpcnR1YWxlcywgcGFyYSBxdWUgdGUgc2VhIG1hcyBmYWNpbCBlbnNlw7FhcjwvQ29sPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sICBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgcHJpbmNpcGFsVGV4dCBwdC01IG1sLTVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLl9fU2Vjb25kX1NlY3Rpb25fSW1nfSBpbWctZmx1aWRgfSBzcmM9XCIvaW1nVGhyZWVTZWN0aW9uLmpwZ1wiIGFsdD1cIkVkdWZpbmUgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhyZWVTZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/landing/sections/ThreeSection.js\n");

/***/ }),

/***/ "./components/landing/sections/styles/custom.module.scss":
/*!***************************************************************!*\
  !*** ./components/landing/sections/styles/custom.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"__Second_Section\": \"custom___Second_Section__16IZk\",\n\t\"__Second_Section_Img\": \"custom___Second_Section_Img__2fm_A\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xhbmRpbmcvc2VjdGlvbnMvc3R5bGVzL2N1c3RvbS5tb2R1bGUuc2Nzcz9hMTFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmcvc2VjdGlvbnMvc3R5bGVzL2N1c3RvbS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIl9fU2Vjb25kX1NlY3Rpb25cIjogXCJjdXN0b21fX19TZWNvbmRfU2VjdGlvbl9fMTZJWmtcIixcblx0XCJfX1NlY29uZF9TZWN0aW9uX0ltZ1wiOiBcImN1c3RvbV9fX1NlY29uZF9TZWN0aW9uX0ltZ19fMmZtX0FcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/landing/sections/styles/custom.module.scss\n");

/***/ }),

/***/ "./components/navbar/navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/custom.module.scss */ \"./components/navbar/styles/custom.module.scss\");\n/* harmony import */ var _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/brahian-dev/Documents/University/Proyect/EduFine/components/navbar/navbar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst customNavbar = () => {\n  return (//     <Navbar bg=\"light\" expand=\"lg\">\n    //     <Navbar.Brand href=\"#home\">React-Bootstrap</Navbar.Brand>\n    //     <Navbar.Toggle aria-controls=\"basic-navbar-nav\" />\n    //     <Navbar.Collapse id=\"basic-navbar-nav\">\n    //       <Nav className=\"mr-auto\">\n    //         <Nav.Link href=\"#home\">Home</Nav.Link>\n    //         <Nav.Link href=\"#link\">Link</Nav.Link>\n    //       </Nav>\n    //     </Navbar.Collapse>\n    //   </Navbar>\n    __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n      bg: \"light\",\n      fixed: \"top\",\n      expand: \"lg\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Brand, {\n      className: _styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textTitle,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, \"LOGO\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Toggle, {\n      \"aria-controls\": \"basic-navbar-nav\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Collapse, {\n      id: \"basic-navbar-nav\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n      className: \"mr-auto\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Text, {\n      className: `p-3 ${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textItems}`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }\n    }, \"Inicio\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Text, {\n      className: `p-3 ${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textItems}`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }\n    }, \"Nosotros\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Text, {\n      className: `p-3 ${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textItems}`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }\n    }, \"Contactanos\"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Collapse, {\n      className: \"justify-content-end\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Text, {\n      className: `p-3 ${_styles_custom_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textItems}`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, \"Iniciar Sesion\")))\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanM/ODA5ZiJdLCJuYW1lcyI6WyJjdXN0b21OYXZiYXIiLCJzdHlsZXMiLCJ0ZXh0VGl0bGUiLCJ0ZXh0SXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFNBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxVQUFDLHNEQUFEO0FBQVEsUUFBRSxFQUFDLE9BQVg7QUFBbUIsV0FBSyxFQUFDLEtBQXpCO0FBQStCLFlBQU0sRUFBQyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxlQUFTLEVBQUdDLGlFQUFNLENBQUNDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsc0RBQUQsQ0FBUSxNQUFSO0FBQWUsdUJBQWMsa0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixFQUdJLE1BQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLFFBQUUsRUFBQyxrQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsbURBQUQ7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxzREFBRCxDQUFRLElBQVI7QUFBYSxlQUFTLEVBQUksT0FBT0QsaUVBQU0sQ0FBQ0UsU0FBVyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBSUksTUFBQyxzREFBRCxDQUFRLElBQVI7QUFBYSxlQUFTLEVBQUksT0FBT0YsaUVBQU0sQ0FBQ0UsU0FBVyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLEVBT0ksTUFBQyxzREFBRCxDQUFRLElBQVI7QUFBYSxlQUFTLEVBQUksT0FBT0YsaUVBQU0sQ0FBQ0UsU0FBVyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLENBREosQ0FISixFQWdCSSxNQUFDLHNEQUFELENBQVEsUUFBUjtBQUFpQixlQUFTLEVBQUMscUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHNEQUFELENBQVEsSUFBUjtBQUFhLGVBQVMsRUFBSSxPQUFPRixpRUFBTSxDQUFDRSxTQUFXLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0FoQko7QUFYSjtBQWtDSCxDQW5DRDs7QUFxQ2VILDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jdXN0b20ubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgRm9ybSwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3QgY3VzdG9tTmF2YmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgLy8gICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCI+XG4gICAgLy8gICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+UmVhY3QtQm9vdHN0cmFwPC9OYXZiYXIuQnJhbmQ+XG4gICAgLy8gICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAvLyAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAvLyAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAvLyAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cbiAgICAvLyAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5MaW5rPC9OYXYuTGluaz5cbiAgICAvLyAgICAgICA8L05hdj5cbiAgICAvLyAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgLy8gICA8L05hdmJhcj5cbiAgICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJsZ1wiPlxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9eyBzdHlsZXMudGV4dFRpdGxlIH0+TE9HTzwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5UZXh0IGNsYXNzTmFtZT17IGBwLTMgJHsgc3R5bGVzLnRleHRJdGVtcyB9YCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5pY2lvXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVGV4dCBjbGFzc05hbWU9eyBgcC0zICR7IHN0eWxlcy50ZXh0SXRlbXMgfWAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vc290cm9zXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVGV4dCBjbGFzc05hbWU9eyBgcC0zICR7IHN0eWxlcy50ZXh0SXRlbXMgfWAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3Rhbm9zXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLlRleHQ+XG4gICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVGV4dCBjbGFzc05hbWU9eyBgcC0zICR7IHN0eWxlcy50ZXh0SXRlbXMgfWAgfT5cbiAgICAgICAgICAgICAgICAgICAgSW5pY2lhciBTZXNpb25cbiAgICAgICAgICAgICAgICA8L05hdmJhci5UZXh0PlxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar/navbar.js\n");

/***/ }),

/***/ "./components/navbar/styles/custom.module.scss":
/*!*****************************************************!*\
  !*** ./components/navbar/styles/custom.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textTitle\": \"custom_textTitle__IQeK-\",\n\t\"textItems\": \"custom_textItems__hQKco\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9zdHlsZXMvY3VzdG9tLm1vZHVsZS5zY3NzP2MwYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy9jdXN0b20ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0VGl0bGVcIjogXCJjdXN0b21fdGV4dFRpdGxlX19JUWVLLVwiLFxuXHRcInRleHRJdGVtc1wiOiBcImN1c3RvbV90ZXh0SXRlbXNfX2hRS2NvXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/styles/custom.module.scss\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar/navbar */ \"./components/navbar/navbar.js\");\n/* harmony import */ var _components_landing_sections_FirstSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/landing/sections/FirstSection */ \"./components/landing/sections/FirstSection.js\");\n/* harmony import */ var _components_landing_sections_SecondSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/landing/sections/SecondSection */ \"./components/landing/sections/SecondSection.js\");\n/* harmony import */ var _components_landing_sections_ThreeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/landing/sections/ThreeSection */ \"./components/landing/sections/ThreeSection.js\");\nvar _jsxFileName = \"/home/brahian-dev/Documents/University/Proyect/EduFine/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Home = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, \"Edufine\")), __jsx(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    fluid: true,\n    className: \"mt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(_components_landing_sections_FirstSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }), __jsx(_components_landing_sections_SecondSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(_components_landing_sections_ThreeSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2YsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosQ0FESixFQUlJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0ksTUFBQyx5REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBa0IsYUFBUyxFQUFDLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FMSixDQURKO0FBYUgsQ0FkRDs7QUFnQmVBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcidcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL3NlY3Rpb25zL0ZpcnN0U2VjdGlvbidcbmltcG9ydCBTZWNvbmRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9zZWN0aW9ucy9TZWNvbmRTZWN0aW9uJ1xuaW1wb3J0IFRocmVlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvc2VjdGlvbnMvVGhyZWVTZWN0aW9uJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RWR1ZmluZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkICBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICAgICAgPEZpcnN0U2VjdGlvbiAvPlxuICAgICAgICAgICAgICAgIDxTZWNvbmRTZWN0aW9uIC8+IFxuICAgICAgICAgICAgICAgIDxUaHJlZVNlY3Rpb24gLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ })

/******/ });