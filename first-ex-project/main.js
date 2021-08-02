
var http = require('http');

var myServer = http.createServer(function (request, response){
    response.end('Hello Programmer');
});

myServer.listen(2525);

console.log('Server Run Success');