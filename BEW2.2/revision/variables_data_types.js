// String
const someWords = "This is a string data type, 1234"

const anotherWord = ", Add me up with someWords"

const concetenatedWord = someWords + anotherWord

console.log(concetenatedWord)

// Numbers
const number1 = 10
const number2 = 30

// These numbers have a numeric value that can be added up
const total = number1 + number2
console.log(total)

// Do not mistake this with a string of numbers
const stringNumber = "10"
const anotherStringNumber = "20"
// If you add these 2 up, it's gonna be 1020
const newNumber = stringNumber + anotherStringNumber

console.log(newNumber) // 1020

// What happens if you add a number data type with a string
const aNumber = 50
const aString = "50"

const numberWithString = aNumber + aString
console.log(numberWithString)
// It will be converted into a string

// What if you add 2 numbers first, then only add the string
const aNewNumber = 60
const NewNumberWithString = aNumber + aNewNumber + aString
console.log(NewNumberWithString)

// Boolean
const aBool = true
const anotherBool = false
// Booleans are commoly used for if-else statements
if(true){
    // Do something
}else{
    // Do something else
}

// Mini-exercise
// How do you use a false statement,but still trigger the codes in if block
ig(!false){
    // Do something
}else{
    // Do something else
}