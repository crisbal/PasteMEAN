var express = require('express');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pastenode');

var bodyParser = require('body-parser');

var mainRoutes = require('./routes/mainRoutes');
var apiRoutes = require('./routes/apiRoutes');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRoutes);
app.use('/api/', apiRoutes);


var server = app.listen(app.get('port'),"127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});



module.exports = app;
