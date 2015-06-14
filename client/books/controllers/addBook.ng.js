'use strict';


angular.module('mLibrary').controller('AddBookCtrl', [
        '$scope',
        '$meteor',
        'BookSearch',
        function ($scope, $meteor, BookSearch) {

            $scope.books = $meteor.collection(Books, false, Books);

            $scope.search = function (e, isbnId) {
                if (isbnId && e.keyCode === 13) {
                    BookSearch.get({ISBN: isbnId}, function (data) {
                        $scope.book = data;
                    });
                }
            };

            $scope.addBook = function(){
                $scope.books.save($scope.book);
                $scope.isbnId = 'Add success';
                $scope.book = null;
            };
        }]);