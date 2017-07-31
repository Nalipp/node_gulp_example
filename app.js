var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src/views'));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(5000, function(err) {
  console.log('listening on port 5000...');
});
