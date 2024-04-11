const express = require('express');
const { addBook, updateBook } = require('./types');
const app = express()

app.use(express.json());

app.post('/book_app', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = addBook.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
  
})

app.get('/book_app', (req, res) => {
  
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateBook.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
  
})

