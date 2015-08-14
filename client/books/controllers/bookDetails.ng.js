'use strict';

angular.module("mLibrary").controller("BookDetailsCtrl", ['$stateParams', '$meteor', '$state',
    function ($stateParams, $meteor, $state) {
        var self = this;

        self.books = $meteor.collection(Books);

        self.book = $meteor.object(Books, $stateParams.bookId);

        var userIsBooking = function (book, user) {
            if (book.bookings) {
                if (book.bookings.length === 0) {
                    console.log('hey');
                    return -1;
                }
                angular.forEach(book.bookings, function (booking) {
                    if (booking.username === user.emails[0].address) {
                        return book.bookings.indexOf(booking);
                    }
                });
            } else {
                return -1;
            }
        };

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
                if (book.bookings) {
                    var posBooking = userIsBooking(book, currentUser);
                    if (posBooking !== -1) {
                        book.bookings.splice(posBooking, 1);
                    }
                }
                if (!book.borrowers) book.borrowers = [];
                book.borrowers.push(borrower);
            }
        };

        self.returnBook = function (book, currentUser) {
            if (book.borrowers.slice(-1)[0].username === currentUser.emails[0].address) {
                book.borrow = false;
                book.borrowers.slice(-1)[0].dateUnborrow = new Date();
            }
        };

        self.delBook = function (book) {
            self.books.remove(book);
            $state.go('books');
        };

        self.bookBook = function (book, currentUser) {
            var posUser = userIsBooking(book, currentUser);
            if (currentUser &&
                book.borrow && posUser === -1 &&
                book.borrowers[book.borrowers.length - 1].username !== currentUser.emails[0].address) {
                var booking = {
                    username: currentUser.emails[0].address,
                    date: new Date()
                };
                if (!book.bookings) book.bookings = [];
                book.bookings.push(booking);
            }
        }


    }]);