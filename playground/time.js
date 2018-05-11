var moment = require("moment");

/*
var date = moment();
date.add(2, "years").subtract(5, "years");
console.log(date.format("MMM Do, YYYY"))
*/

var date = moment(2000);
console.log(date.format("h:mm a"));
