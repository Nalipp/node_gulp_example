var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var router = function(nav) {

  bookRouter.route('/')
    .get(function(req, res) {
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db) {
        var collection = db.collection('books');
        collection.find({}).toArray(function(err, books) {
          res.render('books', {
            title: 'Books',
            nav: nav,
            books: books
          });
        });
      });
    });

  bookRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db) {
        var collection = db.collection('books');
        collection.findOne({_id: ObjectId(id)}, function(err, book) {
          console.log('book....');
          console.log(book); 
          res.render('book', {
            title: 'Books',
            nav: nav,
            book: book
          });
        });
      });
    });

  return bookRouter;
};

module.exports = router;
