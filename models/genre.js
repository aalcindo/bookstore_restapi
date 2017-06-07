var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre = module.experts = mongoose.model('Genre',genreSchema);

//Get Genres 
module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit);
}

module.exports.addGenre = function(genre, callback){
	//var newGenre = new Genre({name:"myOwnGenre"});
	Genre.create(genre, callback);
}

//update
module.exports.updateGenre = function(id,genre,options, callback){
	var condition={_id:id};
	var update={
		name: genre.name
	}
	console.log(condition);
	Genre.findOneAndUpdate(condition, update, options,callback);
}

module.exports.deleteGenre = function(id,callback){
	var condition={_id:id};
	Genre.remove(condition,callback);
}