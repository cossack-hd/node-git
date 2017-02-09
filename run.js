var express = require('express');
var app = express();


app.get('/', function (req, res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/info', function (req, res){
    res.sendFile(__dirname + '/' + 'info.html');
})

app.get('/contact', function (req, res){
    res.sendFile(__dirname + '/' + 'contact.html');
})

var server = app.listen(8088, function(){
    var host = server.address().adress
    var port = server.address().port

    console.log('Express app listening at %s %s', host, port)

})