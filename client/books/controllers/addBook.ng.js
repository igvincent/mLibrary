angular.module('mLibrary', ['angular-meteor', 'ui.router', 'ngResource'])
    .controller('AddBookCtrl', [
        '$scope',
        '$meteor',
        'BookSearch',
        '$log',
        function ($scope, $meteor, BookSearch) {

            $scope.books = $meteor.collection(Books, false, Books);

            $scope.search = function (e, isbnId) {
                if (isbnId && e.keyCode === 13) {
                    BookSearch.get({ISBN: isbnId}, function (data) {
                        $scope.book = data;
                    });
                }
            };

            $scope.addBook = function(book){
                $scope.books.save(book);
            };
        }]);