// Lightning Exercise 1: Given two options of data structures - array or object - which should you use ? You need to represent a red 2015 Ford Mustang in your code.

const car = {
    year: 2015,
    make: "Ford",
    model: "Mustang",
    color: "red",
}

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const shelterAnimals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.


const ryan = {
    name: "Ryan",
    age: 32,
    favoriteDrink: "mocha",
}

const erica = {
    name: "Erica",
    age: 27,
    favoriteDrink: "caramel macchiato",
}

const peter = {
    name: "Peter",
    age: 2,
    favoriteDrink: "water",
}

const baby2 = {
    name: "unkown",
    age: 0,
    favoriteDrink: "milk",
}

const familyMembers = [ryan, erica, peter, baby2]

// START OF BRANCH lightning-exercise-two
// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("The Wardrobe")
console.log("Wardrobe height", wardrobe.height)
console.log("Wardrobe manufacturer", wardrobe.manufacturer)

for (let i = 0; i < wardrobe.contents.length; i++) {
    console.log(`Wardrobe contents item ${i +1}`, wardrobe.contents[i])
}

console.log("Wardrobe depth", wardrobe.depth)
console.log("Wardrobe width", wardrobe.width)

// LIGHTNING 3!!!!
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.



// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.