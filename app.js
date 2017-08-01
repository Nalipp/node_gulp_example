var express = require('express');
var app = express();

var nav = [{
      Link: '/Books',
      Text: 'Books'
    }, {
      Link: '/Authors',
      Text: 'Authors'
    }];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    nav: nav,
    title: 'My books',
  });
});

app.listen(5000, function(err) {
  console.log('listening on port 5000...');
});
