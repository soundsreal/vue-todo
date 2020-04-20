var express = require('express');
var path = require('path');
var app = express();

app.use('/assets', [
    express.static(__dirname + '/node_modules/vue/dist')
]);

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});

console.log('running web server...');
app.listen(8080);