const Book = require("./book.models");

const postABook = async(req, res) =>{
    try{
        const newBook = await new Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"message1",book:newBook})
    }
    catch(error){
        console.error("error",error);
        res.status(500).send({message:"failed to create book"})
    }
}

const getAllBooks = async(req,res) =>{
    try{
        const books =await Book.find();
        res.status(200).send({message:"posted succesfully",book:newBook})
    }
    catch(error){
        console.log("Error fetching",error);
        res.status(500).send({message:"Faild to fetch"})
    }
}

module.exports ={
    postABook,
    getAllBooks
}