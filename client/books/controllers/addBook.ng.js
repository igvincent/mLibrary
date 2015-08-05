'use strict';


angular.module('mLibrary').controller('AddBookCtrl', [
        '$meteor',
        'BookSearch',
        '$location',
        function ($meteor, BookSearch, $location) {
            var self = this;

            self.books = $meteor.collection(Books, false, Books);

            self.search = function (isbnId) {
                if (isbnId) {
                    BookSearch.get({ISBN: isbnId}, function (data) {
                        self.book = data;
                    }, function(){
                        self.bookNotFound = true;
                    });
                }
            };

            self.addBook = function(book, user){
                book.owner = user._id;
                self.books.save(book).then(function(res){
                    $location.path('/books/' + res[0]._id);
                });
            };
        }]);