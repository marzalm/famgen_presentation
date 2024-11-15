(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 86635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23004)), "C:\\Users\\Marius\\OneDrive\\Bureau\\famgen\\src\\app\\page.jsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45004)), "C:\\Users\\Marius\\OneDrive\\Bureau\\famgen\\src\\app\\layout.jsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\Marius\\OneDrive\\Bureau\\famgen\\src\\app\\page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 79128:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 73812:
/***/ (() => {



/***/ }),

/***/ 96771:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82606))

/***/ }),

/***/ 82606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-circle.mjs
var arrow_down_circle = __webpack_require__(99760);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-circle.mjs
var arrow_up_circle = __webpack_require__(86780);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.mjs
var menu = __webpack_require__(76624);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(95833);
// EXTERNAL MODULE: ./node_modules/recharts/lib/index.js
var lib = __webpack_require__(48472);
;// CONCATENATED MODULE: ./src/components/SurveyPresentation.jsx







const COLORS = {
    blue: "#4169E1",
    green: "#32CD32",
    pink: "#FF69B4"
};
const SurveyPresentation = ()=>{
    const [activeSlide, setActiveSlide] = (0,react_.useState)(0);
    const [menuOpen, setMenuOpen] = (0,react_.useState)(false);
    const slidesRef = (0,react_.useRef)([]);
    const chartData = {
        couples: [
            {
                age: "25-34",
                femmes: 75,
                hommes: 58
            },
            {
                age: "35-44",
                femmes: 81,
                hommes: 76
            },
            {
                age: "45-54",
                femmes: 78,
                hommes: 83
            },
            {
                age: "55-64",
                femmes: 71,
                hommes: 79
            },
            {
                age: "65-80",
                femmes: 51,
                hommes: 76
            }
        ],
        ageGap: [
            {
                name: "Homme plus \xe2g\xe9",
                value: 54
            },
            {
                name: "M\xeame \xe2ge",
                value: 31
            },
            {
                name: "Femme plus \xe2g\xe9e",
                value: 15
            }
        ],
        meeting: [
            {
                mode: "Applications/sites",
                "Avant 2013": 5,
                "2013-2018": 15,
                "2019-2023": 26
            },
            {
                mode: "Amis/connaissances",
                "Avant 2013": 25,
                "2013-2018": 25,
                "2019-2023": 26
            },
            {
                mode: "\xc9cole/travail",
                "Avant 2013": 23,
                "2013-2018": 21,
                "2019-2023": 19
            },
            {
                mode: "Bars/discoth\xe8ques",
                "Avant 2013": 17,
                "2013-2018": 13,
                "2019-2023": 9
            }
        ]
    };
    const sections = [
        {
            title: "Enqu\xeate sur les familles et les g\xe9n\xe9rations 2023",
            subtitle: "R\xe9sultats pour le canton de Gen\xe8ve",
            content: "Cette enqu\xeate quinquennale fournit des r\xe9sultats sur l'\xe9tat actuel et l'\xe9volution des familles.",
            icon: "\uD83D\uDCCA"
        },
        {
            title: "Les couples par \xe2ge et sexe",
            subtitle: "Proportion des personnes en couple",
            content: "\xc0 Gen\xe8ve, 68% des individus \xe2g\xe9s de 18 \xe0 80 ans sont en couple. Les femmes \xe2g\xe9es de 35 \xe0 44 ans sont celles qui sont le plus souvent en couple (81%).",
            chart: /*#__PURE__*/ jsx_runtime_.jsx(lib/* ResponsiveContainer */.h2, {
                width: "100%",
                height: 400,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* LineChart */.wW, {
                    data: chartData.couples,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* CartesianGrid */.q3, {
                            strokeDasharray: "3 3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* XAxis */.Kc, {
                            dataKey: "age"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* YAxis */.B2, {
                            domain: [
                                0,
                                100
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Tooltip */.u, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Legend */.De, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Line */.x1, {
                            type: "monotone",
                            dataKey: "femmes",
                            stroke: COLORS.pink,
                            strokeWidth: 2
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Line */.x1, {
                            type: "monotone",
                            dataKey: "hommes",
                            stroke: COLORS.blue,
                            strokeWidth: 2
                        })
                    ]
                })
            }),
            icon: "\uD83D\uDCC8"
        },
        {
            title: "Diff\xe9rence d'\xe2ge dans les couples",
            subtitle: "R\xe9partition des \xe9carts d'\xe2ge",
            content: "Dans 54% des couples h\xe9t\xe9rosexuels, l'homme est plus \xe2g\xe9 que la femme, tandis que 31% des couples ont des partenaires d'\xe2ge similaire.",
            chart: /*#__PURE__*/ jsx_runtime_.jsx(lib/* ResponsiveContainer */.h2, {
                width: "100%",
                height: 400,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* PieChart */.uc, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Pie */.by, {
                            data: chartData.ageGap,
                            cx: "50%",
                            cy: "50%",
                            labelLine: false,
                            label: ({ name, value })=>`${name} (${value}%)`,
                            outerRadius: 150,
                            fill: "#8884d8",
                            dataKey: "value",
                            children: chartData.ageGap.map((entry, index)=>/*#__PURE__*/ jsx_runtime_.jsx(lib/* Cell */.bL, {
                                    fill: [
                                        COLORS.blue,
                                        COLORS.green,
                                        COLORS.pink
                                    ][index]
                                }, `cell-${index}`))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Tooltip */.u, {})
                    ]
                })
            }),
            icon: "\uD83C\uDFAF"
        },
        {
            title: "Mode de rencontre",
            subtitle: "\xc9volution des moyens de rencontre",
            content: "Les modes de rencontre des couples ont \xe9volu\xe9 au fil du temps. Les applications et sites de rencontre sont devenus aussi importants que les rencontres via les amis et connaissances.",
            chart: /*#__PURE__*/ jsx_runtime_.jsx(lib/* ResponsiveContainer */.h2, {
                width: "100%",
                height: 400,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* BarChart */.vz, {
                    data: chartData.meeting,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* CartesianGrid */.q3, {
                            strokeDasharray: "3 3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* XAxis */.Kc, {
                            dataKey: "mode",
                            angle: -45,
                            textAnchor: "end",
                            height: 100
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* YAxis */.B2, {
                            domain: [
                                0,
                                30
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Tooltip */.u, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Legend */.De, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Bar */.$Q, {
                            dataKey: "Avant 2013",
                            fill: COLORS.green
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Bar */.$Q, {
                            dataKey: "2013-2018",
                            fill: COLORS.blue
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(lib/* Bar */.$Q, {
                            dataKey: "2019-2023",
                            fill: COLORS.pink
                        })
                    ]
                })
            }),
            icon: "\uD83D\uDCF1"
        }
    ];
    (0,react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            slidesRef.current.forEach((slide, index)=>{
                if (slide) {
                    const rect = slide.getBoundingClientRect();
                    if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
                        setActiveSlide(index);
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative min-h-screen bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>setMenuOpen(!menuOpen),
                className: "fixed top-8 right-8 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100",
                children: menuOpen ? /*#__PURE__*/ jsx_runtime_.jsx(x/* default */.Z, {
                    size: 24
                }) : /*#__PURE__*/ jsx_runtime_.jsx(menu/* default */.Z, {
                    size: 24
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed right-0 top-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-8 pt-20",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-lg font-semibold mb-6",
                            children: "Navigation"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-4",
                            children: sections.map((section, index)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>{
                                        slidesRef.current[index].scrollIntoView({
                                            behavior: "smooth"
                                        });
                                        setMenuOpen(false);
                                    },
                                    className: `w-full text-left p-4 rounded-lg ${activeSlide === index ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-2xl mr-3",
                                                children: section.icon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "font-medium",
                                                        children: section.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: section.subtitle
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed right-8 top-1/2 transform -translate-y-1/2 space-y-2 z-30",
                children: sections.map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            slidesRef.current[index].scrollIntoView({
                                behavior: "smooth"
                            });
                        },
                        className: `w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"}`
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4 z-30",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            const prevIndex = Math.max(0, activeSlide - 1);
                            slidesRef.current[prevIndex].scrollIntoView({
                                behavior: "smooth"
                            });
                        },
                        className: `p-2 ${activeSlide === 0 ? "text-gray-300" : "text-gray-600 hover:text-blue-600"}`,
                        disabled: activeSlide === 0,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(arrow_up_circle/* default */.Z, {
                            size: 32
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            const nextIndex = Math.min(sections.length - 1, activeSlide + 1);
                            slidesRef.current[nextIndex].scrollIntoView({
                                behavior: "smooth"
                            });
                        },
                        className: `p-2 ${activeSlide === sections.length - 1 ? "text-gray-300" : "text-gray-600 hover:text-blue-600"}`,
                        disabled: activeSlide === sections.length - 1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(arrow_down_circle/* default */.Z, {
                            size: 32
                        })
                    })
                ]
            }),
            sections.map((section, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: (el)=>slidesRef.current[index] = el,
                    className: "min-h-screen flex items-center justify-center p-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `max-w-5xl w-full bg-white rounded-2xl shadow-xl p-12 transform transition-all duration-1000 ${activeSlide === index ? "opacity-100 translate-y-0" : "opacity-50 translate-y-8"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center space-y-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-6xl",
                                    children: section.icon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-4xl font-bold text-gray-900 mb-2",
                                            children: section.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl text-gray-600",
                                            children: section.subtitle
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-lg text-gray-700 leading-relaxed text-center max-w-2xl",
                                    children: section.content
                                }),
                                section.chart && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full mt-8",
                                    children: section.chart
                                })
                            ]
                        })
                    })
                }, index))
        ]
    });
};
/* harmony default export */ const components_SurveyPresentation = (SurveyPresentation);

;// CONCATENATED MODULE: ./src/app/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_SurveyPresentation, {})
    });
}


/***/ }),

/***/ 45004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82480);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Family Survey Presentation",
    description: "Survey results presentation for Geneva families"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 23004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Marius\OneDrive\Bureau\famgen\src\app\page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [988], () => (__webpack_exec__(86635)));
module.exports = __webpack_exports__;

})();