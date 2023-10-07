const express = require('express');
const Cursorouter = express.Router()

const  getCursos = require('../controllers/getCursos.js')
const  getCursoPago = require('../controllers/getCursoPago.js')

Cursorouter.get('/',async (req, res ) => {
    try {
        const allCursos = await  getCursos();
        res.status(200).json(allCursos)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

Cursorouter.post('/pago',async (req, res ) => {
    try {
        const {id , email} = req.body
        const CursoPago = await  getCursoPago({id,email});
        res.status(200).json(CursoPago)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = Cursorouter