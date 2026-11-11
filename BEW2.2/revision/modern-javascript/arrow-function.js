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