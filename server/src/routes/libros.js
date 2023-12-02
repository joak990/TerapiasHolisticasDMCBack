const express = require('express');
const LibrosRouter = express.Router()
const  getLibros = require('../controllers/getLibros.js')


LibrosRouter.get('/',async (req, res ) => {
    try {
        const allbooks = await  getLibros();
        res.status(200).json(allbooks)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})


module.exports = LibrosRouter