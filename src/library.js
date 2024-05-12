function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
}

function addBook(bookLocation, book) {
if (book.genre === "fantasy") {
  bookLocation.shelves.fantasy.push(book);
} else if (book.genre === "fiction") {
  bookLocation.shelves.fiction.push(book); 
} else if (book.genre === "nonFiction") {
  bookLocation.shelves.nonFiction.push(book);
} 
    return bookLocation
}

function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];
  for (var i = 0; i < shelf.length; i++) {
    var book =shelf[i]
    if (book.title === title) {
      shelf.splice(i,1);
      return `You have now checked out ${title} from the ${library.name}.`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
}

function takeStock(library, genre) {
 
    var elementsOnShelf = library.shelves [genre].length;
                      
  return `There are a total of ${elementsOnShelf} ${genre} books at the ${library.name}.`
}
  
module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};