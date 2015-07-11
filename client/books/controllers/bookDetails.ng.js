'use strict';

angular.module("mLibrary").controller("BookDetailsCtrl", ['$scope', '$stateParams', '$meteor', '$state',
    function ($scope, $stateParams, $meteor, $state) {

        $scope.books = $meteor.collection(Books);

        $scope.book = $meteor.object(Books, $stateParams.bookId);

        $scope.addComment = function (book, newComment) {
            if (newComment.body && newComment.username) {
                var comment = {
                    username: newComment.username,
                    date: new Date().toLocaleDateString(),
                    body: newComment.body
                };

                if (!book.comments) book.comments = [];
                book.comments.push(comment);
                $scope.newComment = null;
            }
        };

        $scope.borrowBook = function (book, username) {
            if (username) {
                book.borrow = true;
                var borrower = {
                    username: username,
                    date: new Date().toLocaleDateString()
                };
                if (!book.borrowers) book.borrowers = [];
                book.borrowers.push(borrower);
                $scope.username = null;
            }
        };

        $scope.returnBook = function (book) {
            book.borrow = false;
            book.sinceBorrowable = new Date().toLocaleDateString();
        };


        $scope.delBook = function (book) {
            $scope.books.remove(book);
            $state.go('books');
        };


    }]);