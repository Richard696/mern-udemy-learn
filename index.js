const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db')

const app = express()
dotenv.config()
connectDB();

app.get('/', (req, res)=>{
    res.status(200).send({msg: "Hello world"});
});

const PORT = process.env.PORT || 4800
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}.`)
})