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
        this.favoriteBooks.push(bookName);
        }
      }
    printFavoriteBooks(){
        let listNo=1;
    console.log('The books for the ages:')
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
