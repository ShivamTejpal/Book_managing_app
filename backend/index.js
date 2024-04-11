const express = require('express');
const { addBook, updateBook } = require('./types');
const { book_app } = require('./db');
const app = express()
const cors= require("cors")

app.use(express.json());

app.post('/book_app', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = addBook.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await book_app.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Book added"
    })
})

app.get('/books', async function(req, res) {
    const books= await book_app.find({});
    console.log(books)
    res.json({
        books
    })
  
})

app.put('/completed',async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateBook.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await book_app.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"You have read this book"
    })
    
  
})

app.listen(3000);