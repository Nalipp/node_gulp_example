var express = require('express');
var bookRouter = express.Router();

var books = [ 
  {
    title: 'To Kill a Mockingbird',
    genre: 'Fiction',
    author: 'Harper Lee',
    read: false
  },
  {
    title: 'Ruby on Rails Tutorial',
    genre: 'Eduction',
    author: 'Michael Hartl',
    read: true
  },
  {
    title: 'Rails Testing',
    genre: 'Eduction',
    author: 'Thoughtbot',
    read: false
  },
  {
    title: 'How To Program',
    genre: 'Eduction',
    author: 'Chris Pine',
    read: true
  }
];

bookRouter.route('/')
  .get(function(req, res) {
    res.render('books', {
      title: 'Books',
      nav: [{
        Link: '/Books',
        Text: 'Books'
      }, {
        Link: '/Authors',
        Text: 'Authors'
      }],
      books: books
    });
  });

bookRouter.route('/:id')
  .get(function(req, res) {
    var id = req.params.id;
    res.render('book', {
      title: 'Book',
      nav: [{
        Link: '/Books',
        Text: 'Books'
      }, {
        Link: '/Authors',
        Text: 'Authors'
      }],
      book: books[id]
    });
  });

module.exports = bookRouter;
