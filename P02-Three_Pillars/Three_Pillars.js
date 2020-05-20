class Bookshelf{
    constructor() {
        this.favoriteBooks = [];
    }
    addFavoriteBook(bookName) {
        if (bookName.includes("Great") || bookName.includes("great")){
          /*skips adding the book if the title contains the word 'great'*/
        }
        else {
        //   bookName.push(bookName)
        console.log('the book was added', bookName);
        this.favoriteBooks.push(bookName);
        console.log(this.favoriteBooks);
        }
      }
    printFavoriteBooks(){
        let listNo=1;
    console.log('Your favorite books are:')
        for(let favoriteBook of Bookshelf1.favoriteBooks) {
            console.log(String(listNo)+". "+favoriteBook);
            listNo++;
        }
    }
      
}
let Bookshelf1 = new Bookshelf;

Bookshelf1.addFavoriteBook('The Subpar Gatsby');
Bookshelf1.addFavoriteBook('The Great gatsby');
Bookshelf1.addFavoriteBook('The Windup Girl');
Bookshelf1.addFavoriteBook('The Great Gusty Gunter')
Bookshelf1.addFavoriteBook("Harry Potter and the Sorcerer's Stone")

Bookshelf1.printFavoriteBooks();
