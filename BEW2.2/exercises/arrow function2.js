// 1. filter() and Arrow Function
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const newBooks = books.filter(book => book.ratings > 4)
console.log(newBooks)


// 2. map() and Arrow Function
const bookTitle = books.map(book => book.title)
console.log(bookTitle)


// 3. find() and Arrow Function
const booksTitle = books.find(book => book.title === '1984')
console.log(booksTitle)


// 4. sort() and Arrow Function
const bookRating = books.sort((a , b) => b.ratings - a.ratings)
console.log(bookRating)


// 5. Chaining Method
const booksRating = books.sort((a , b) => b - a)
console.log(booksRating[0].title)