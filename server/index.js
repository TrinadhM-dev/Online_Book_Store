const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Book Store Server is Running!!')
})


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().then(() => console.log("MongoDB success!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
