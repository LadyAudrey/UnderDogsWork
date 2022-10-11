// Program to find all the words containing B and X, that are less than 5 letters long
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
let xyz = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("X") && words[i].includes("Y") && words[i].includes("Z")) {
        xyz.push(words[i]);}}


console.log("All the words containing an X, a Y and a Z are " + xyz)