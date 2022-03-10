var express = require('express');
var consign = require('consign');
const path = require('path');

var app = express();

app.get('/', function(req, res) {
  res.render('index', {error: false});
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.listen(8081, function(){
  console.log('APP rodando na porta');
});

