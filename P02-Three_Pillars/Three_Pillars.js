function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
        ]);
        console.log(cb);
	},500);
}

let BOOK_API = "fake.url.com";
let newBooks = [];
