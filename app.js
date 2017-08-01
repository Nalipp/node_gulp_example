var express = require('express');
var app = express();
var bookRouter = require('./src/routes/bookRoutes');

app.use('/Books', bookRouter);

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'My books',
    nav: [{
      Link: '/Books',
      Text: 'Books'
    }, {
      Link: '/Authors',
      Text: 'Authors'
    }]
  });
});

app.listen(5000, function(err) {
  console.log('listening on port 5000...');
});
