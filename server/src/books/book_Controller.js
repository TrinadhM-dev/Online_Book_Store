
const postBook = async(req,res)=>{
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:'Book Created Successfully!',Book});
    } catch (error) {
        console.log("Error created while creating a book!",error);
        res.status(500).send({message:`Failed`});
    }
}

//get All books

const getAllBooks = async(req,res)=>{
    try {
        const books = await Book.find();
        res.status(200).send({message:'Books Retrived Successfully!',books});
    } catch (error) {
        res.status(401).send({message:'Error in getting books'});
    }
}


module.exports = {
    postBook ,
    getAllBooks
}
