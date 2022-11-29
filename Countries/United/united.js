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
console.log(countries)
var countriesUnited = []

for(let i = 0; i < countries.length; i++) { 
   if (countries[i].includes("United")) {
       countriesUnited.push(countries[i]);
   }}
console.log("All the countries containing United are " + countriesUnited)