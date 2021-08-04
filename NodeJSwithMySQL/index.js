
var mysql = require('mysql');

var databaseConnection = {
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs_mysql"
}

var connection = mysql.createConnection(databaseConnection);

connection.connect(function (error){
    if (error){
        console.log("Connection Fail");
    }else{
        console.log("Connection Success");
    }
});