class Bookshelf{
    constructor() {
        this.favoriteBooks =[];
    }
    addFavoriteBook(bookName) {
        if (!bookName.includes("Great") & !bookName.includes("great")){
            this.favoriteBooks.push(bookName);        }
    }
    printFavoriteBooks(){
        console.log('Books for the ages:') 
        for (let bookName of this.favoriteBooks) {
			console.log(bookName);
        }
    }  

}

function fakeAjax(url,cb) {
  setTimeout(function fakeLoadingDelay(){
    cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
        ]);
	},500);
}

let Book_api = "book api";

function loadBookshelf(theBookshelf) {
    fakeAjax(Book_api,function bookStrip(data){
        for(let book of data){
            theBookshelf.addFavoriteBook(book);
        }
        theBookshelf.printFavoriteBooks(); //this is inside of the bookStrip function to make sure the fakeAjax has closure over the print
    });
}

let Bookshelf1 = new Bookshelf;

loadBookshelf(Bookshelf1);





