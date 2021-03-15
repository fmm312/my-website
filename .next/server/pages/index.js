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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/About/index.tsx":
/*!****************************************!*\
  !*** ./src/components/About/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/About/styles.ts\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"react-icons/io\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ \"react-icons/di\");\n/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/si */ \"react-icons/si\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/About/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst About = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, \"About me\"), __jsx(\"div\", {\n    className: \"line-bellow-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"I'm a guy who loves working with challenging and creative projects. I love to develop solutions through technology and positively impact people, I am in constant search for best practices and also trying new things. I am a JavaScript enthusiast and my specialty is front-end development using React/React Native. I also have aptitude for back end development with Node.js, in addition to solid knowledge in UX, interface design and systems usability.\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__[\"BiRightArrow\"], {\n    className: \"skill-icon-arrow\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }\n  }), \"Technologies I master\"), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__[\"IoLogoJavascript\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaReact\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__[\"SiTypescript\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_4__[\"DiCss3\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_4__[\"DiSass\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiFillHtml5\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__[\"SiJquery\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__[\"SiRedux\"], {\n    className: \"skill-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC9pbmRleC50c3g/ZDMwYiJdLCJuYW1lcyI6WyJBYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUM1QixTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwY0FERixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFlLGFBQVMsRUFBQyxrQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELDBCQURGLEVBS0UsTUFBQywrREFBRDtBQUFrQixhQUFTLEVBQUMsWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyxzREFBRDtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLDJEQUFEO0FBQWMsYUFBUyxFQUFDLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMscURBQUQ7QUFBUSxhQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyxxREFBRDtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLDBEQUFEO0FBQWEsYUFBUyxFQUFDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsdURBQUQ7QUFBVSxhQUFTLEVBQUMsWUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQyxzREFBRDtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FaRixDQUpGLENBREY7QUFxQ0QsQ0F0Q0Q7O0FBd0NlQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Fib3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuaW1wb3J0IHsgSW9Mb2dvSmF2YXNjcmlwdCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgRmFSZWFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRGlDc3MzLCBEaVNhc3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcbmltcG9ydCB7IEFpRmlsbEh0bWw1IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgU2lKcXVlcnksIFNpUmVkdXgsIFNpVHlwZXNjcmlwdCB9IGZyb20gJ3JlYWN0LWljb25zL3NpJztcbmltcG9ydCB7IEJpUmlnaHRBcnJvdyB9ZnJvbSAncmVhY3QtaWNvbnMvYmknO1xuXG5jb25zdCBBYm91dDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT5BYm91dCBtZTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtYmVsbG93LXRpdGxlXCIgLz5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSSdtIGEgZ3V5IHdobyBsb3ZlcyB3b3JraW5nIHdpdGggY2hhbGxlbmdpbmcgYW5kIFxuICAgICAgICAgIGNyZWF0aXZlIHByb2plY3RzLiBJIGxvdmUgdG8gZGV2ZWxvcCBzb2x1dGlvbnMgdGhyb3VnaCBcbiAgICAgICAgICB0ZWNobm9sb2d5IGFuZCBwb3NpdGl2ZWx5IGltcGFjdCBwZW9wbGUsIEkgYW0gaW4gY29uc3RhbnQgXG4gICAgICAgICAgc2VhcmNoIGZvciBiZXN0IHByYWN0aWNlcyBhbmQgYWxzbyB0cnlpbmcgbmV3IHRoaW5ncy5cbiAgICAgICAgICBJIGFtIGEgSmF2YVNjcmlwdCBlbnRodXNpYXN0IGFuZCBteSBzcGVjaWFsdHkgaXMgZnJvbnQtZW5kXG4gICAgICAgICAgZGV2ZWxvcG1lbnQgdXNpbmcgUmVhY3QvUmVhY3QgTmF0aXZlLiBJIGFsc28gaGF2ZSBhcHRpdHVkZSBmb3IgXG4gICAgICAgICAgYmFjayBlbmQgZGV2ZWxvcG1lbnQgd2l0aCBOb2RlLmpzLCBpbiBhZGRpdGlvbiB0byBzb2xpZCBrbm93bGVkZ2UgaW4gXG4gICAgICAgICAgVVgsIGludGVyZmFjZSBkZXNpZ24gYW5kIHN5c3RlbXMgdXNhYmlsaXR5LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgIDxCaVJpZ2h0QXJyb3cgIGNsYXNzTmFtZT1cInNraWxsLWljb24tYXJyb3dcIi8+XG4gICAgICAgICAgICBUZWNobm9sb2dpZXMgSSBtYXN0ZXJcbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxJb0xvZ29KYXZhc2NyaXB0IGNsYXNzTmFtZT1cInNraWxsLWljb25cIiAvPlxuICAgICAgICAgIDxGYVJlYWN0IGNsYXNzTmFtZT1cInNraWxsLWljb25cIiAvPlxuICAgICAgICAgIDxTaVR5cGVzY3JpcHQgY2xhc3NOYW1lPVwic2tpbGwtaWNvblwiIC8+XG4gICAgICAgICAgPERpQ3NzMyBjbGFzc05hbWU9XCJza2lsbC1pY29uXCIgLz5cbiAgICAgICAgICA8RGlTYXNzIGNsYXNzTmFtZT1cInNraWxsLWljb25cIiAvPlxuICAgICAgICAgIDxBaUZpbGxIdG1sNSBjbGFzc05hbWU9XCJza2lsbC1pY29uXCIgLz5cbiAgICAgICAgICA8U2lKcXVlcnkgY2xhc3NOYW1lPVwic2tpbGwtaWNvblwiIC8+XG4gICAgICAgICAgPFNpUmVkdXggY2xhc3NOYW1lPVwic2tpbGwtaWNvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgXG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About/index.tsx\n");

/***/ }),

/***/ "./src/components/About/styles.ts":
/*!****************************************!*\
  !*** ./src/components/About/styles.ts ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 80px 100px;\n  color: ${props => props.theme.colors.text};\n\n  > h1 {\n    color: ${props => props.theme.colors.primary};\n    font-family: 'Poppins', sans-serif;\n    font-weight: 800;\n    font-size: 42px;\n  }\n\n  h4 {\n    color: ${props => props.theme.colors.text};\n    font-family: 'Poppins', sans-serif;\n    font-weight: 800;\n    font-size: 16px;\n  }\n\n  > div {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n\n    > p {\n      width: 48%;\n      font-family: 'Nunito Sans', sans-serif;\n      font-size: 18px;\n      opacity: .8;\n    }\n\n    > div {\n      padding-right: 40px;\n    }\n  }\n\n  .line-bellow-title {\n    border-bottom: 4px solid ${props => props.theme.colors.text};\n    margin-top: -20px;\n    width: 50px;\n    margin-bottom: 40px;\n  }\n\n  .skill-icon {\n    font-size: 32px;\n    margin-right: 20px;\n    margin-bottom: 20px;\n    opacity: .8;\n    transition: all 500ms ease;\n\n    &:hover {\n      opacity: initial;\n    }\n  }\n\n  .skill-icon-arrow {\n    color: ${props => props.theme.colors.primary};\n    margin-right: 15px;\n    position: relative;\n    top: 3px;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC9zdHlsZXMudHM/YWZhMyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsInByaW1hcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDcEM7QUFDQSxXQUFXQyxLQUFLLElBQUdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFLO0FBQzNDO0FBQ0E7QUFDQSxhQUFhSCxLQUFLLElBQUdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxPQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFKLEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQkgsS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhSCxLQUFLLElBQUdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxPQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1RE8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BYm91dC9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogODBweCAxMDBweDtcbiAgY29sb3I6ICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG5cbiAgPiBoMSB7XG4gICAgY29sb3I6ICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxuXG4gIGg0IHtcbiAgICBjb2xvcjogJHtwcm9wcz0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgPiBwIHtcbiAgICAgIHdpZHRoOiA0OCU7XG4gICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cblxuICAgID4gZGl2IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxpbmUtYmVsbG93LXRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJHtwcm9wcz0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG5cbiAgLnNraWxsLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvcGFjaXR5OiAuODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogaW5pdGlhbDtcbiAgICB9XG4gIH1cblxuICAuc2tpbGwtaWNvbi1hcnJvdyB7XG4gICAgY29sb3I6ICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/About/styles.ts\n");

/***/ }),

/***/ "./src/components/Articles/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Articles/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Articles/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Articles/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Articles = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Articles\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlcy9pbmRleC50c3g/YmIwYiJdLCJuYW1lcyI6WyJBcnRpY2xlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxRQUFrQixHQUFHLE1BQU07QUFDL0IsU0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFLRCxDQU5EOztBQVFlQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FydGljbGVzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgQXJ0aWNsZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICBBcnRpY2xlc1xuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Articles/index.tsx\n");

/***/ }),

/***/ "./src/components/Articles/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/Articles/styles.ts ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 40px 100px;\n  color: ${props => props.theme.colors.text};\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC9zdHlsZXMudHM/YWZhMyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwidGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBLFdBQVdDLEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUs7QUFDM0MsQ0FITyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FydGljbGVzL3N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xuICBjb2xvcjogJHtwcm9wcz0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Articles/styles.ts\n");

/***/ }),

/***/ "./src/components/Carrer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Carrer/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Carrer/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Carrer/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Carrer = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Relevant experiences\"), __jsx(\"div\", {\n    className: \"line-bellow-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJyZXIvaW5kZXgudHN4Pzg3YWIiXSwibmFtZXMiOlsiQ2FycmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLE1BQWdCLEdBQUcsTUFBTTtBQUM3QixTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFELENBVEQ7O0FBV2VBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2FycmVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgQ2FycmVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPlxuICAgICAgICBSZWxldmFudCBleHBlcmllbmNlc1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1iZWxsb3ctdGl0bGVcIiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJyZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Carrer/index.tsx\n");

/***/ }),

/***/ "./src/components/Carrer/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Carrer/styles.ts ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 40px 100px;\n  color: ${props => props.theme.colors.text};\n\n  > h1 {\n    color: ${props => props.theme.colors.primary};\n    font-family: 'Poppins', sans-serif;\n    font-weight: 800;\n    font-size: 42px;\n    /* text-align: right; */\n  }\n\n  .line-bellow-title {\n    border-bottom: 4px solid ${props => props.theme.colors.text};\n    margin-top: -20px;\n    width: 50px;\n    margin-bottom: 40px;\n    /* float: right; */\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJyZXIvc3R5bGVzLnRzP2U0MmYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInRleHQiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQ3BDO0FBQ0EsV0FBV0MsS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBSztBQUMzQztBQUNBO0FBQ0EsYUFBYUgsS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsT0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQkosS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FuQk8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJyZXIvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XG4gIGNvbG9yOiAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuXG4gID4gaDEge1xuICAgIGNvbG9yOiAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXG4gIH1cblxuICAubGluZS1iZWxsb3ctdGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carrer/styles.ts\n");

/***/ }),

/***/ "./src/components/Contact/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Contact/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Contact/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Contact/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Contact = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Contact\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeD85MzcxIl0sIm5hbWVzIjpbIkNvbnRhY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsT0FBaUIsR0FBRyxNQUFNO0FBQzlCLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvbnRhY3QvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBDb250YWN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgQ29udGFjdFxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Contact/index.tsx\n");

/***/ }),

/***/ "./src/components/Contact/styles.ts":
/*!******************************************!*\
  !*** ./src/components/Contact/styles.ts ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 40px 100px;\n  color: ${props => props.theme.colors.text};\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC9zdHlsZXMudHM/YWZhMyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwidGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBLFdBQVdDLEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUs7QUFDM0MsQ0FITyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvbnRhY3Qvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XG4gIGNvbG9yOiAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Contact/styles.ts\n");

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Footer/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Footer/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Footer = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Footer\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4PzBiMGEiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLE1BQWdCLEdBQUcsTUFBTTtBQUM3QixTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBS0QsQ0FORDs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICBGb290ZXJcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Footer/index.tsx\n");

/***/ }),

/***/ "./src/components/Footer/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Footer/styles.ts ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  grid-area: footer;\n  background: green;\n  margin-top: auto;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvc3R5bGVzLnRzPzVmZTYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLENBSk8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Footer/styles.ts\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.ts\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ \"react-switch\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Header/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Header = () => {\n  const {\n    0: checked,\n    1: setChecked\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, \"Logo\"), __jsx(react_switch__WEBPACK_IMPORTED_MODULE_2___default.a // checked={title === 'dark'}\n  , {\n    checkedIcon: false,\n    uncheckedIcon: false,\n    height: 10,\n    width: 40,\n    handleDiameter: 20 // offColor={shade(0.15, colors.primary)}\n    // onColor={colors.secundary}\n    ,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2FlZWIiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ1c2VTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLE1BQU1BLE1BQXVCLEdBQUcsTUFBTTtBQUNwQyxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUUsTUFBQyxtREFBRCxDQUNFO0FBREY7QUFFRSxlQUFXLEVBQUUsS0FGZjtBQUdFLGlCQUFhLEVBQUUsS0FIakI7QUFJRSxVQUFNLEVBQUUsRUFKVjtBQUtFLFNBQUssRUFBRSxFQUxUO0FBTUUsa0JBQWMsRUFBRSxFQU5sQixDQU9FO0FBQ0E7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQWVELENBbEJEOztBQW9CZUgscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9nZ2xlVGhlbWUoKTogdm9pZDtcbn1cblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8cD5Mb2dvPC9wPlxuICAgICAgPFN3aXRjaFxuICAgICAgICAvLyBjaGVja2VkPXt0aXRsZSA9PT0gJ2RhcmsnfVxuICAgICAgICBjaGVja2VkSWNvbj17ZmFsc2V9XG4gICAgICAgIHVuY2hlY2tlZEljb249e2ZhbHNlfVxuICAgICAgICBoZWlnaHQ9ezEwfVxuICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgIGhhbmRsZURpYW1ldGVyPXsyMH1cbiAgICAgICAgLy8gb2ZmQ29sb3I9e3NoYWRlKDAuMTUsIGNvbG9ycy5wcmltYXJ5KX1cbiAgICAgICAgLy8gb25Db2xvcj17Y29sb3JzLnNlY3VuZGFyeX1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/components/Header/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.ts ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  grid-area: header;\n  height: 30px;\n  background-color: ${props => props.theme.colors.background};\n  color: ${props => props.theme.colors.text};\n  padding: 20px 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzPzYyM2UiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQ3BDO0FBQ0E7QUFDQSxzQkFBc0JDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLFVBQVc7QUFDN0QsV0FBV0gsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsSUFBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/styles.ts\n");

/***/ }),

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Layout/styles.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main */ \"./src/components/Main/index.tsx\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ \"./src/components/Menu/index.tsx\");\n/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Right */ \"./src/components/Right/index.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer */ \"./src/components/Footer/index.tsx\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Layout/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Layout = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(_Right__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzU1NzAiXSwibmFtZXMiOlsiTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQWdCLEdBQUcsTUFBTTtBQUM3QixTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNELENBVkQ7O0FBWWVBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vTWFpbic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51JztcbmltcG9ydCBSaWdodCBmcm9tICcuLi9SaWdodCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNYWluIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPFJpZ2h0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ }),

/***/ "./src/components/Layout/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Layout/styles.ts ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  background-color: ${props => props.theme.colors.background};\n\n  display: grid;\n  grid-template-areas:\n  'header header header header header header'\n  'menu main main main main right'\n  'footer footer footer footer footer footer';\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGVzLnRzPzlmNmIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDcEMsc0JBQXNCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxVQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUk8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcidcbiAgJ21lbnUgbWFpbiBtYWluIG1haW4gbWFpbiByaWdodCdcbiAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyJztcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/styles.ts\n");

/***/ }),

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\n/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Welcome */ \"./src/components/Welcome/index.tsx\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../About */ \"./src/components/About/index.tsx\");\n/* harmony import */ var _Carrer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Carrer */ \"./src/components/Carrer/index.tsx\");\n/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Portfolio */ \"./src/components/Portfolio/index.tsx\");\n/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Articles */ \"./src/components/Articles/index.tsx\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Contact */ \"./src/components/Contact/index.tsx\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Main/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Main = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_Welcome__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(_About__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(_Carrer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(_Portfolio__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(_Articles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD9iYmNjIl0sIm5hbWVzIjpbIk1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBYyxHQUFHLE1BQU07QUFDM0IsU0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQVVELENBWEQ7O0FBYWVBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmltcG9ydCBXZWxjb21lIGZyb20gJy4uL1dlbGNvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL0Fib3V0JztcbmltcG9ydCBDYXJyZXIgZnJvbSAnLi4vQ2FycmVyJztcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSAnLi4vUG9ydGZvbGlvJztcbmltcG9ydCBBcnRpY2xlcyBmcm9tICcuLi9BcnRpY2xlcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9Db250YWN0JztcblxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxXZWxjb21lIC8+XG4gICAgICA8QWJvdXQgLz5cbiAgICAgIDxDYXJyZXIgLz5cbiAgICAgIDxQb3J0Zm9saW8gLz5cbiAgICAgIDxBcnRpY2xlcyAvPlxuICAgICAgPENvbnRhY3QgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  grid-area: header;\n  margin-top: 70px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlcy50cz82MzA0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBO0FBQ0EsQ0FITyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4vc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/styles.ts\n");

/***/ }),

/***/ "./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Menu/styles.ts\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/go */ \"react-icons/go\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ \"react-icons/io5\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Menu/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Menu = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__[\"GoHome\"], {\n    className: \"icon-menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsPerson\"], {\n    className: \"icon-menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__[\"IoRocketOutline\"], {\n    className: \"icon-menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__[\"MdComputer\"], {\n    className: \"icon-menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__[\"FiMail\"], {\n    className: \"icon-menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51L2luZGV4LnRzeD84N2M1Il0sIm5hbWVzIjpbIk1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFjLEdBQUcsTUFBTTtBQUMzQixTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBUSxhQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx1REFBRDtBQUFVLGFBQVMsRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLCtEQUFEO0FBQWlCLGFBQVMsRUFBQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLHlEQUFEO0FBQVksYUFBUyxFQUFDLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMscURBQUQ7QUFBUSxhQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREY7QUFVRCxDQVhEOztBQWFlQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbXBvcnQgeyBCc1BlcnNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgR29Ib21lIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XG5pbXBvcnQgeyBJb1JvY2tldE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgeyBNZENvbXB1dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBGaU1haWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuY29uc3QgTWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHb0hvbWUgY2xhc3NOYW1lPVwiaWNvbi1tZW51XCIgLz5cbiAgICAgIDxCc1BlcnNvbiBjbGFzc05hbWU9XCJpY29uLW1lbnVcIiAvPlxuICAgICAgPElvUm9ja2V0T3V0bGluZSBjbGFzc05hbWU9XCJpY29uLW1lbnVcIiAvPlxuICAgICAgPE1kQ29tcHV0ZXIgY2xhc3NOYW1lPVwiaWNvbi1tZW51XCIgLz5cbiAgICAgIDxGaU1haWwgY2xhc3NOYW1lPVwiaWNvbi1tZW51XCIgLz5cbiAgICAgIDxzcGFuIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ }),

/***/ "./src/components/Menu/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Menu/styles.ts ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  grid-area: menu;\n  background: rgba(57, 62, 70, .3);\n  color: ${props => props.theme.colors.text};\n  border-radius: 0px 2px 2px 0px;\n  width: 60px;\n  position: fixed;\n  top: 40%;\n  padding: 30px 0px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */\n  opacity: .8;\n  transition: all 300ms;\n\n  :hover {\n    opacity: initial\n  }\n\n  .icon-menu {\n    font-size: 24px;\n    margin-bottom: 35px;\n    cursor: pointer;\n    transition: all 500ms ease;\n  }\n\n  .icon-menu:hover {\n    color: ${props => props.theme.colors.primary};\n  }\n\n  > span {\n    border-right: 1px solid ${props => props.theme.colors.text};\n    height: 80px;\n    position: fixed;\n    bottom: 0;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51L3N0eWxlcy50cz9mM2ViIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBO0FBQ0EsV0FBV0MsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYUgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsT0FBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEJKLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXZDTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnUvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogbWVudTtcbiAgYmFja2dyb3VuZDogcmdiYSg1NywgNjIsIDcwLCAuMyk7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4O1xuICB3aWR0aDogNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQwJTtcbiAgcGFkZGluZzogMzBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7ICovXG4gIG9wYWNpdHk6IC44O1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG5cbiAgOmhvdmVyIHtcbiAgICBvcGFjaXR5OiBpbml0aWFsXG4gIH1cblxuICAuaWNvbi1tZW51IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIH1cblxuICAuaWNvbi1tZW51OmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIH1cblxuICA+IHNwYW4ge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/styles.ts\n");

/***/ }),

/***/ "./src/components/Portfolio/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Portfolio/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Portfolio/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Portfolio/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Portfolio = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Some interesting projects\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 32\n    }\n  }), \" that I developed\"), __jsx(\"div\", {\n    className: \"line-bellow-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"projects-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8vaW5kZXgudHN4PzBiYTkiXSwibmFtZXMiOlsiUG9ydGZvbGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLFNBQW1CLEdBQUcsTUFBTTtBQUNoQyxTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEekIsc0JBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFNRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERjtBQWNELENBZkQ7O0FBaUJlQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpby9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFBvcnRmb2xpbzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT5cbiAgICAgIFNvbWUgaW50ZXJlc3RpbmcgcHJvamVjdHM8YnIgLz4gdGhhdCBJIGRldmVsb3BlZFxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1iZWxsb3ctdGl0bGVcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Portfolio/index.tsx\n");

/***/ }),

/***/ "./src/components/Portfolio/styles.ts":
/*!********************************************!*\
  !*** ./src/components/Portfolio/styles.ts ***!
  \********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 40px 100px;\n  color: ${props => props.theme.colors.text};\n\n  > h1 {\n    color: ${props => props.theme.colors.primary};\n    font-family: 'Poppins', sans-serif;\n    font-weight: 800;\n    font-size: 42px;\n  }\n\n  .line-bellow-title {\n    border-bottom: 4px solid ${props => props.theme.colors.text};\n    margin-top: -20px;\n    width: 50px;\n    margin-bottom: 40px;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJyZXIvc3R5bGVzLnRzP2U0MmYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInRleHQiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQ3BDO0FBQ0EsV0FBV0MsS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBSztBQUMzQztBQUNBO0FBQ0EsYUFBYUgsS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsT0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0JKLEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpby9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNDBweCAxMDBweDtcbiAgY29sb3I6ICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG5cbiAgPiBoMSB7XG4gICAgY29sb3I6ICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxuXG4gIC5saW5lLWJlbGxvdy10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Portfolio/styles.ts\n");

/***/ }),

/***/ "./src/components/Right/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Right/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Right/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Right/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Right = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Right\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Right);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SaWdodC9pbmRleC50c3g/NzZhNCJdLCJuYW1lcyI6WyJSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUM1QixTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0QsQ0FORDs7QUFRZUEsb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SaWdodC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFJpZ2h0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgUmlnaHRcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Right/index.tsx\n");

/***/ }),

/***/ "./src/components/Right/styles.ts":
/*!****************************************!*\
  !*** ./src/components/Right/styles.ts ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  grid-area: right;\n\n  background: gray;\n\n  position: fixed;\n  top: 50%;\n  right: 0px;\n\n  width: 50px;\n  height: 200px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SaWdodC9zdHlsZXMudHM/YmE2ZCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhPIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUmlnaHQvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogcmlnaHQ7XG5cbiAgYmFja2dyb3VuZDogZ3JheTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICByaWdodDogMHB4O1xuXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Right/styles.ts\n");

/***/ }),

/***/ "./src/components/Welcome/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Welcome/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Welcome/styles.ts\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/components/Welcome/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Welcome = () => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Hi,\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 14\n    }\n  }), \" my name is \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 32\n    }\n  }), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 38\n    }\n  }, \"Felipe\")), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"I develop solutions\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"I'm a guy who loves working with challenging and creative projects. I love to develop solutions through technology and positively impact people, I am in constant search for best practices and also trying new things.\"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Get in Touch\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWxjb21lL2luZGV4LnRzeD8yODBkIl0sIm5hbWVzIjpbIldlbGNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsT0FBaUIsR0FBRyxNQUFNO0FBQzlCLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCxrQkFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF6QixFQUErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQS9CLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrTkFMRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsQ0FERjtBQWFELENBZEQ7O0FBZ0JlQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1dlbGNvbWUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBXZWxjb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgyPkhpLDxiciAvPiBteSBuYW1lIGlzIDxiciAvPjxzcGFuPkZlbGlwZTwvc3Bhbj48L2gyPlxuICAgICAgPGgxPlxuICAgICAgICBJIGRldmVsb3Agc29sdXRpb25zXG4gICAgICA8L2gxPlxuICAgICAgPHA+SSdtIGEgZ3V5IHdobyBsb3ZlcyB3b3JraW5nIHdpdGggY2hhbGxlbmdpbmcgYW5kIGNyZWF0aXZlIHByb2plY3RzLiBcbiAgICAgICAgSSBsb3ZlIHRvIGRldmVsb3Agc29sdXRpb25zIHRocm91Z2ggdGVjaG5vbG9neSBhbmQgcG9zaXRpdmVseSBpbXBhY3QgcGVvcGxlLCBcbiAgICAgICAgSSBhbSBpbiBjb25zdGFudCBzZWFyY2ggZm9yIGJlc3QgcHJhY3RpY2VzIGFuZCBhbHNvIHRyeWluZyBuZXcgdGhpbmdzLlxuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvbj5HZXQgaW4gVG91Y2g8L2J1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Welcome/index.tsx\n");

/***/ }),

/***/ "./src/components/Welcome/styles.ts":
/*!******************************************!*\
  !*** ./src/components/Welcome/styles.ts ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 20px 100px;\n  color: ${props => props.theme.colors.text};\n\n  > h2 {\n    font-family: 'Poppins', sans-serif;\n    font-size: 22px;\n    font-weight: 400;\n    line-height: 30px;\n    margin-bottom: -25px;\n\n    > span {\n      color: #00adb5;\n    }\n  }\n\n  > h1 {\n    font-family: 'Poppins', sans-serif;\n    font-size: 74px;\n    line-height: 85px;\n    font-weight: 900;\n  }\n\n  > p {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 18px;\n    opacity: .8;\n    width: 520px;\n  }\n\n  button {\n    border: 2px solid #00adb5;\n    background-color: transparent;\n    color: ${props => props.theme.colors.primary};\n    padding: 12px 40px;\n    font-size: 16px;\n    margin-top: 20px;\n    border-radius: 20px;\n    transition: all 500ms ease;\n    text-transform: uppercase;\n    font-size: 12px;\n    letter-spacing: 3.5px;\n    font-weight: 600;\n  }\n\n  button:hover {\n    background-color: ${props => props.theme.colors.primary};\n    color: ${props => props.theme.colors.text};\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWxjb21lL3N0eWxlcy50cz9lNGZkIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBLFdBQVdDLEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYUgsS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsT0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0JKLEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE9BQVE7QUFDM0QsYUFBYUosS0FBSyxJQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBSztBQUM3QztBQUNBLENBakRPIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvV2VsY29tZS9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweCAxMDBweDtcbiAgY29sb3I6ICR7cHJvcHM9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG5cbiAgPiBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMjVweDtcblxuICAgID4gc3BhbiB7XG4gICAgICBjb2xvcjogIzAwYWRiNTtcbiAgICB9XG4gIH1cblxuICA+IGgxIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNzRweDtcbiAgICBsaW5lLWhlaWdodDogODVweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICB9XG5cbiAgPiBwIHtcbiAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgd2lkdGg6IDUyMHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBhZGI1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIHBhZGRpbmc6IDEycHggNDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzLjVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGNvbG9yOiAke3Byb3BzPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Welcome/styles.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.tsx\");\nvar _jsxFileName = \"/home/felipe/Desktop/next-website/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Home() {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FBTyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gPExheW91dCAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiPzQ4OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ai\n");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiPzEyNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bi\n");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiP2FhNzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bs\n");

/***/ }),

/***/ "react-icons/di":
/*!*********************************!*\
  !*** external "react-icons/di" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/di\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9kaVwiPzYyYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9kaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/di\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiP2M0NmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fi\n");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/go\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9nb1wiPzMxOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/go\n");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiPzc0NTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/io\n");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io5\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pbzVcIj9hZTMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zL2lvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvNVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/io5\n");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiP2YzZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/md\n");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/si\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9zaVwiP2M0OTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvc2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9zaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/si\n");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-switch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIj84NTVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-switch\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });