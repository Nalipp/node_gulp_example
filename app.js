var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { list: ['better performance', 
                               'prettier interface', 
                               'cheaper price'] });
});


app.listen(5000, function(err) {
  console.log('listening on port 5000...');
});
