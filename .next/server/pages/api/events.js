"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "(api)/./pages/api/events.js":
/*!*****************************!*\
  !*** ./pages/api/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    const events_url = 'https://gdsc.community.dev/gayatri-vidya-parishad-college-of-engineering-visakhapatnam/';\n    try {\n        const { data , status  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(events_url);\n        if (status === 200) {\n            const html = data;\n            const $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default().load(html);\n            const images = $('.event-image').get().map((el)=>el.attribs.src\n            );\n            // console.log('imgs', images);\n            const extractInnerHTML = (el)=>el.children[0].data.trim()\n            ;\n            const types = $('.vertical-box--event-type').get().map(extractInnerHTML);\n            console.log('types', types);\n            const titles = $('.vertical-box--event-title').get().map(extractInnerHTML);\n            console.log('titles', titles);\n            const dates = $('.vertical-box--event-date').get().map(extractInnerHTML);\n            console.log('dates', dates);\n            const urls = $('a.vertical-box-container').get().map((el)=>el.attribs.href.trim()\n            );\n            console.log('urls', urls);\n            const rawData = {\n                images,\n                types,\n                titles,\n                dates,\n                urls\n            };\n            const events = [];\n            for(let i in rawData.images){\n                events.push({\n                    image: rawData.images[i],\n                    type: rawData.types[i],\n                    title: rawData.titles[i],\n                    date: rawData.dates[i],\n                    url: rawData.urls[i]\n                });\n            }\n            res.status(200).json(events);\n        }\n    } catch (error) {\n        console.error('Error', error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS8uL3BhZ2VzL2FwaS9ldmVudHMuanM/MjcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBldmVudHNfdXJsID0gJ2h0dHBzOi8vZ2RzYy5jb21tdW5pdHkuZGV2L2dheWF0cmktdmlkeWEtcGFyaXNoYWQtY29sbGVnZS1vZi1lbmdpbmVlcmluZy12aXNha2hhcGF0bmFtLyc7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLmdldChldmVudHNfdXJsKVxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGRhdGE7XG4gICAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGh0bWwpO1xuICAgICAgY29uc3QgaW1hZ2VzID0gJCgnLmV2ZW50LWltYWdlJykuZ2V0KCkubWFwKGVsID0+IGVsLmF0dHJpYnMuc3JjKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWdzJywgaW1hZ2VzKTtcbiAgICAgIGNvbnN0IGV4dHJhY3RJbm5lckhUTUwgPSBlbCA9PiBlbC5jaGlsZHJlblswXS5kYXRhLnRyaW0oKTtcbiAgICAgIGNvbnN0IHR5cGVzID0gJCgnLnZlcnRpY2FsLWJveC0tZXZlbnQtdHlwZScpLmdldCgpLm1hcChleHRyYWN0SW5uZXJIVE1MKTtcbiAgICAgIGNvbnNvbGUubG9nKCd0eXBlcycsIHR5cGVzKTtcbiAgICAgIGNvbnN0IHRpdGxlcyA9ICQoJy52ZXJ0aWNhbC1ib3gtLWV2ZW50LXRpdGxlJykuZ2V0KCkubWFwKGV4dHJhY3RJbm5lckhUTUwpO1xuICAgICAgY29uc29sZS5sb2coJ3RpdGxlcycsIHRpdGxlcyk7XG4gICAgICBjb25zdCBkYXRlcyA9ICQoJy52ZXJ0aWNhbC1ib3gtLWV2ZW50LWRhdGUnKS5nZXQoKS5tYXAoZXh0cmFjdElubmVySFRNTCk7XG4gICAgICBjb25zb2xlLmxvZygnZGF0ZXMnLCBkYXRlcyk7XG4gICAgICBjb25zdCB1cmxzID0gJCgnYS52ZXJ0aWNhbC1ib3gtY29udGFpbmVyJykuZ2V0KCkubWFwKGVsID0+IGVsLmF0dHJpYnMuaHJlZi50cmltKCkpO1xuICAgICAgY29uc29sZS5sb2coJ3VybHMnLCB1cmxzKTtcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSB7IGltYWdlcywgdHlwZXMsIHRpdGxlcywgZGF0ZXMsIHVybHMgfTtcblxuICAgICAgY29uc3QgZXZlbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpIGluIHJhd0RhdGEuaW1hZ2VzKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICBpbWFnZTogcmF3RGF0YS5pbWFnZXNbaV0sXG4gICAgICAgICAgdHlwZTogcmF3RGF0YS50eXBlc1tpXSxcbiAgICAgICAgICB0aXRsZTogcmF3RGF0YS50aXRsZXNbaV0sXG4gICAgICAgICAgZGF0ZTogcmF3RGF0YS5kYXRlc1tpXSxcbiAgICAgICAgICB1cmw6IHJhd0RhdGEudXJsc1tpXSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGV2ZW50cylcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImNoZWVyaW8iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXZlbnRzX3VybCIsImRhdGEiLCJzdGF0dXMiLCJnZXQiLCJodG1sIiwiJCIsImxvYWQiLCJpbWFnZXMiLCJtYXAiLCJlbCIsImF0dHJpYnMiLCJzcmMiLCJleHRyYWN0SW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJ0cmltIiwidHlwZXMiLCJjb25zb2xlIiwibG9nIiwidGl0bGVzIiwiZGF0ZXMiLCJ1cmxzIiwiaHJlZiIsInJhd0RhdGEiLCJldmVudHMiLCJpIiwicHVzaCIsImltYWdlIiwidHlwZSIsInRpdGxlIiwiZGF0ZSIsInVybCIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/events.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events.js"));
module.exports = __webpack_exports__;

})();