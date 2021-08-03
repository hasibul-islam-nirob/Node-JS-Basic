var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){

    /*
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

     */


        //File Rename Synchronous
        var error = fs.renameSync('nirobSync.txt','nirobSyncNew.txt');
        if (error){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("File Rename Fail")
            res.end();
        }else {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("File Rename Success")
            res.end();
        }


    }
})
myServer.listen(3000);
console.log("Server Run Success");