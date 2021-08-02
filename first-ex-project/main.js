
var http = require('http');

var myServer = http.createServer(function (request, response){

    if (request.url == "/"){
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write('<h1>This is Home Page</h1>')
        response.end();

    }else if (request.url == "/about"){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h1>This is About Page</h1>')
        response.end();
    }

});

myServer.listen(2525);

console.log('Server Run Success');