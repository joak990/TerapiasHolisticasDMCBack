const express = require('express');
const { createcomments } = require('../controllers/CreateComments');
const CommentsRouter = express.Router()

CommentsRouter.post('/comments',async(req,res ) => {
    try {
        const {id,Contenido,curso,rating} = req.body
        const comments = await createcomments({id,Contenido,curso,rating})
       
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = CommentsRouter