'use strict';

angular.module("mLibrary").controller("BookDetailsCtrl", ['$stateParams', '$meteor', '$state',
    function ($stateParams, $meteor, $state) {
        var self = this;

        self.books = $meteor.collection(Books);

        self.book = $meteor.object(Books, $stateParams.bookId);

        self.addComment = function (book, newComment, currentUser) {
            if (newComment.body) {
                var comment = {
                    username: currentUser.emails[0].address,
                    date: new Date(),
                    body: newComment.body
                };

                if (!book.comments) book.comments = [];
                book.comments.push(comment);
                self.newComment = null;
            }
        };

        self.borrowBook = function (book, currentUser) {
            if (currentUser) {
                book.borrow = true;
                var borrower = {
                    username: currentUser.emails[0].address,
                    dateBorrow: new Date()
                };
                if (!book.borrowers) book.borrowers = [];
                book.borrowers.push(borrower);
            }
        };

        self.returnBook = function (book, currentUser) {
            if(book.borrowers.slice(-1)[0].username === currentUser.emails[0].address){
                book.borrow = false;
                book.borrowers.slice(-1)[0].dateUnborrow = new Date();
            }
        };

        self.delBook = function (book) {
            self.books.remove(book);
            $state.go('books');
        };


    }]);