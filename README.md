# Book Management System

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed

### Installing Dependencies
```bash
npm install
```

### Running the server
```bash
npm run dev
```

### API Endpoints

## GET All Books
### GET http://localhost:4000/books/getAllBooks
Returns all the books in the database.

## Create a New Book
### POST http://localhost:4000/books/createBook
Creates a new book in the database.

Request Body (JSON):
```json
{
  "title": "Book1",
  "author": "Author1",
  "publisher": "Ronish",
  "yearOfPublish": 2018,
  "isbn": 2341,
  "genre": "Action"
}
```

## Update a Book
### PUT http://localhost:4000/updateBook/:_id
Updates the existing book details.

Request Body (JSON):
```json
{
  "title": "Bookxyz"
}
```

## Delete a Book
### DELETE http://localhost:4000/updateBook/:_id
Deletes the existing book from the database.
```
