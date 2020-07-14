/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./service.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./util.js\");\n\n\n\nconst loadData = async () => {\n  let houseList\n\n  try {\n    houseList = await Object(_service__WEBPACK_IMPORTED_MODULE_0__[\"getHouses\"])()\n  } catch (error) {\n    console.error('Ocorre um erro ao carregar a lista de casas', error)\n    alert('Ocorre um erro ao carregar as casas, tente novamente mais tarde')\n  }\n\n  return houseList || []\n}\n\nconst mapTemplateHouseCard = ({\n  name,\n  photo,\n  price,\n  property_type\n}) => (`\n  <div class=\"col-md-4\">\n    <div class=\"card mb-4 box-shadow\">\n      <img\n        class=\"card-img-top\"\n        src=\"${photo}\"\n        alt=\"Foto do imóvel ${name}\"\n      >\n      <div class=\"card-body\">\n        <div class=\"card-text\">\n          <p class=\"property-type\">\n            ${property_type}\n          </p>\n          <p class=\"property-name\">\n            ${name}\n          </p>\n          <p class=\"property-price\">\n            ${Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"monetaryFormat\"])(price)}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n`)\n\nconst addCardsToContent = (cardsMapped = []) => {\n  const row = document.querySelector(\".row\")\n\n  row.innerHTML = cardsMapped.join(' ')\n}\n\nconst initPage = async () => {\n  const houseList = await loadData()\n  const houseCardsMapped = houseList.map(mapTemplateHouseCard)\n\n  addCardsToContent(houseCardsMapped)\n}\n\ninitPage()\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./main.scss?");

/***/ }),

/***/ "./service.js":
/*!********************!*\
  !*** ./service.js ***!
  \********************/
/*! exports provided: getHouses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHouses\", function() { return getHouses; });\nconst houseApi = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'\n\nconst getHouses = () => fetch(houseApi)\n  .then(response => response.json())\n\n\n\n\n//# sourceURL=webpack:///./service.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! exports provided: monetaryFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monetaryFormat\", function() { return monetaryFormat; });\nconst monetaryFormat = (\n  value,\n  prefixCurrency = 'R$',\n  decimalPlaces = 2\n) => {\n  const valueFormatted = value\n  .toFixed(decimalPlaces)\n  .replace('.', ',')\n\n\n  return `${prefixCurrency} ${valueFormatted}`\n}\n\n\n\n//# sourceURL=webpack:///./util.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./main.js ./main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./main.js */\"./main.js\");\nmodule.exports = __webpack_require__(/*! ./main.scss */\"./main.scss\");\n\n\n//# sourceURL=webpack:///multi_./main.js_./main.scss?");

/***/ })

/******/ });