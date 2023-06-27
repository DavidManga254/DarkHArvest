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

eval("// See the Electron documentation for details on how to use preload scripts:\n// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts\nconst {\n  contextBridge,\n  ipcRenderer\n} = __webpack_require__(/*! electron */ \"electron\");\ncontextBridge.exposeInMainWorld('connect', {\n  searchAnime: message => ipcRenderer.invoke('search', message),\n  getDetails: link => ipcRenderer.invoke('get/details', link),\n  downloadAnime: details => ipcRenderer.invoke('download/anime', details)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsTUFBTTtFQUFFQSxhQUFhO0VBQUNDO0FBQVksQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVLENBQUM7QUFFekRGLGFBQWEsQ0FBQ0csaUJBQWlCLENBQUMsU0FBUyxFQUFFO0VBQ3ZDQyxXQUFXLEVBQUdDLE9BQU8sSUFBS0osV0FBVyxDQUFDSyxNQUFNLENBQUMsUUFBUSxFQUFDRCxPQUFPLENBQUM7RUFDOURFLFVBQVUsRUFBR0MsSUFBSSxJQUFJUCxXQUFXLENBQUNLLE1BQU0sQ0FBQyxhQUFhLEVBQUNFLElBQUksQ0FBQztFQUMzREMsYUFBYSxFQUFFQyxPQUFPLElBQUtULFdBQVcsQ0FBQ0ssTUFBTSxDQUFDLGdCQUFnQixFQUFDSSxPQUFPO0FBQzFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0RhcmtIYXJ2ZXN0Ly4vc3JjL3ByZWxvYWQuanM/NmU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWUgdGhlIEVsZWN0cm9uIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMgb24gaG93IHRvIHVzZSBwcmVsb2FkIHNjcmlwdHM6XHJcbi8vIGh0dHBzOi8vd3d3LmVsZWN0cm9uanMub3JnL2RvY3MvbGF0ZXN0L3R1dG9yaWFsL3Byb2Nlc3MtbW9kZWwjcHJlbG9hZC1zY3JpcHRzXHJcbmNvbnN0IHsgY29udGV4dEJyaWRnZSxpcGNSZW5kZXJlciB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxyXG5cclxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnY29ubmVjdCcsIHtcclxuICAgIHNlYXJjaEFuaW1lOiAobWVzc2FnZSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdzZWFyY2gnLG1lc3NhZ2UpLFxyXG4gICAgZ2V0RGV0YWlsczogKGxpbmspPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdnZXQvZGV0YWlscycsbGluayksXHJcbiAgICBkb3dubG9hZEFuaW1lOihkZXRhaWxzKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoJ2Rvd25sb2FkL2FuaW1lJyxkZXRhaWxzKVxyXG59KSJdLCJuYW1lcyI6WyJjb250ZXh0QnJpZGdlIiwiaXBjUmVuZGVyZXIiLCJyZXF1aXJlIiwiZXhwb3NlSW5NYWluV29ybGQiLCJzZWFyY2hBbmltZSIsIm1lc3NhZ2UiLCJpbnZva2UiLCJnZXREZXRhaWxzIiwibGluayIsImRvd25sb2FkQW5pbWUiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/preload.js\n");

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