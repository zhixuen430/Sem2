// Variable Scope and definitions

// 2 difference types of scope (technically 3)
// Function Scope
// Block Scope
// Global Scope (By default)

// Keywords to declare a variable
/*
    var - Function Scope
    let - Block Scope
    const - Block Scope
*/

// What is a scope
// Scope is the area of code in which a variable is relevant
// Commonly defined by curly brackets
// Most commonly used by if/else,loops and function

var name = 'Jack';

if(true){
    var name = 'John';
    console.log(name); //John
}

// printName();
console.log(name); //John

// Use block-scope declaration: let and const

let fruit = "Apple"

if(true){
    let fruit = "Banana";
    console.log(fruit)
}

console.log(fruit)

// The difference between var + let vs const = is that const,you cannot reassign the variable
// const car = 'Toyota';
// car = 'Honda'; // uncaught TypeError: Assignment to constant variable

const car = 'Toyota';
if(true){
    const car = 'Honda';
    console.log(car); // Honda
    if(true){
        // const car = "Mazda"
        // console.log(car) // Honda
        const car = "Mazda"
        console.log(car) // Mazda
    }
}
console.log(car); // Toyota

const ball = ["volleyball","basketball","football"]

ball = ["american football"]

ball.push("american football")

console.log(ball)