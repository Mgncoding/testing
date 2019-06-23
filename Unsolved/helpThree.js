// Getting my requires.
require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const AUTH_KEY = `Basic ${process.env.CARMD_AUTH_KEY}`;
const PARTNER_TOKEN = process.env.CARMD_PARTNER_TOKEN;

//Getting home page
router.get("/availableFields", function (req, res) {
    const BASEURL = "http://api.carmd.com/v3.0/fields?";
    // console.log(BASEURL)
    let queryURL;
    var year = `year=${req.query.year}&`;
    var make = `make=${req.query.make}&`;
    var model = `model=${req.query.model}&`;
    var mileage = `mileage=${req.query.mileage}`;
    var vin = `vin=${req.query.vin}&`;

    // If statement, User only wants to put in the vin and miles
    if (queryURL = BASEURL + vin + mileage) {
    } else if (
        queryURL = BASEURL + year + make + model + mileage
    );
    console.log(queryURL);
    axios
        .get(queryURL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: AUTH_KEY,
                "Partner-Token": PARTNER_TOKEN
            }
        })
        .then(function (response) {
            // console.log(response.data);
            res.send(response.data.data);
        })
        .catch(function (err) {
            console.log(err.message, "No available fields in this model.")
        });
});
//Route for maintenance features
// router.get("/getMaintenance", function (req, res) {
//     const BASEURL = "http://api.carmd.com/v3.0/maint?";
//     // console.log(BASEURL)
//     let queryURL;
//     var year = `year=${req.query.year}&`;
//     var make = `make=${req.query.make}&`;
//     var model = `model=${req.query.model}&`;
//     var mileage = `mileage=${req.query.mileage}`;
//     var vin = `vin=${req.query.vin}&`;

//     // If statement, User only wants to put in the vin and miles
//     if (queryURL = BASEURL + vin + mileage) {
//     } else if (
//         queryURL = BASEURL + year + make + model + mileage
//     );
//     console.log(queryURL);
//     axios
//         .get(queryURL, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: AUTH_KEY,
//                 "Partner-Token": PARTNER_TOKEN
//             }
//         })
//         .then(function (response) {
//             // console.log(response.data);
//             var maintenanceData = {}
    
//         });