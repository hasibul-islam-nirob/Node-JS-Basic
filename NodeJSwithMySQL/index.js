
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
        //inserData(connection);
        selectData(connection);
        //deleteData(connection);
        //updateData(connection);
    }
});

// Data Insert
function inserData(connection){
    let SQL = "INSERT INTO `student`(`name`, `phone`, `code`) VALUES ('Nirob','01957111','1001')";
    connection.query(SQL, function (error){
        if (error)
            console.log("Insert Fail");
        else
            console.log("Insert Success");
    })
}

// Data Update
function updateData(connection){
    let SQL = "UPDATE `student` SET `name`='Hasibul Islam Nirob',`phone`='0195733' WHERE `id`='2'";
    connection.query(SQL, function (error){
        if (error)
            console.log("Update Fail");
        else
            console.log("Update Success");
    })
}

// Data Delete
function deleteData(connection){
    let SQL = "DELETE FROM `student` WHERE `id` = '1'";
    connection.query(SQL, function (error){
        if (error)
            console.log("Delete Fail");
        else
            console.log("Delete Success");
    })
}

// Data Select
function selectData(connection){
    let SQL = "SELECT * FROM `student`";
    connection.query(SQL, function (error, result){
        if (error)
            console.log("Select Fail");
        else
            console.log(result);
    })
}