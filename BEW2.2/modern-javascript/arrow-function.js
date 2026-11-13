// Arrow function syntax
const multiply = (a, b) => a * b  //always use const

// Traditional function syntax
function traditionalMultiply(a, b){
    return a * b
}

// Display all fruits from an argument
const displayAll = (arr) => {
    for (item of arr){
        console.log(item)
    }
}

const phones = ["iPhone","Samsung","Oppo"]
displayAll(phones)

const convertCMtoM = (cm) => {
    const m = cm / 100
    return m
}

const lengthOfCarInCm = 300
console.log(convertCMtoM(lengthOfCarInCm))

const lengthOfCarInM = convertCMtoM(lengthOfCarInCm)
const lengthOfLongCarInM = convertCMtoM(500)
console.log(lengthOfCarInM)
console.log(lengthOfLongCarInM)

//  Write an arrow function that converts kgs to lbs,then returns
//  the result

const convertKgsToLbs = (kgs) => {
    const lbs = kgs * 2.20
    return lbs
}

const weightInKgs = 70
const weightInLbs = convertKgsToLbs(weightInKgs)
console.log(weightInLbs)

// Arrow function in callbacks
// What are the callbacks?
// Example of callbacks

// .filter, .map, .reduce -> Array method to do specific actions
// .filter -> is to find only the element that fit the specified critiria
// .map -> is essentially behaves like a for...of loop but simpler
// it will also create a new array
// .reduce -> used for calculating total / accumulation of value

const list = [2,4,6,8]
// This is the callback
const list2 = list.filter(num => num > 5)
console.log(list2) // [6,8]

// This is the callback
const listMultiplied = list.map(num => num * 2)
console.log(listMultiplied)

// Example without arrow function in callback
const listSquared = list.map(function(num){
    return num * num
})
console.log(listSquared)

const sum = list.reduce((total, num) => total + num, 0)
console.log(`The result of .reduce is ${sum}`)

// I want a product of the array using .reduce method, in arrow function format

const product = list.reduce((prod, num) => prod * num, 1)
console.log(`The result of .reduce is ${product}`)



