const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    yearOfPublish: {
        type : Number,
        required: true
    },
    isbn: {
        type: Number,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Book', bookSchema);