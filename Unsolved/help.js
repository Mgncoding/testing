// Requires
require("dotenv").config();
var axios = require("axios");
// const keys = require("./keys.js");
// const carmd = new carMD(keys.carMd)

// Parameters we are pulling from CarMD
// var message = $("#message-text");
vinNum = process.argv[2]; //$("vin-input");
mileage = process.argv.slice(3).join(); //0;
// year = 0;
// make = $("#make-input");
// model = $("#model-input");
repair = [{}]; //Array of objects in the repair data array
parts = [{}]; //Array of objects in the parts data array
// dropDownCatagories = $("#dropdown-catagories")
// function carMD(vin, miles) {
// URL for CarMD
var queryURL =
  "http://api2.carmd.com/v3.0/maint?vin=" + vinNum + "&mileage=" + mileage;
// Ajax call 'GET'
axios
  .get({
    url: queryURL,
    headers: {
      "Content-Type": "application/json",
      authorization: "Basic YjEzN2NlZWMtM2E5OS00MjVkLTg3NTktZWQ5Y2Q2NTNmMDg5",
      "partner-token": "0b515ac66a9246af95901cf07d9a47a1"
    }
  })
  .then(function(data) {
    console.log(data);
    console.log(queryURL);
    console.log(vinNum);
    console.log(mileage);
  });

// we can use /maint for maintenance required or /repair for needed repairs
// }
