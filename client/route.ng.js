'use strict';

angular.module('mLibrary').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'client/books/views/books.ng.html',
                controller: 'BooksCtrl'
            }).state('bookDetails', {
                url: '/books/:bookId',
                templateUrl: 'client/books/views/book-details.ng.html',
                controller: 'BookDetailsCtrl',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            }).state('addBook', {
                url: '/addBook',
                templateUrl: 'client/books/views/add-book.ng.html',
                controller: 'AddBookCtrl',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            });

        $urlRouterProvider.otherwise("/books");

        $locationProvider.html5Mode(true);
    }]);
