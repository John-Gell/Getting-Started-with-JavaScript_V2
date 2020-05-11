let favoriteBooks = [/*..*/]

function addFavoriteBook(bookName) {
  if (bookName.includes("Great") || bookName.includes("great")){
    /*skips adding the book if the title contains the word 'great'*/
  }
  else {
    favoriteBooks.push(bookName)
  }
}
function printFavoriteBooks(){
  console.log('Your favorite books are:')
  for (let i = 0; i< favoriteBooks.length;i++){
    console.log((i+1)+ ". " + favoriteBooks[i]);
  }
  }

addFavoriteBook('The Subpar Gatsby');
addFavoriteBook('The Great gatsby');
addFavoriteBook('The Windup Girl');
addFavoriteBook('The Great Gusty Gunter')
addFavoriteBook("Harry Potter and the Sorcer's Stone")

printFavoriteBooks();

