var express = require('express');
var app = express();
var bodyParser =  require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client/src'));
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');
//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req,res){
	res.send('Please use /api/books or /api/geners');
});

app.get('/api/genres',function(req,res){
	//res.send('hahaha');
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.post('/api/genres',function(req,res){
	//res.send('hahaha');
	//var toAdd = "alexandre";
	var genre =  req.body;
	Genre.addGenre(genre,function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genre/:_id',function(req,res){
	var _id=req.params._id;
	var genre = req.body;
	Genre.updateGenre(_id, genre, { multi: true },function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/genre/:_id',function(req,res){
	var _id=req.params._id;
	Genre.deleteGenre(_id,function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//app.get('/api/');

app.get('/api/books',function(req,res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/book/:_id',function(req,res){
	//res.send(req.params._id);
	var id=req.params._id;
	Book.getBookById(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books',function(req,res){
	var book =  req.body;
	Book.addBook(book,function(err, genre){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books',function(req,res){
	var book =  req.body;
	Book.addBook(book,function(err, genre){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/book/:_id',function(req,res){
	var _id=req.params._id;
	var book = req.body;
	Book.updateBook(_id, book, {},function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/book/:_id',function(req,res){
	var _id=req.params._id;
	Book.deleteBook(_id,function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});



app.listen(3000);
console.log('Running on port 3000...');