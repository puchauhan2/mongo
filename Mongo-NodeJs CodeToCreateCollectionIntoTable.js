const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  assert = require('assert');

// Connection URL
 var url = 'mongodb://root:india@10.50.0.92:27017/admin';
 // Use connect method to connect to the Server
 MongoClient.connect(url ,function(err, db) {

   assert.equal(null, err);
     console.log("Connected correctly to server");

 var db1 = db.db("testdb1");

console.log("Switched to "+db1.databaseName+" database");

        db1.createCollection("users", function(err, result) {
        if (err) throw err;
        console.log("Collection is created! into  "+db1.databaseName+" database");
        db.close();

                     });
       });
