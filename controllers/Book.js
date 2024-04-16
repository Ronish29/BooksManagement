const Books = require('../models/Books');

exports.getAllBooks = async (req, res) => {
    try {
        const books =  await Books.find();

        if(books.length === 0) {
            return res.json({
                success:false,
                message: "No books found"
            })
        }

        return res.json({
            success: true,
            books,
            message: "All books retrieved"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.createNewBook = async (req, res) => {
    try {
        const requiredFields = ['title', 'author', 'publisher', 'yearOfPublish', 'isbn', 'genre'];

        const missingField = requiredFields.find(field => !req.body[field]);

        if (missingField) {
            return res.status(400).json({
                success: false,
                message: `${missingField} should not be null`
            });
        }

        const existingBook = await Books.findOne({ isbn: req.body.isbn });
        if (existingBook) {
            return res.status(400).json({
                success: false,
                message: `A book with ISBN ${req.body.isbn} already exists`
            });
        }

        const newBook = await Books.create({
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            yearOfPublish: req.body.yearOfPublish,
            isbn: req.body.isbn,
            genre: req.body.genre
        });

        return res.json({
            success: true,
            message: "Book created successfully",
            newBook
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}



exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publisher, yearOfPublish, genre } = req.body;

        if (!title && !author && !publisher && !yearOfPublish && !genre) {
            return res.status(400).json({
                success: false,
                message: "At least one field to update must be provided"
            });
        }

        
        const book = await Books.findById(id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

       
        if (req.body.isbn) {
            return res.status(400).json({
                success: false,
                message: "ISBN number cannot be updated"
            });
        }

        if (title) book.title = title;
        if (author) book.author = author;
        if (publisher) book.publisher = publisher;
        if (yearOfPublish) book.yearOfPublish = yearOfPublish;
        if (genre) book.genre = genre;

        
        await book.save();

        return res.json({
            success: true,
            message: "Book updated successfully",
            updatedBook: book
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBook = await Books.findByIdAndDelete(id);
        
        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        return res.json({
            success: true,
            message: "Book deleted successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
