const express = require('express');
const Book = require('./book_Schema');
const router = express.Router();


//frontend => backend =>controller => book schema => database => send to server => back to frontend
//Import Controllers..
//post a book
router.post('/create-book',async(req,res)=>{
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:'Book Created Successfully!',Book});
    } catch (error) {
        console.log("Error created while creating a book!",error);
        res.status(500).send({message:`Failed`});
    }
})

//getting all the books

router.get('/',async(req,res)=>{
    try {
        const books = await Book.find().sort({createdAt:-1});
        res.status(200).send({message:'Books Retrived Successfully!',books});
    } catch (error) {
        res.status(401).send({message:'Error in getting books'});
    }
})

//get a single instance of data
router.get('/:id',async(req,res)=>{
    try {
        const {id} = req?.params
        const book = await Book.findById(id);
        if(!book) {
            return res.status(404).send({message:"Not Found"});
        }
        else {
            res.status(200).send({message:"Book with the Retrived Successfully!",book});
        }

    } catch (error) {
        res.status(500).send({message:'Book Server error!',error});
    }
})

//update an instance

router.put("/:id",async(req,res)=>{
try {
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body , {new : true});
    if(!updatedBook) {
        return res.status(404).send({message:"Not Found"});
    }
    else {
         res.status(200).send({message:"Current Book is", updatedBook}); 
    }
} catch (error) {
    console.log("Error updating book!",error);
    res.status(500).send({message:"Failed to update the book"});
    
}
})

//Delete method

router.delete("/:id",async(req,res) =>{
    try {
            const {id} = req.params;
            const deleteBook = await Book.findByIdAndDelete(id);
            if(!deleteBook) {
                return res.status(404).send({message:"Not Found"});
            } 
            else {
                res.status(200).send({message:"Current Book is Deleted SuccessFully!", book:deleteBook}); 
            }

         } catch (error) {
        res.status(500).send({message:"Failed to update the book!"});
    }})

module.exports = router;