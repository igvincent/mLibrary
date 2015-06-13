app
    .controller('BooksCtrl',['$scope', '$meteor', function ($scope, $meteor) {
        console.log('Je suis dans le bookCtrl');
    }])
    .controller('AddBookCtrl',['$scope', '$meteor', function ($scope, $meteor) {
        console.log('Je suis dans le addBookCtrl');
    }]);
