const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

app.get('/', (req, res) => {
    res.send(`Book Store Server is Running!!`)
})


async function main() {
    await mongoose.connect(process.env.DB_URL);
}
main().then(() => console.log("MongoDB success!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//mongodb+srv://admin:<db_password>@nodeexpressprojects.fv6ut.mongodb.net/
//admin //admin