var express = require('express');
var path = require('path');
var app = express();


app.use('/assets', [
    //  Load required Bootstrap and BootstrapVue CSS 
    express.static(__dirname + '/node_modules'),
]);

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});

console.log('running web server...');
app.listen(8080);