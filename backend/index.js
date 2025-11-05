const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(express.json());
app.use(cors({
  
    origin: ['http://localhost:5173'],
    credentials:true,
}));
const bookRoutes = require('./src/books/books.route')
const orderRouter = require('./src/orders/order.route')
const userRouter = require('./src/users/user.route')
const adminRouter = require('./src/stats/admin.stats')
app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRouter)
app.use("/api/auth", userRouter)
app.use("/api/admin",userRouter)
async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/",(req, res) => {
  res.send('This is my program');
});
 }
 main().then(() => console.log("mongodb")).catch(err => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
