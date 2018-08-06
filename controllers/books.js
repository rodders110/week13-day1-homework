const express = require('express');
const bookRouter = new express.Router();

let book = function(title, author) {
    this.title = title;
    this.author = author;
};

let book1 = new book("Lord of the Rings", "JRR Tolkien");
let book2 = new book("Go set a Watchman", "Harper Lee");
let book3 = new book("Crime", "Irvine Welsh");

const books = [book1, book2, book3];

bookRouter.get('/', function(req, res){
    res.json(books);
})

bookRouter.post('/', function(req, res){
    books.push(req.body.book);
    res.json(books);
})

bookRouter.put('/:id', function(req, res){
    let index = req.params.id;
    books[index] = req.body.book;
    res.json(books);
})

bookRouter.delete('/:id', function(req, res){
    let index = req.params.id;
    books.splice(index, 1);
    res.json(books);
})

bookRouter.get('/:id', function(req, res){
    let id = req.params.id;
    res.json(books[id]);
})

module.exports = bookRouter