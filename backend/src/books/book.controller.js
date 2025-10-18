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

const getAllBooks = async(req, res) =>{
    try{
        const books =await Book.find().sort({ createdAt: -1});;
        res.status(200).send({books})
    }
    catch(error){
        console.error("Error fetching",error);
        res.status(500).send({message:"Faild to fetch"})
    }
}

const SingleBook = async(req,res) =>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id)
        if(!book){
            res.status(404).send({message:
                "Book not found"
            })
        }
        res.status(200).send(book)
    }
    catch(error){
        console.error(error);
        res.status(500).send({message:"Error occured when fetching book"})
    }
}

const UpdateBook =async (req,res) =>{
    try {
        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id,req.body,{new:true});
       
        if(!updateBook){
            res.status(404).send({message:"Not found"})
        }
        else{
             res.status(200).send({updateBook});
        }
    } catch (error) {
        console.error("Error when updating")
        res.status(500).send({message:error})
    }
}

const DeleteBook =async (req, res) =>{
    try {
        const {id} =req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if(!deleteBook){
            res.status(404);
            res.send("Page Not Found");
        }
        else{
            res.status(200);
            res.send({message:"Successfully Delete the book"})
        }
    } catch (error) {
        console.error({error});
        res.status(500).send({error})
        
    }
};
module.exports ={
    postABook,
    getAllBooks,
    SingleBook,
    UpdateBook,
    DeleteBook
}