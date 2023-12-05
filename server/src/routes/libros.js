const express = require('express');
const LibrosRouter = express.Router()
const  getLibros = require('../controllers/getLibros.js')
const  getbookpago = require('../controllers/getBookPago.js')
const  getallmybooks = require('../controllers/getAllMyBooks.js')
LibrosRouter.get('/',async (req, res ) => {
    try {
        const allbooks = await  getLibros();
        res.status(200).json(allbooks)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

LibrosRouter.post('/pagobooks',async (req, res ) => {
    try {
        const {id , email} = req.body
        const MyBooks = await getbookpago ({id,email});
        res.status(200).json(MyBooks)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})


LibrosRouter.post('/mybooks',async (req, res ) => {
    try {
        const {email} = req.body
        const mybooks = await  getallmybooks({email});
        res.status(200).json(mybooks)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})



module.exports = LibrosRouter