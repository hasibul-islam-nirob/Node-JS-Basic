var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){

        //File Write Asynchronous
        fs.writeFile('nirob.txt','Hello nirob.txt file created',function (error){
           if (error){
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Create Fail")
               res.end();
           }else {
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Create Success")
               res.end();
           }
        })


        /*
        //File Write Synchronous
        var mydata = fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata);
        res.end();

         */
    }
})
myServer.listen(3000);
console.log("Server Run Success");