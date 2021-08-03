var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){

        /*
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

         */


            //File Exists Synchronous
            var result = fs.existsSync('nirobSyncNew.txt');
            if (result){
               res.end("True");
           }else {
               res.end("False");
           }



    }
})
myServer.listen(3000);
console.log("Server Run Success");