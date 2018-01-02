var mongoose = require('mongoose');
Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name: String,
    alive: Boolean,
    image: String
});


//creating a model out of schema
var Author = mongoose.model('Author', AuthorSchema);


//exporting
module.exports = Author;
