
/**
 *     "_id": 1,
      "title": "How to Grow Your Online Store",
      "description": "Learn the best strategies to grow your online store in today's competitive market.",
      "category": "business",
      "trending": true,
      "coverImage": "book-1.png",
      "oldPrice": 29.99,
      "newPrice": 19.99
 * 
 * 
 */
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    "title":{
        type:String,
        required:true,
    },
    "description" : {
        type:String,
        required:true,
    },
    "category": {
        type:String,
        required:true,
    },
    "trending": {
        type:Boolean,
        required:true,
    },
    "coverImage" : {
        type:String,
        required:true,
    },
    "oldPrice": {
        type:String,
        required:true,
    },
    "newPrice":{
        type:Number,
        required:true,
    },
    createdAt:{
        type: Date,
        default:Date?.now
    }

  },{timestamps: true});

  const Book = mongoose.model('Book', bookSchema);

  module.exports = Book;