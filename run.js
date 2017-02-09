var express = require('express');
var app = express();


app.get('/', function (req, res){
    res.send('Hello from Express');
})



var server = app.listen(8088, function(){
    var host = server.address().adress
    var port = server.address().port

    console.log('Express app listening at %s %s', host, port)

})