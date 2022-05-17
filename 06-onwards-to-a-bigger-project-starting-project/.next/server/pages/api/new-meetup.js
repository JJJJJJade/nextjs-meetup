"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js
// don't create react component function
// define functions contains server side code
// because api routes only runs in server never on the client
// /api/new-meetup

const handler = async (req, res)=>{
    // request method = find out which kind of request was sent
    // e.g. only post request will be processed
    if (req.method === 'POST') {
        const data = req.body;
        console.log('post request received by api');
        // const {title, image, address, description} = data
        const client = await external_mongodb_namespaceObject.MongoClient.connect('mongodb+srv://JadeTest:passward@cluster0.mxpzd.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();
        //
        const meetupsCollection = db.collection('meetups');
        // in mongodb document is a js object
        // result is an object
        const result = await meetupsCollection.insertOne({
            data
        });
        // console.log(result)
        client.close();
        return res.status(201).json({
            message: 'Meetup inserted'
        });
    }
};
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5940));
module.exports = __webpack_exports__;

})();