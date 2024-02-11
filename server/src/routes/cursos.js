const express = require('express');
const Cursorouter = express.Router()

const  getCursos = require('../controllers/getCursos.js')
const  getCursoPago = require('../controllers/getCursoPago.js')
const  getmycourses = require('../controllers/getAllMyCourses.js')
const  sendmailbuy = require('../controllers/BuyEmailnotiController.js')
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

Cursorouter.post('/miscursos',async (req, res ) => {
    try {
        const {email} = req.body
        const Mycourses = await  getmycourses({email});
        res.status(200).json(Mycourses)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})


Cursorouter.post('/buymail',async (req, res ) => {
    try {
        const {email} = req.body
        const buyemailsend = await  sendmailbuy({email});
        res.status(200).json(buyemailsend)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = Cursorouter