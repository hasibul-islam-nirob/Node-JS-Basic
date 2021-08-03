var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){
        /*
        // Asynchronous
        fs.readFile('home.html',function (error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end();
        })

         */
        // Synchronous
        var mydata = fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata);
        res.end();
    }
})
myServer.listen(3000);
console.log("Server Run Success");