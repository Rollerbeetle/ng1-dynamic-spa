var express = require('express');
var app = express();

const PORT = 3006

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/dist'));


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/dist' });
});

console.log('Starting server and listening on port: ' + PORT);
app.listen(PORT); //the port you want to use