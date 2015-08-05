'use strict';

angular.module('mLibrary').factory('BookSearch',['$resource', function ($resource) {
        return $resource('https://www.googleapis.com/books/v1/volumes?q=isbn::ISBN', {}, {
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    var response;
                    if (data.items) {
                        //Only one response is available for a ISBN
                        response = {
                            title: data.items[0].volumeInfo.title,
                            authors: data.items[0].volumeInfo.authors,
                            publisher: data.items[0].volumeInfo.publisher,
                            description: data.items[0].volumeInfo.description,
                            pageCount: data.items[0].volumeInfo.pageCount,
                            thumbnail: data.items[0].volumeInfo.imageLinks.thumbnail,
                            borrow: false,
                            since: new Date(),
                            borrowers: [],
                            comments: []
                        };
                    }
                    return response;
                }
            }
        });
    }]);