/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/preload.js":
/*!************************!*\
  !*** ./src/preload.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// See the Electron documentation for details on how to use preload scripts:\n// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts\nconst {\n  contextBridge,\n  ipcRenderer\n} = __webpack_require__(/*! electron */ \"electron\");\ncontextBridge.exposeInMainWorld('connect', {\n  searchAnime: message => ipcRenderer.invoke('search', message),\n  getDetails: link => ipcRenderer.invoke('get/details', link),\n  downloadAnime: details => ipcRenderer.invoke('download/anime', details),\n  manageFavourite: data => ipcRenderer.invoke(\"manageFavourite\", data)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsTUFBTTtFQUFFQSxhQUFhO0VBQUNDO0FBQVksQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVLENBQUM7QUFFekRGLGFBQWEsQ0FBQ0csaUJBQWlCLENBQUMsU0FBUyxFQUFFO0VBQ3ZDQyxXQUFXLEVBQUdDLE9BQU8sSUFBS0osV0FBVyxDQUFDSyxNQUFNLENBQUMsUUFBUSxFQUFDRCxPQUFPLENBQUM7RUFDOURFLFVBQVUsRUFBR0MsSUFBSSxJQUFJUCxXQUFXLENBQUNLLE1BQU0sQ0FBQyxhQUFhLEVBQUNFLElBQUksQ0FBQztFQUMzREMsYUFBYSxFQUFFQyxPQUFPLElBQUtULFdBQVcsQ0FBQ0ssTUFBTSxDQUFDLGdCQUFnQixFQUFDSSxPQUFPLENBQUM7RUFDdkVDLGVBQWUsRUFBSUMsSUFBSSxJQUFLWCxXQUFXLENBQUNLLE1BQU0sQ0FBQyxpQkFBaUIsRUFBQ00sSUFBSTtBQUN6RSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EYXJrSGFydmVzdC8uL3NyYy9wcmVsb2FkLmpzPzZlNDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VlIHRoZSBFbGVjdHJvbiBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzIG9uIGhvdyB0byB1c2UgcHJlbG9hZCBzY3JpcHRzOlxyXG4vLyBodHRwczovL3d3dy5lbGVjdHJvbmpzLm9yZy9kb2NzL2xhdGVzdC90dXRvcmlhbC9wcm9jZXNzLW1vZGVsI3ByZWxvYWQtc2NyaXB0c1xyXG5jb25zdCB7IGNvbnRleHRCcmlkZ2UsaXBjUmVuZGVyZXIgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJylcclxuXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2Nvbm5lY3QnLCB7XHJcbiAgICBzZWFyY2hBbmltZTogKG1lc3NhZ2UpID0+IGlwY1JlbmRlcmVyLmludm9rZSgnc2VhcmNoJyxtZXNzYWdlKSxcclxuICAgIGdldERldGFpbHM6IChsaW5rKT0+IGlwY1JlbmRlcmVyLmludm9rZSgnZ2V0L2RldGFpbHMnLGxpbmspLFxyXG4gICAgZG93bmxvYWRBbmltZTooZGV0YWlscykgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdkb3dubG9hZC9hbmltZScsZGV0YWlscyksXHJcbiAgICBtYW5hZ2VGYXZvdXJpdGUgOiAoZGF0YSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwibWFuYWdlRmF2b3VyaXRlXCIsZGF0YSlcclxufSkiXSwibmFtZXMiOlsiY29udGV4dEJyaWRnZSIsImlwY1JlbmRlcmVyIiwicmVxdWlyZSIsImV4cG9zZUluTWFpbldvcmxkIiwic2VhcmNoQW5pbWUiLCJtZXNzYWdlIiwiaW52b2tlIiwiZ2V0RGV0YWlscyIsImxpbmsiLCJkb3dubG9hZEFuaW1lIiwiZGV0YWlscyIsIm1hbmFnZUZhdm91cml0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/preload.js\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/preload.js");
/******/ 	
/******/ })()
;