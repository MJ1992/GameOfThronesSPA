app.config(function($routeProvider) {
    $routeProvider.when('/BookDetails/:bookId', {
        templateUrl: 'views/bookDetails.html',
        controller: 'BookDetailController',
        controllerAs: 'bookCtrl'

    }).when('/CharacterDetails/:characterId', {
        templateUrl: '/views/CharacterDetails.html',
        controller: 'CharacterDetailController',
        controllerAs: 'characterCtrl'
    }).when('/HouseDetails/:houseId', {
        templateUrl: '/views/HouseDetails.html',
        controller: 'HouseDetailController',
        controllerAs: 'houseCtrl'
    }).when('/', {
        templateUrl: '/views/AllData.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
    }).otherwise({
        redirectTo: '/'

    });

});