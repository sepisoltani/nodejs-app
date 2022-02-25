const mongoose = require('mongoose');
const Joi = require('joi');

//genre mongoose schema
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    }
});

const Genre = mongoose.model('Genre', genreSchema);

//joi validation function
function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required()
    });
    return schema.validate(genre);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;