// 1. Destructuring Assignment
const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

const {id , name , course} = student
const {parents: {father , mother}} = student

console.log(id)
console.log(name)
console.log(father)

// 2. Spread Operator
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];
const arr3 = [...arr1 , ...arr2];
const arr4 = [arr1];

console.log(arr3)
console.log(arr4)

// 3. Destructuring and Spread Together
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a , b , c , d , e , ...rest] = numbers
const firstHalf = [a , b , c , d, e]
const secondHalf = [...rest]
console.log(firstHalf)
console.log(secondHalf)


// 4. Spread Operator with Function
const nums = [1 , 2 , 3];

function sum(a , b ,c){
    return a + b + c;
}

console.log(sum(...nums))