(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 6969:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetUpDetail_detail__tECv5"
};


/***/ }),

/***/ 8899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/meetups/MeetUpDetail.module.css
var MeetUpDetail_module = __webpack_require__(6969);
var MeetUpDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetUpDetail_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/meetups/MeetUpDetail.js




const MeetUpDetail = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (MeetUpDetail_module_default()).detail,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("address", {
                        children: props.address
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.description
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const meetups_MeetUpDetail = (MeetUpDetail);

// EXTERNAL MODULE: ./components/layout/Layout.js + 1 modules
var Layout = __webpack_require__(3843);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js





const MeetUpDetails = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetUpDetail, {
            image: props.image,
            title: props.title,
            address: props.address,
            description: props.description
        })
    }));
};
const getStaticProps = async (context)=>{
    const meetupId = new external_mongodb_.ObjectId(context.params.meetupId);
    //console.log(meetupId)
    //console.log('type of meetupid is', typeof meetupId)
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://JadeTest:passward@cluster0.mxpzd.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({
        _id: meetupId
    });
    const data = JSON.parse(selectedMeetup.data);
    //console.log('get ', data)
    return {
        props: {
            // meetupData: selectedMeetup
            // meetupData:data
            image: data.image,
            title: data.title,
            address: data.address,
            description: data.description
        }
    };
};
async function getStaticPaths() {
    //
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://JadeTest:passward@cluster0.mxpzd.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    return {
        fallback: false,
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            })
        )
    };
}
/* harmony default export */ const _meetupId_ = (MeetUpDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,843], () => (__webpack_exec__(8899)));
module.exports = __webpack_exports__;

})();