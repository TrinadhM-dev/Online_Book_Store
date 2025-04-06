const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const bookRoutes = require('./src/books/book_Route');
const cors = require('cors');
require('dotenv').config()

//Midddlewares
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173/'],
    credentials: true
}))


app.get('/', (req, res) => {
    res.send(`Book Store Server is Running!!`)
})

//routes
app.use('/api/books',bookRoutes);


//DB connections..
async function main() {
    await mongoose.connect(process.env.DB_URL);
}
main().then(() => console.log("MongoDB success!")).catch(err => console.log(err));


//Listening to the port 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})