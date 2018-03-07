//Service to get all the data
app.service('GOTdataSVC', ['$http', function($http) {
    var baseUrl = "https://www.anapioficeandfire.com/api/";
    //Book Data
    this.booksData = function() {
            return $http({
                method: "GET",
                url: baseUrl + "books?page=1&pageSize=50"
            });
        },
        //Character Data	
        this.charactersData = function() {
            return $http({
                method: "GET",
                url: baseUrl + "characters?page=1&pageSize=50"
            });
        },
        //House Data	
        this.housesData = function() {
            return $http({
                method: "GET",
                url: baseUrl + "houses?page=1&pageSize=50"
            });
        }
    //Get Single Book Details	
    this.SingleBookData = function(bookId) {
        return $http({
            method: "GET",
            url: baseUrl + "books/" + bookId
        });
    }
    //Get Single Character Details	
    this.SingleCharacterData = function(characterId) {
        return $http({
            method: "GET",
            url: baseUrl + "characters/" + characterId
        });
    }
    //Get Single House Details

    this.SingleHouseData = function(houseId) {
        return $http({
            method: "GET",
            url: baseUrl + "houses/" + houseId
        });
    }
    //getting data for specific url	
    this.getUrlData = function(url) {
        return $http({
            method: "GET",
            url: url
        });
    }
    //getting data for array of urls
    this.apiDataSet = function(arrayName, dataSetName) {


        for (var i = 0; i < dataSetName.length; i++) {
            this.getUrlData(dataSetName[i]).then(function successCallback(response) {

                arrayName.push(response.data.name);


            }, function errorCallBack(response) {
                console.log("Error");
            })
        }

    }
    //getting name from the url	
    this.getName = function(propName, propUrl) {
        this.getUrlData(propUrl).then(function successCallback(response) {
            //console.log(response.data);
            propName.push(response.data.name);
            console.log(propName);
        });

    }
}]);