 var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  assert = require('assert');

var sprintf = require("sprintf-js").sprintf;

var host1 = "10.50.0.101";
var port1 = 27017;
var host2 = "10.50.0.92";
var port2 = 27017;
var host3 = "10.50.0.190";
var port3 = 27017;
var username = "root";
var password = "india";
var replSetName = "rs0";
var AuDb = "admin";
var NameOfDb = "sun";
var NameOfcollection = "user";
var NumOfcollection = 6;
var NumOfDb = 5;
var DropDbNumber = 0;

var url = sprintf("mongodb://%s:%s@%s:%d,%s:%d,%s:%d/%s?replicaSet=%s", username,password,host1,port1,host2,port2,host3,port3,AuDb,replSetName);
console.info("url:", url);
  
 //const url = 'mongodb://root:india@10.50.0.101:27017/admin,10.50.0.92:27017/admin,10.50.0.190:27017/admin?replicaSet=rs0';

 MongoClient.connect(url ,function(err, db) {

   assert.equal(null, err);
     console.log("Connected correctly to server");
	 
for(var i=0; i < DropDbNumber; i++){
	
	var db1 = db.db(NameOfDb+k);
	db1.dropDatabase(function(err, result) {  
	
	console.log("Error : "+err);
        if (err) throw err;
        console.log("Operation Success ? "+result);
        
    });
    //db.close();
	
}	


	
for (var k = 0; k < NumOfDb; k++) {
	
	
 var db1 = db.db(NameOfDb+k);
 

for (var j = 0; j < NumOfcollection; j++) {
	
console.log("Switched to "+db1.databaseName+" database");

        db1.createCollection(NameOfcollection+j, function(err, result) {
        if (err) throw err;
        console.log("Collection is created into  "+db1.databaseName+" database");
		
		
}); }     }//loop end 
      
	   
	  });


