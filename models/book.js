var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		require: true
	},
	author:{
		type: String,
		require: true
	},
	Description:{
		type: String,
	},
	publisher:{
		type: String,
	},
	pages:{
		type: String,
	},
	image_url:{
		type: String,
	},
	buy_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.experts = mongoose.model('Book',bookSchema);

//Get Genres 
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
	Book.findById(id,callback);
}

module.exports.addBook = function(book, callback){
	Book.create(book, callback);
}

module.exports.updateBook = function(id,book,options, callback){
	var condition={_id:id};
	var update = {
	author:book.author,
	title:book.title,
	Description:book.Description,
	publisher:book.publisher,
	pages:book.pages,
	image_url:book.image_url,
	buy_url:book.buy_url
	};
	Book.findOneAndUpdate(condition, update, options,callback);
}

module.exports.deleteBook = function(id,callback){
	var condition={_id:id};
	Book.remove(condition,callback);
}