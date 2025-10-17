const express = require('express');
const { postABook, getAllBooks } = require('./book.controller');
const router = express.Router();

//post book
router.post("/create-book",postABook)
//get all book
router.post("/create-book",postABook)

router.get("/",getAllBooks)
module.exports = router;