
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
        inserData(connection);
    }
});

function inserData(connection){
    let SQL = "INSERT INTO `student`(`name`, `phone`, `code`) VALUES ('Nirob','01957111','1001')";
    connection.query(SQL, function (error){
        if (error)
            console.log("Insert Fail");
        else
            console.log("Insert Success");
    })
}