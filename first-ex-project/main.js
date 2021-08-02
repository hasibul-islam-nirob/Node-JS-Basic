
var http = require('http');
var url = require('url');

var myServer = http.createServer(function (request, response){

    var myURL = "http://facebook.com/hasibulislamnirab/";
    var urlObj = url.parse(myURL, true);

    var myhostName = urlObj.host;
    var mypathName = urlObj.pathname;
    var mysearchName = urlObj.search;

    response.writeHead(200, {'Content-Type':'text/html'})
    response.write(myhostName)
    response.write(mypathName)
    //response.write(mysearchName)
    response.end();


});

myServer.listen(2525);

console.log('Server Run Success');