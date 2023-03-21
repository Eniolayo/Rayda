(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 755:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__IBM_Plex_Sans_f23c00', '__IBM_Plex_Sans_Fallback_f23c00', Helvetica, Arial, sans-serif","fontStyle":"normal"},
	"className": "__className_f23c00"
};


/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ featuredItemApi),
  "k": () => (/* binding */ useGetFeaturedItemsQuery)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit/query/react"
const react_namespaceObject = require("@reduxjs/toolkit/query/react");
;// CONCATENATED MODULE: ./src/features/featuredItemApi.js

const featuredItemApi = (0,react_namespaceObject.createApi)({
    reducerPath: "featuredItemApi",
    baseQuery: (0,react_namespaceObject.fetchBaseQuery)({
        baseUrl: "https://run.mocky.io/v3/"
    }),
    endpoints: (builder)=>({
            getFeaturedItems: builder.query({
                query: ()=>({
                        url: `7f02819f-8254-410a-b8af-ab98572bd26b`
                    }),
                transformResponse: (response)=>response.data
            })
        })
});
const { useGetFeaturedItemsQuery  } = featuredItemApi;


/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/theme/index.js","import":"IBM_Plex_Sans","arguments":[{"subsets":["latin"],"weight":["300","400","500","600","700"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"IBMPlexSans"}
var index_js_import_IBM_Plex_Sans_arguments_subsets_latin_weight_300_400_500_600_700_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_IBMPlexSans_ = __webpack_require__(755);
var index_js_import_IBM_Plex_Sans_arguments_subsets_latin_weight_300_400_500_600_700_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_IBMPlexSans_default = /*#__PURE__*/__webpack_require__.n(index_js_import_IBM_Plex_Sans_arguments_subsets_latin_weight_300_400_500_600_700_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_IBMPlexSans_);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/theme/index.js



// Create a theme instance.
const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: colors_namespaceObject.red.A400
        },
        gray: {
            100: "#98A2B3",
            200: "#475467",
            300: "#EAECF0",
            400: "#D0D5DD",
            600: "#475467",
            700: "#344054",
            900: "#101828"
        },
        warning: {
            50: "#FFFAEB",
            500: "#F79009",
            700: "#B54708"
        }
    },
    typography: {
        fontFamily: (index_js_import_IBM_Plex_Sans_arguments_subsets_latin_weight_300_400_500_600_700_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_IBMPlexSans_default()).style.fontFamily
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 300,
            sm: 600,
            m: 700,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
});
/* harmony default export */ const src_theme = (theme); /*
box-shadow: 0px 1px 2px 0px #1018280F;

box-shadow: 0px 1px 3px 0px #1018281A;

*/ 

;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "@reduxjs/toolkit/query"
const query_namespaceObject = require("@reduxjs/toolkit/query");
// EXTERNAL MODULE: ./src/features/featuredItemApi.js + 1 modules
var featuredItemApi = __webpack_require__(81);
;// CONCATENATED MODULE: ./src/store/index.js



const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        [featuredItemApi/* featuredItemApi.reducerPath */.L.reducerPath]: featuredItemApi/* featuredItemApi.reducer */.L.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(featuredItemApi/* featuredItemApi.middleware */.L.middleware)
});
(0,query_namespaceObject.setupListeners)(store.dispatch);

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./src/pages/_app.js










function App(props) {
    const { Component , pageProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Rayda Assessment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
                theme: src_theme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(226));
module.exports = __webpack_exports__;

})();