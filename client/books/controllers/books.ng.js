angular.module('mLibrary')
    .controller('BooksCtrl',['$scope', '$meteor', function ($scope, $meteor) {
        console.log('Je suis dans le bookCtrl');

        $scope.books = $meteor.collection(Books);


        $scope.delBook = function(book){
            $scope.books.remove(book);
        }


    }]);
