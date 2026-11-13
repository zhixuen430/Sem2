// 1. map() Method and Arrow Function
const numbers = [1, 2, 3, 4, 5]; 
const numbersSquare = numbers.map(num => num * num) 
console.log(numbersSquare)


// 2. filter() Method and Arrow Function
const newNumbers = numbers.filter(num => num > 2)
console.log(newNumbers)


// 3. forEach() Method and Arrow Function
numbers.forEach((number) => {
  console.log(number)
})


// 4. find() Method and Arrow Function
const number = [1, 2, 3, 4, 5, 6];
const newNumber = number.find(num => num % 3 === 0)
console.log(newNumber)


// 5. Chaining Method
const numbersSuqare = numbers.map(num => num * num) .filter(num => num > 2)
console.log(numbersSuqare)