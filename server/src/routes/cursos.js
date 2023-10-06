const express = require('express');
const Cursorouter = express.Router()

const  getCursos = require('../controllers/getCursos.js')

Cursorouter.get('/',async (req, res ) => {
    try {
        const allCursos = await  getCursos();
        res.status(200).json(allCursos)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = Cursorouter