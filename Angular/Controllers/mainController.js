//controller to  display all data
app.controller('mainController', ['$http', 'GOTdataSVC', function($http, GOTdataSVC) {
    var main = this;

    this.heading = 'Game of Thrones';
    this.GOTdata = [];
    this.books = '';
    this.characters = '';
    this.houses = '';
    this.isbn = [];
    this.category = 'World';
    this.sortProp = 'name';
    this.isHouse = true;
    this.isBook = true;
    this.isCharacter = true;


    //load all GOT data
    this.loadGOTdata = function() {

        GOTdataSVC.booksData().then(function successCallback(response) {

            main.books = response.data;
            for (var i = 0; i < main.books.length; i++) {
                main.GOTdata.push(main.books[i]);
                main.isbn.push(main.books[i].isbn);

            }

        }, function errorCallBack(response) {
            console.log("Error");
        });

        GOTdataSVC.housesData().then(function successCallback(response) {

            main.houses = response.data;
            for (var i = 0; i < main.houses.length; i++) {
                main.GOTdata.push(main.houses[i]);
            }

        }, function errorCallBack(response) {
            console.log("Error");
        });
        GOTdataSVC.charactersData().then(function successCallback(response) {

            main.characters = response.data;
            for (var i = 0; i < main.characters.length; i++) {
                main.GOTdata.push(main.characters[i]);
            }


        }, function errorCallBack(response) {
            console.log("Error");
        })

        
    };
    //To show filtered data based on category     
    this.categoryFilter = function(category) {
        if (category === "People") {
            return function(item) {
                if (item.hasOwnProperty('gender')) {
                    return item;
                }

            };
        } else if (category === "House") {
            return function(item) {
                if (item.hasOwnProperty('region')) {
                    return item;
                }

            };
        } else if (category === "Books") {
            return function(item) {
                if (item.hasOwnProperty('isbn')) {
                    return item;
                }

            };
        } else {
            return function(item) {

                return item;

            };
        }
    };

    this.loadGOTdata();


}]);
//end