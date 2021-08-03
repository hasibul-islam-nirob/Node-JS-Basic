var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req,res){
    if (req.url == '/'){


        //File Exists Asynchronous
        fs.exists('nirobNew.txt',function (result){
           if (result){
               res.end("True");
           }else {
               res.end("False");
           }
        })



            /*
            //File Exists Synchronous
            var result = fs.existsSync('nirobSyncNew.txt');
            if (result){
               res.end("True");
           }else {
               res.end("False");
           }

             */



    }
})
myServer.listen(3000);
console.log("Server Run Success");