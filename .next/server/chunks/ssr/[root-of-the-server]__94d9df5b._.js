module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/components/ProductCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function ProductCard({ product }) {
    const maxStars = 5;
    const rating = product.rating;
    const getStarIcon = (index)=>{
        if (index + 1 <= Math.floor(rating)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"], {
                className: "text-[#FFC633]"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ProductCard.js",
                lineNumber: 9,
                columnNumber: 20
            }, this);
        } else if (index < rating && rating % 1 >= 0.5) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStarHalfAlt"], {
                className: "text-[#FFC633]"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ProductCard.js",
                lineNumber: 11,
                columnNumber: 20
            }, this);
        } else {
            return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[295px] h-[298px] rounded-3xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: product.pictures[0],
                    alt: product.name,
                    className: "w-full "
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ProductCard.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ProductCard.js",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 ml-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ProductCard.js",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mt-1 gap-1",
                        children: [
                            [
                                ...Array(maxStars)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: getStarIcon(i)
                                }, i, false, {
                                    fileName: "[project]/src/app/components/ProductCard.js",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-sm",
                                children: [
                                    product.rating,
                                    "/5"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ProductCard.js",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ProductCard.js",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    product.discount === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 font-bold text-lg",
                        children: [
                            "$",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ProductCard.js",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-bold text-lg",
                                children: [
                                    "$",
                                    (product.price * (1 - product.discount / 100)).toFixed(0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ProductCard.js",
                                lineNumber: 34,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-bold text-lg line-through text-gray-500",
                                children: [
                                    "$",
                                    product.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ProductCard.js",
                                lineNumber: 35,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-[#FF3333] bg-[#ffebeb] py-1 px-3 rounded-2xl",
                                children: [
                                    "-",
                                    product.discount,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ProductCard.js",
                                lineNumber: 36,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ProductCard.js",
                        lineNumber: 33,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ProductCard.js",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ProductCard.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/Home/NewArrivals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewArrivals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ProductCard.js [app-ssr] (ecmascript)");
"use client";
;
;
function NewArrivals({ products }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold text-center my-10",
                children: "NEW ARRIVALS"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/NewArrivals.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 items-center justify-center",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/src/app/components/Home/NewArrivals.js",
                        lineNumber: 10,
                        columnNumber: 21
                    }, this)).slice(0, 4)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/NewArrivals.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center my-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>console.log("View All Clicked"),
                    className: "py-3 px-15 rounded-3xl border border-gray-300 bg-white",
                    children: "View All"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/NewArrivals.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/NewArrivals.js",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/NewArrivals.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/Home/TopSelling.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopSelling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ProductCard.js [app-ssr] (ecmascript)");
"use client";
;
;
function TopSelling({ products }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold text-center my-10",
                children: "TOP SELLING"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/TopSelling.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 items-center justify-center",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProductCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/src/app/components/Home/TopSelling.js",
                        lineNumber: 10,
                        columnNumber: 21
                    }, this)).slice(5, 9)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/TopSelling.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center my-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>console.log("View All Clicked"),
                    className: "py-3 px-15 rounded-3xl border border-gray-300 bg-white",
                    children: "View All"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/TopSelling.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/TopSelling.js",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/TopSelling.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products,
    "reviews",
    ()=>reviews
]);
const products = [
    {
        id: "SP001",
        name: "One Life Graphic T-shirt",
        rating: 4.5,
        price: 300,
        discount: 40,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p15.png",
            "/products/p1.png",
            "/products/p2.png",
            "/products/p3.png"
        ]
    },
    {
        id: "SP002",
        name: "Gradient Graphic T-shirt",
        rating: 3.5,
        price: 140,
        discount: 0,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p4.png"
        ]
    },
    {
        id: "SP003",
        name: "Polo with Tipping Details",
        rating: 4.5,
        price: 180,
        discount: 0,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p5.png"
        ]
    },
    {
        id: "SP004",
        name: "Black Striped T-shirt",
        rating: 5,
        price: 150,
        discount: 30,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p9.png"
        ]
    },
    {
        id: "SP005",
        name: "Skinny Fit Jeans",
        rating: 3.5,
        price: 260,
        discount: 20,
        category: "Jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p6.png"
        ]
    },
    {
        id: "SP006",
        name: "Checkered Shirt",
        rating: 4.5,
        price: 180,
        discount: 0,
        category: "Shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p7.png"
        ]
    },
    {
        id: "SP007",
        name: "Sleeve Striped T-shirt",
        rating: 4.5,
        price: 160,
        discount: 30,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p8.png"
        ]
    },
    {
        id: "SP008",
        name: "Vertical Striped Shirt",
        rating: 5,
        price: 232,
        discount: 20,
        category: "Shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p10.png"
        ]
    },
    {
        id: "SP009",
        name: "Vertical Striped Shirt",
        rating: 4,
        price: 145,
        discount: 0,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p11.png"
        ]
    },
    {
        id: "SP0010",
        name: "Vertical Striped Shirt",
        rating: 3,
        price: 80,
        discount: 0,
        category: "Shorts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p12.png"
        ]
    },
    {
        id: "SP0011",
        name: "Polo with Contrast Trims",
        rating: 4,
        price: 242,
        discount: 20,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p13.png"
        ]
    },
    {
        id: "SP0012",
        name: "T-shirt With Tape Details",
        rating: 4.5,
        price: 120,
        discount: 0,
        category: "T-shirts",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color: [
            "#4F4631",
            "#314F4A",
            "#31344F"
        ],
        size: [
            "Small",
            "Medium",
            "Large",
            "X-Large"
        ],
        pictures: [
            "/products/p14.png"
        ]
    }
];
const reviews = [
    {
        product_id: "SP001",
        reviews: [
            {
                id: "RV001",
                name: "Samantha D.",
                rating: 4.5,
                review: "I absolutely love this t - shirt! The design is unique and the fabric feels so comfortable.As a fellow designer, I appreciate the attention to detail.It's become my favorite go-to shirt.",
                create_at: "August 14, 2023"
            },
            {
                id: "RV002",
                name: "Alex M.",
                rating: 4,
                review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
                create_at: "August 15, 2023"
            },
            {
                id: "RV003",
                name: "Ethan R.",
                rating: 3.5,
                review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
                create_at: "August 16, 2023"
            },
            {
                id: "RV004",
                name: "Olivia P.",
                rating: 4,
                review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
                create_at: "August 17, 2023"
            },
            {
                id: "RV005",
                name: "Liam K.",
                rating: 4,
                review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
                create_at: "August 18, 2023"
            },
            {
                id: "RV006",
                name: "Ava H.",
                rating: 4.5,
                review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
                create_at: "August 19, 2023"
            }
        ]
    }
] // eslint-disable-next-line import/no-anonymous-default-export
 // export default { products, reviews }
;
}),
"[project]/src/app/components/Home/HappyCustomer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HappyCustomer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.js [app-ssr] (ecmascript)");
"use client";
;
;
function HappyCustomer({ reviews }) {
    console.log(reviews);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[70%] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-extrabold",
                    children: "OUR HAPPY CUSTOMERS"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/HappyCustomer.js",
                    lineNumber: 9,
                    columnNumber: 17
                }, this),
                reviews.reviews.map((rv)=>{
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: rv.rating
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/HappyCustomer.js",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: rv.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/HappyCustomer.js",
                                lineNumber: 13,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: rv.review
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/HappyCustomer.js",
                                lineNumber: 14,
                                columnNumber: 25
                            }, this)
                        ]
                    }, rv.id, true, {
                        fileName: "[project]/src/app/components/Home/HappyCustomer.js",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/HappyCustomer.js",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/HappyCustomer.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__94d9df5b._.js.map