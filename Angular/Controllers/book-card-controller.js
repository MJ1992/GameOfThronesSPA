app.controller('BookDetailController', ['$http', 'GOTdataSVC', '$routeParams', function($http, GOTdataSVC, $routeParams) {
    var main = this;

    this.heading = 'Game of Thrones';
    this.books = '';
    this.book = '';
    this.bookId = $routeParams.bookId;
    this.characters = [];
    this.povCharacters = [];

    this.loadBooksData = function() {

        GOTdataSVC.booksData().then(function successCallback(response) {

            main.books = response.data;
            console.log(response.data);

        }, function errorCallBack(response) {
            console.log("Error");
        })
    };
    this.loadSingleBookData = function() {

        GOTdataSVC.SingleBookData(main.bookId).then(function successCallback(response) {

            main.book = response.data;
            console.log(main.book);
            //Getting Characters name
            GOTdataSVC.apiDataSet(main.characters, main.book.characters);


            //Getting PovCharacters name
            GOTdataSVC.apiDataSet(main.povCharacters, main.book.povCharacters);

        }, function errorCallBack(response) {
            console.log("Error");
        })
    };


    this.loadBooksData();
    this.loadSingleBookData();


}]);