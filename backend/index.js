const express = require('express')
const mongoose= require('mongoose');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000


 async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
  res.send('Hello Worl d!!!')
});
 }
 main().then(() => console.log("mongodb")).catch(err => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
