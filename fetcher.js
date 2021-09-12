const fs = require("fs");
const inputArray = process.argv.slice(2);

const request = require('request');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.writeFile("./index.html", "Downloaded and saved 1235 bytes to ./index.html", (error) => {
  if (error) {
    // Handle error
    console.log("Failed to write to file");
    return;
  }
})
