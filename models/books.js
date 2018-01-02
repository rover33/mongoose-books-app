var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title : String,
    author : String,
    image : String,
    release : String,
})

// define the book model based on schema
var Book = mongoose.model('Book', BookSchema)

//exporting to be used elsewhere
module.exports = Book;