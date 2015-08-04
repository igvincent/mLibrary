'use strict';


angular.module('mLibrary').controller('AddBookCtrl', [
        '$scope',
        '$meteor',
        'BookSearch',
        function ($scope, $meteor, BookSearch) {

            $scope.books = $meteor.collection(Books, false, Books);
            $scope.bookNotFound = false;
            $scope.addSuccess = false;

            $scope.search = function (e, isbnId) {
                if (isbnId && e.keyCode === 13) {
                    BookSearch.get({ISBN: isbnId}, function (data) {
                        $scope.book = data;
                    }, function(){
                        $scope.bookNotFound = true;
                    });
                }
            };

            $scope.addBook = function(book, user){
                book.owner = user._id;
                $scope.addSuccess = false;
                $scope.books.save(book).then(function(){
                    $scope.addSuccess = true;
                });
                $scope.isbnId = null;
                $scope.book = null;
            };
        }]);