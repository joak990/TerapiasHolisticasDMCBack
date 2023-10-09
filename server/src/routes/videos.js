const express = require('express');
const Videosrouter = express.Router()

const getvideos = require('../controllers/getVideosCursos.js')

Videosrouter.get('/:id',async(req,res ) => {
    try {
        const {id} = req.params
        const getVideosCursos = await getvideos({id})
        res.status(200).json(getVideosCursos);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = Videosrouter