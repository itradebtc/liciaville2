(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/gallery/Home.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "close": "Home-module__4lwfLa__close",
  "container": "Home-module__4lwfLa__container",
  "gallery": "Home-module__4lwfLa__gallery",
  "grid": "Home-module__4lwfLa__grid",
  "imageContainer": "Home-module__4lwfLa__imageContainer",
  "main": "Home-module__4lwfLa__main",
  "modal": "Home-module__4lwfLa__modal",
  "modalOverlay": "Home-module__4lwfLa__modalOverlay",
  "title": "Home-module__4lwfLa__title",
});
}}),
"[project]/src/app/gallery/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/gallery/Home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const images = [
    'https://github.com/itradebtc/liciaimages/blob/main/licia1.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia10.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia11.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia15.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia17.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia18.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia19.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia2.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia20.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia21.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia22.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia24.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia26.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia27.png?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia3.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia31.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia4.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia6.JPG?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia7.jpg?raw=true',
    'https://github.com/itradebtc/liciaimages/blob/main/licia8.JPG?raw=true'
];
function Page() {
    _s();
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleImageClick = (image)=>{
        setSelectedImage(image);
    };
    const handleCloseModal = ()=>{
        setSelectedImage(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Hotel Gallery"
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: images.map((image, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                src: image,
                                alt: `Hotel Image ${i + 1}`,
                                onClick: ()=>handleImageClick(image)
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.jsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/app/gallery/page.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay} onClick={handleCloseModal} z-50`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close,
                                onClick: handleCloseModal,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.jsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                src: selectedImage,
                                alt: "Enlarged"
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.jsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/gallery/page.jsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.jsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gallery/page.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/gallery/page.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Page, "gNHFCSJ3h3sH8HFrpxN7hUqoxHs=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_gallery_f25ca029._.js.map