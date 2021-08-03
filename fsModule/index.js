var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){

    if (req.url == '/'){

        // Asy
        fs.readFile('home.html',function (error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end();
        })

    }

})
myServer.listen(2000);
console.log("Server Run Success");