'use strict';

angular.module('mLibrary').controller('BooksCtrl', ['$scope', '$meteor', '$location',
    function ($scope, $meteor, $location) {
        $scope.books = $meteor.collection(Books);


        $scope.goDetails = function(book){
            $location.path('/books/' + book._id);
        }
    }]);
