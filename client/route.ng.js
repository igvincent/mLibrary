angular.module('mLibrary').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'client/books/views/books.ng.html',
                controller: 'BooksCtrl'
            }).state('addBook', {
                url: '/addBook',
                templateUrl:'client/books/views/add-book.ng.html' ,
                controller: 'AddBookCtrl'
            });

        $urlRouterProvider.otherwise("/books");

        $locationProvider.html5Mode(true);
    }]);
