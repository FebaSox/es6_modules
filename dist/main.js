/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconst form = document.querySelector('form');\r\nconst carMakeInput = document.querySelector(\"#makeInput\");\r\nconst carModelInput = document.querySelector(\"#modelInput\");\r\nconst carYearInput = document.querySelector(\"#yearInput\");\r\nconst carMakeParagraph = document.querySelector(\"#car-make\");\r\nconst carModelParagraph = document.querySelector(\"#car-model\");\r\nconst carYearParagraph = document.querySelector(\"#car-year\");\r\nconst removeButton = document.querySelector(\".removeBtn\");\r\nconst wishlistContainer = document.querySelector(\"ul\");\r\nconst mywishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction showCarDetails(car) {\r\n    carMakeParagraph.textContent = `Make: ${car.make}`;\r\n    carModelParagraph.textContent = `Model: ${car.model}`;\r\n    carYearParagraph.textContent = `Year: ${car.year}`;\r\n    removeButton.disabled = false;\r\n    removeButton.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDOMList () {\r\n    wishlistContainer.innerHTML = \"\";\r\n    mywishList.list.forEach ((car) => {\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = `${car.make}, ${car.model}`\r\n        li.addEventListener(\"click\",() => {\r\n            showCarDetails(car);\r\n\r\n        });\r\n        wishlistContainer.appendChild(li);\r\n    });\r\n    }\r\n\r\n    function addCar (event) {\r\n        event.preventDefault();\r\n        const make = carMakeInput.value;\r\n        const model = carModelInput.value;\r\n        const year = carYearInput.value;\r\n        console.log(make, model, year);\r\n\r\n        if (make && model && year) {\r\n            mywishList.add(make, model, year);\r\n            \r\n            updateDOMList();\r\n            carMakeInput.value = \"\";\r\n            carModelInput.value = \"\";\r\n            carYearInput.value = \"\";\r\n        } else {\r\n            alert(\"Please fill in all fields\");\r\n        }\r\n    }\r\n\r\n    form.addEventListener(\"submit\", addCar);\r\n\r\n    function removeCar() {\r\n        const carId = Number(removeButton.getAttribute(\"data-carId\"));\r\n        mywishList.remove(carId);\r\n\r\n        updateDOMList();\r\n        carMakeParagraph.textContent = \"\";\r\n        carModelParagraph.textContent = \"\";\r\n        carYearParagraph.textContent = \"\";\r\n        removeButton.disabled = true;\r\n    }\r\n    removeButton.addEventListener(\"click\", removeCar);\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\n\r\nclass Wishlist {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextID = 0;\r\n  }\r\n  add(make, model, year) {\r\n    const car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextID, make, model, year);\r\n    this.list.push(car);\r\n  }\r\n  remove(carId) {\r\n    this.list = this.list.filter((car) => car.id !== carId);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wishlist);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;