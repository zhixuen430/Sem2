const trueStatement = true

if(trueStatement){
    console.log("This statement is true")
}else{
    console.log("This statement is false")
}

// Using Comparison Operators
const marks = 70
const failGrade = 59

if(marks <= failGrade){
    console.log("JENG JENG JENG,you failed")
}else{
    console.log("You passed!")
}
// Write me the if else,but the code blocks for if and else have to be flipped
if(marks > failGrade){
    console.log("You passed!")
}else{
    console.log("You failed!")
}

const otHours = 20
const standardPay = 8
const minimumHours = 40

// Calculate for me the amount of OT pay,if you have OT for more than 15 hours,the rate is 2x the standard rate ,otherwise you get 1.5x the stadard rate
let OTRate = 1.5

if(otHours > 15){
    OTRate = 2
}
console.log("Your OT pay is " + OTRate * standardPay * otHours)