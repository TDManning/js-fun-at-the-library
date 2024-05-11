function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns){
  console.log({name}, {age}, {pronouns})
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character 
}

function saveReview(reviewStr, reviewsArr) {
  if (!reviewsArr.includes(reviewStr)) {
    reviewsArr.push(reviewStr)
  }
}

function calculatePageCount(bookName) {
  var pages = bookName.length * 20;
  return pages
}

function writeBook (bookTitle, bookCharacter, type) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: type
  }
  return book
}

function editBook (someBook) {
  someBook.pageCount = someBook.pageCount * .75;
}

module.exports = {

  createTitle,
  buildMainCharacter, 
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}