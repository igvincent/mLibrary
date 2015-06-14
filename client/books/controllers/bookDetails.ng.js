'use strict';

angular.module("mLibrary").controller("BookDetailsCtrl", ['$scope', '$stateParams', '$meteor', '$state',
    function($scope, $stateParams, $meteor, $state){

        $scope.books = $meteor.collection(Books);

        $scope.book = $meteor.object(Books, $stateParams.bookId);

        $scope.addComment = function (e) {
            if (e.keyCode === 13) {
                if ($scope.newComment.body && $scope.newComment.username) {
                    var comment = {
                        username: $scope.newComment.username,
                        date: new Date().toLocaleDateString(),
                        body: $scope.newComment.body
                    };

                    if (!$scope.book.comments) $scope.book.comments = [];
                    $scope.book.comments.push(comment);
                    $scope.newComment = null;
                }
            }
        };

        $scope.borrowBook = function (e) {
            if (e.keyCode === 13) {
                if($scope.username){
                    $scope.book.borrow = true;
                    var borrower = {
                        username: $scope.username,
                        date: new Date().toLocaleDateString()
                    };
                    if (!$scope.book.borrowers) $scope.book.borrowers = [];
                    $scope.book.borrowers.push(borrower);
                    $scope.username=null;
                }
            }
        };

        $scope.returnBook = function () {
            $scope.book.borrow = false;
            $scope.book.since = new Date().toLocaleDateString();
        };


        $scope.delBook = function () {
            $scope.books.remove($scope.book);
            $state.go('books');
        };


    }]);