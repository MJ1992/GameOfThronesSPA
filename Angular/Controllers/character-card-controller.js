app.controller('CharacterDetailController', ['$http', 'GOTdataSVC', '$routeParams', function($http, GOTdataSVC, $routeParams) {
    var main = this;

    this.heading = 'Game of Thrones';
    this.characters = '';
    this.character = '';
    this.characterId = $routeParams.characterId;
    this.books = [];
    this.allegiances = [];
    this.father = [];
    this.mother = [];
    this.spouse = [];
    //load all character data
    this.loadCharactersData = function() {

        GOTdataSVC.charactersData().then(function successCallback(response) {

            main.characters = response.data;
            console.log(response.data);

        }, function errorCallBack(response) {
            console.log("Error");
        })
    };
    //load single character data
    this.loadSingleCharacterData = function() {

        GOTdataSVC.SingleCharacterData(main.characterId).then(function successCallback(response) {

            main.character = response.data;
            //console.log(response.data);
            GOTdataSVC.apiDataSet(main.books, main.character.books);
            GOTdataSVC.apiDataSet(main.allegiances, main.character.allegiances);
            GOTdataSVC.getName(main.father, main.character.father);
            GOTdataSVC.getName(main.mother, main.character.mother);
            GOTdataSVC.getName(main.spouse, main.character.spouse);

        }, function errorCallBack(response) {
            console.log("Error");
        })
    };


    this.loadCharactersData();
    this.loadSingleCharacterData();


}]);