'use strict';

angular.module('mLibrary').controller('BooksCtrl', ['$meteor', '$location',
    function ($meteor, $location) {
        var self = this;
        self.books = $meteor.collection(Books);

        self.goDetails = function(book){
            $location.path('/books/' + book._id);
        }
    }]);
