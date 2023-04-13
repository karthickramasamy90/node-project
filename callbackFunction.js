const fs = require("fs");

// Example 1
function main(callback) {
    console.log("Main Function executed");

    callback();
}

function callbackFunction() {
    console.log("Callback Function Executed")
}
main(callbackFunction);
// End //


// Example 2
function f1(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

function sumCallbackFunc(value) {
    console.log(`Sum Value is: ${value}`)
}
f1(3, 5, sumCallbackFunc);
// End //

// Example 3
let fileData = fs.readFileSync('textfile.txt');

fs.readFile('textfile.txt', function (err, filedata) {
    if(err) return console.log(err)
    console.log(filedata.toString());
})

// console.log(fileData.toString());
console.log("End of Program execution")

// End //
