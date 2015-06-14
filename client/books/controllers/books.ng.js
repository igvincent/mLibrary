'use strict';

angular.module('mLibrary')
    .controller('BooksCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
        $scope.books = $meteor.collection(Books);
    }]);
