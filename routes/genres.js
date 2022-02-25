const {Genre, validate} = require('../models/genre');
const express = require('express');
const router = express.Router();

const {Response} = require('../tools/response/response');


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    return Response.respond(res, genres)
});


router.post('/', async (req, res) => {
    //validate input data
    const {error} = validate(req.body);
    if (error) return Response.respondValidationError(res, error)
    //save new genre into database
    let genre = new Genre({name: req.body.name});
    genre = await genre.save();
    return Response.respondCreated(res, genre)
});


router.put('/:id', async (req, res) => {

    const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name}, {
        new: true
    });
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    return Response.respondUpdated(res, genre)
});


router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if (!genre) Response.respondNotFound(res, 'The genre with the given ID was not found.')
    return Response.respondDeleted(res, genre)
});


router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    return Response.respond(res, genre)
});


module.exports = router;