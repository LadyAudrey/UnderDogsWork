// Program to create a list of all countries containing "United"

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

const containsOtherCountry = [];
for (var i = 0; i < countries.length -1; i++) {
   let upperCaseCountry = countries[i].toUpperCase();
   if (upperCaseCountry.includes("UNITED")) {
      containsOtherCountry.push(countries[i]);
   }
}

console.log(containsOtherCountry)