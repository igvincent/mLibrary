window.app = angular.module('mLibrary', ['angular-meteor', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('books', {
                url: '/books',
                template: UiRouter.template('books'),
                controller: 'BooksCtrl'
            }).state('addBook', {
                url: '/addBook',
                template: UiRouter.template('addBook'),
                controller: 'AddBookCtrl'
            });

        $urlRouterProvider.otherwise("/books");

        $locationProvider.html5Mode(true);
    }]);
