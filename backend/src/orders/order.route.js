const express = require('express');
const router = express.Router();
const { createAOrder, getOrderByEmail } = require('./order.controller');


router.post("/",createAOrder)

router.get("/email/:email",getOrderByEmail);
module.exports = router;