const express = require('express');
const CommentsRouter = express.Router()


const { createcomments } = require('../controllers/CreateComments');
const { getAllComments } = require('../controllers/getCommentsAll')

CommentsRouter.post('/comments', async (req, res) => {
    try {
        const { id, Contenido, curso, rating } = req.body
        const comments = await createcomments({ id, Contenido, curso, rating })
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

CommentsRouter.post('/all_comments/:id', async (req, res) => {
    try {
        const { id } = req.params
        const allComments = await getAllComments({id}) 
        res.status(200).json(allComments);
    } catch (error) {
        res.status(400).send({ error: error.mesage })
    }
})



module.exports = CommentsRouter