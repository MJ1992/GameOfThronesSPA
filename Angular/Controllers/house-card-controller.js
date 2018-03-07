app.controller('HouseDetailController', ['$http', 'GOTdataSVC', '$routeParams', function($http, GOTdataSVC, $routeParams) {
    var main = this;

    this.heading = '';
    this.houses = '';
    this.house = '';

    this.houseId = $routeParams.houseId;
    this.swornMembers = [];
    this.founder = [];
    this.currentLord = [];
    this.overlord = [];
    this.Heir = [];
    this.cadetBranches = [];


    //load all house data
    this.loadHousesData = function() {

        GOTdataSVC.housesData().then(function successCallback(response) {

            main.houses = response.data;
            main.region = response.data.region;
            console.log(response.data);


        }, function errorCallBack(response) {
            console.log("Error");
        })
    };
    //load single house data
    this.loadSingleHouseData = function() {

        GOTdataSVC.SingleHouseData(main.houseId).then(function successCallback(response) {

            main.house = response.data;
            //console.log(response.data);
            GOTdataSVC.apiDataSet(main.swornMembers, main.house.swornMembers);
            GOTdataSVC.apiDataSet(main.cadetBranches, main.house.cadetBranches);
            GOTdataSVC.getName(main.overlord, main.house.overlord);
            GOTdataSVC.getName(main.currentLord, main.house.currentLord);
            GOTdataSVC.getName(main.founder, main.house.founder);
            GOTdataSVC.getName(main.Heir, main.house.heir);

        }, function errorCallBack(response) {
            console.log("Error");
        })
    };


    this.loadHousesData();
    this.loadSingleHouseData();


}]);