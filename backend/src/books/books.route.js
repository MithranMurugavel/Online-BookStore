const express = require('express');
const { postABook, getAllBooks, SingleBook, UpdateBook, DeleteBook } = require('./book.controller');
const router = express.Router();

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post book
router.post("/create-book",postABook)
router.get("/",getAllBooks)
router.get("/:id",SingleBook)
router.put("/edit/:id",UpdateBook)
router.delete("/delete/:id",DeleteBook);
module.exports = router;