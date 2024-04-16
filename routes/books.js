const express = require('express');
const { getAllBooks, createNewBook, updateBook, deleteBook } = require('../controllers/Book');
const router = express.Router();

router.get('/getAllBooks',getAllBooks)
router.post('/createBook',createNewBook)
router.put('/updateBook/:id',updateBook)
router.delete('/deleteBook/:id', deleteBook)

module.exports = router;