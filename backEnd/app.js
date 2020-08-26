const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

//Routes
const postsRoutes = require('./routes/posts');

app.use('/posts',postsRoutes);

app.get('/',(req,res) =>{
    res.send("We are on home")
})

//Connect to DB
mongoose.connect(process.env.DB_CONECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connected to db")
})

//Listen
app.listen(3000)