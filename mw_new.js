'use strict';
var uuid = require('node-uuid');
var sprintf = require("sprintf-js").sprintf;
var mongoClient = require('mongodb').MongoClient;


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
var demoColl = "lilly";

// Officially recommended solution
var url = sprintf("mongodb://%s:%s@%s:%d,%s:%d,%s:%d/%s?replicaSet=%s", username,password,host1,port1,host2,port2,host3,port3,AuDb,replSetName);


console.info("url:", url);
// Retrieve mongoClient.
mongoClient.connect(url, function(err, db) {
    if(err) {
        console.error("connect err:", err);
        return 1;
    }
    // Authorization. Here, the username is based on the admin database authorization.
    var db1 = db.db("lildb");
   
        // Get the Collection handle.
        var collection = db1.collection(demoColl);
        var demoName = "NODE:" + uuid.v1();
        var doc = {"DEMO": demoName, "MESG": "Hello AliCoudDB For MongoDB"};
        console.info("ready insert document: ", doc);
        // Insert data.
        collection.insertOne(doc, function(err, data) {
            if(err) {
                console.error("insert err:", err);
                return 1;
            }
            console.info("insert result:", data["result"]);
            // Read data.
            var filter = {"DEMO": demoName};
            collection.find(filter).toArray(function(err, items) {
                if(err) {
                    console.error("find err:", err);
                    return 1;
                }
                console.info("find document: ", items);
                //Close the client and release resources.
                db.close();
            });
        });
    });
