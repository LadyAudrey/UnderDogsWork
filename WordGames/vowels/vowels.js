// Program to find all the words
// that have all the vowels
// a list of words that have all the vowels in alphabetical order
// what the longest word with all the vowels

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
vowels = []
let aeiou = []
let aeiou_Alph = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("A") && words[i].includes("E") && words[i].includes("I") && words[i].includes("O") && words[i].includes("U")) {
        aeiou.push(words[i])
    }
}

console.log("All the words that have all 5 vowels are" + aeiou)

for(let j = 0; j < aeiou.length; j++) {
    let a = (aeiou[j].indexOf('A'));
    let e = (aeiou[j].indexOf('E'));
    let i = (aeiou[j].indexOf('I'));
    let o = (aeiou[j].indexOf('O'));
    let u = (aeiou[j].indexOf('U'));
    if (a < e) {
        if (e < i) {
            if (i < o) {
                if (o < u) {
                    aeiou_Alph.push(aeiou[j]);
                }
            }
        }
    }
}

// Find the shortest the shortest word with all the vowels
let shortestAllVowels = "VERACIOUSNESSES";
for (let j = 0; j < aeiou.length; j++) {
    shortest = shortestAllVowels.length
    test = aeiou[j].length
    if (test < shortest)  {
        shortestAllVowels = aeiou[j]
    }
}

console.log("All words containing the vowels alphabetically are " + aeiou_Alph)
console.log("The shortest word with all the vowels is " + shortestAllVowels)
