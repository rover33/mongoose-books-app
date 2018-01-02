var mongoose = require("mongoose");

// connecting the db
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require('./books.js');
