const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// database connection
const db = mysql.createPool({
  host: 'mysql_db',
  user: 'MYSQL_USER',
  password: 'MYSQL_PASSWORD',
  database: 'books'
})

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send({'message':'Hello World'});
});

// get all the books in the database
app.get('/get', (req, res) => {
  const SelectQuery = "select * from books_reviews"
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
})

// add a book to the database
app.post('/insert', (req, res) => {
  const bookName = req.body.bookName;
  const bookReview = req.body.review;
  const InsertQuery = "insert into books_reviews (book_name, book_review) values (?, ?)"
  db.query(InsertQuery, [bookName, bookReview], (err, result) => {
    console.log(result)
  })
})

// delete a book from the database
app.delete("/delete/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const DeleteQuery = "DELETE FROM books_reviews WHERE id = ?";
  db.query(DeleteQuery, bookId, (err, result) => {
    if (err) console.log(err);
  })
})

// update a book review
app.put("/update/:bookId", (req, res) => {
  const bookReview = req.body.reviewUpdate;
  const bookId = req.params.bookId;
  const UpdateQuery = "UPDATE books_reviews SET book_review = ? WHERE id = ?";
  db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
    if (err) console.log(err)
  })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);