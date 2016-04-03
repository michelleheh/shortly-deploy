var path = require('path');
// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var mongoose = require('mongoose');

// ==========================================
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/shortly.sqlite')
  }
});
// ==========================================

// setup mongodb database file path
var url = 'mongodb://localhost:27017/shortly'; // type in mongod in the terminal to start the mongo server
// connect and create connection to database file path

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log('Connected correctly to server.');
//   db.close();
// });

// // connect to file location
// mongoose.connect(url);
// // defining a model
// var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

// // create a new schema
// var urls = new Schema({
//   id: ObjectId,
//   baseUrl: String,
//   code: String,
//   title: String,
//   visits: Number,
//   timestamps: { type: Date, default: Date.now }
// });

// check if there is url model


// ==========================================
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('urls').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('urls', function (link) {
      link.increments('id').primary();
      link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});
// ==========================================

// var users = new Schema({
//   id: ObjectId,
//   username: { type: String, unique: true, required: true, dropDups: true },
//   password: String,
//   timestamps: { type: Date, default: Date.now }
// });

// ==========================================
db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

// ==========================================

module.exports = db;
