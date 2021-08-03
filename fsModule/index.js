var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){


        //File Rename Asynchronous
        fs.rename('nirob.txt','nirobNew.txt',function (error){
           if (error){
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Rename Fail")
               res.end();
           }else {
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Rename Success")
               res.end();
           }
        })


        /*
        //File Write Synchronous
        var error = fs.writeFileSync('nirobSync.txt','Hello nirobSync.txt file created');
        if (error){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("File Create Fail")
            res.end();
        }else {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("File Create Success")
            res.end();
        }

         */

    }
})
myServer.listen(3000);
console.log("Server Run Success");