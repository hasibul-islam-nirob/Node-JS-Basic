var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){

        //File Delete Asynchronous
        fs.unlink('nirobNew.txt',function (error){
           if (error){
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Delete Fail")
               res.end();
           }else {
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Delete Success")
               res.end();
           }
        })

        /*
          //File Delete Synchronous
             var error = fs.renameSync('nirobSync.txt','nirobSyncNew.txt');
            if (error){
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Delete Fail")
               res.end();
           }else {
               res.writeHead(200,{'Content-Type':'text/html'})
               res.write("File Delete Success")
               res.end();
           }

         */



    }
})
myServer.listen(3000);
console.log("Server Run Success");