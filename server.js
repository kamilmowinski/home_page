var express = require('express');
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/FOLDERTOHTMLFILESTOSERVER')));

app.listen(8050);
console.log('Listening on port 8050');
