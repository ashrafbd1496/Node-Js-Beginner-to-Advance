//console.log(global);
// setTimeout(() => {
//   console.log("Node js setTimeout!");
// }, 1000);
/*
console.log(__dirname);
const _ = require("lodash");
const people = ["Ashraf", "jahid", "Lois", "fahim"];
//console.log(_.toUpper(people));
*/
//assert
/*
var assert = require('assert');
console.log(assert(8 > 7));
*/

/*dns
var dns = require('dns');
var w3 = dns.lookup('ashrafbd.com', function (err, addresses, family) {
  console.log(addresses);
});
*/
/*readline 
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('index.js')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
*/

const os = require('os');
console.log(os.homedir());
