Books = new Mongo.Collection('books');

Books.allow({
    insert: function (userId, book) {
        return userId && book.owner === userId;
    },
    update: function (userId) {
        if (!userId) return false;
        return true;
    },
    remove: function (userId, book) {
        if (userId !== book.owner) return false;
        return true;
    }
}); 
