const express = require('express');
const Book = require('./book_Schema');
const router = express.Router();



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

router.get('/getAllBooks',async(req,res)=>{
    try {
        const books = await Book.find();
        res.status(200).send({message:'Books Retrived Successfully!',books});
    } catch (error) {
        res.status(401).send({message:'Error in getting books'});
    }
})

//get a single instance of data
router.get('/getById/:_id',async(req,res)=>{
    try {
        const book = await Book.findById(req.params._id);
        if(!book) {
            return res.status(404).send({message:"Not Found"});
        }
        res.status(200).send({message:"Book with the Retrived Successfully!",book});
    } catch (error) {
        res.status(500).send({message:'Book Server error!',error});
    }
})

module.exports = router;    