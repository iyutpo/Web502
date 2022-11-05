var MongoClient = require('mongodb').MongoClient;

// nodemongo is the database name
var url = "mongodb://localhost:27017/nodemongo";

// Connect to the db

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

