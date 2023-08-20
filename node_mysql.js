const db = 00 ;
const table = 0 ;
const dropdb = 100 ;
var dbname = "flower" ;
var mysql = require('mysql');
var sprintf = require("sprintf-js").sprintf;
 
 
 
var con = mysql.createConnection({
  host: "10.50.0.92",
  user: "root",
  password: "India@123@india"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  
  for (var k = 0; k < dropdb; k++) {
  
  var sql = sprintf("DROP DATABASE %s%d",dbname,k);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database Droped");
  });
  }
  
  
  
  for (var j = 0; j < db; j++) {
  
  var sql = sprintf("CREATE DATABASE %s%d",dbname,j);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  
  var sql = sprintf("use %s%d",dbname,j);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database Selected");
  });
  
  
  for (var i = 0; i < table; i++) {
	  
	  
  var sql = sprintf("CREATE TABLE customers%d (name VARCHAR(255), address VARCHAR(255))",i);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created"); });
	

var sql = sprintf("INSERT INTO customers%d (name, address) VALUES ('Company Inc', 'Highway 37')",i);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted"); });




  } /// for loop end for table 
  } /// for loop end for db


});