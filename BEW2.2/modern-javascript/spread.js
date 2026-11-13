// Spread Operator
const nums1 = [1,2,3]
const nums2 = [4,5,6]
const nums3 = [...nums1, ...nums2]
console.log(nums3)

const numsWithoutSpread = [nums1, nums2]
console.log(numsWithoutSpread) // [[1,2,3], [4,5,6]]

// Spread operator with objects
const person = {
    name: "John Doe",
    age: 18
}
const student = {
    ...person,
    grade: "Diploma"
}
console.log(student) // {name: 'John Doe',age: 20, grade: '10th}

const studentWithoutSpread = {
    person,
    grade: "Diploma"
}
console.log(studentWithoutSpread) //{person: {'John Doe',sge: 20 },grade: '10th'}

// Using spread operator in function arguments
function sum(a,b,c){
    return a + b + c
}
const listOfNums = [15,30,45]
console.log(sum(...listOfNums)) // 90

// Destructuring + Spread operator together

const phones = ["iPhone","Samsung","Oppo","Vivo","Nokia"]
const [first, ...rest] = phones
console.log(first) // iPhone
console.log(rest) // ["Samsung","Oppo","Vivo","Nokia"]

// Object
const phone = {
    brand: "Apple",
    name: "iPhone 18 Pro Max",
    year: 2026
}
const updatedPhone = {
    ...phone,
    name: "iPhone Duo"
}
console.log(updatedPhone)

// Combining Destructuring and Spread in function arguments
const printSoldierInfo = ({name, ...rest}) => {
    console.log(name)
    console.log(rest)
}
const soldier = {
    id: 101,
    name: "Yoo Si Jin",
    age: 32,
    rank: "Captain"
}
printSoldierInfo(soldier)