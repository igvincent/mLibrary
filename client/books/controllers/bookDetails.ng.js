'use strict';

angular.module("mLibrary").controller("BookDetailsCtrl", ['$scope', '$stateParams', '$meteor', '$state', '$rootScope',
    function ($scope, $stateParams, $meteor, $state) {

        $scope.books = $meteor.collection(Books);


        $scope.book = $meteor.object(Books, $stateParams.bookId);

        $scope.addComment = function (book, newComment, currentUser) {
            if (newComment.body) {
                var comment = {
                    username: currentUser.emails[0].address,
                    date: new Date().toLocaleDateString(),
                    body: newComment.body
                };

                if (!book.comments) book.comments = [];
                book.comments.push(comment);
                $scope.newComment = null;
            }
        };

        $scope.borrowBook = function (book, currentUser) {
            if (currentUser) {
                book.borrow = true;
                var borrower = {
                    username: currentUser.emails[0].address,
                    date: new Date().toLocaleDateString()
                };
                if (!book.borrowers) book.borrowers = [];
                book.borrowers.push(borrower);
            }
        };

        $scope.returnBook = function (book, currentUser) {
            if(book.borrowers.slice(-1)[0].username === currentUser.emails[0].address){
                book.borrow = false;
                book.sinceBorrowable = new Date().toLocaleDateString();
            }
        };


        $scope.delBook = function (book) {
            $scope.books.remove(book);
            $state.go('books');
        };


    }]);