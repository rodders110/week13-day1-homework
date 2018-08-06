const express = require('express');
const filmRouter = new express.Router();

let film = function(title, producer){
    this.title = title;
    this.producer = producer;
};

let film1 = new film("Lord of the the Rings: The Fellowship of the ring", "Peter Jackson");
let film2 = new film("Trainspotting", "Danny Bolye");
let film3 = new film("The Hobbit", "Peter Jackson");

const films = [film1, film2, film3];

filmRouter.get('/', function(req, res){
    res.json(films);
})

filmRouter.post('/', function(req, res){
    films.push(req.body.film);
    res.json(films);
})

filmRouter.put('/:id', function(req, res){
    let index = req.params.id;
    films[index] = req.body.film;
    res.json(films);
})

filmRouter.delete('/:id', function(req, res){
    let index = req.params.id;
    films.splice(index, 1);
    res.json(films);
})

filmRouter.get('/:id', function(req, res){
    let id = req.params.id;
    res.json(films[id]);
})
module.exports = filmRouter