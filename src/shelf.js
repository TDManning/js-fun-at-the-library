function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(book);
  }
}
// var sciFiShelf = [Hyperion, dune, endersGame]

function unshelfBook(targetString, shelf) {
  for (var i = 0; i < shelf.length; i++) {
  if (targetString === shelf[i].title) {
    shelf.splice(i, 1)
  }
  }
}

function listTitles(shelf) {
  var allTitles = '';
  for (var i = 0; i < shelf.length; i++) {
  // var currentTitle = `${shelf[i].title}`;
    allTitles += shelf[i].title;
    if (i < shelf.length - 1) {
    allTitles += ', ';
    }
  // allTitles += currentTitle;
  }
  return allTitles;
}
function searchShelf(shelf, bookTitle) {
for (i = 0; i < shelf.length; i++){
  if (shelf[i].title === bookTitle){
    return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};