const express = require('express');
const Mailerrouter = express.Router()

const emailController = require('../controllers/NodeMailer.js');
const sendbookorder = require('../controllers/BookOrderController');

Mailerrouter.post('/',async(req,res ) => {
    try {
        const {email} = req.body
        const emailUser = await emailController({email})
        res.status(200).json(emailUser);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})


Mailerrouter.post('/book',async(req,res ) => {
    try {
        const {nombre,apellido,email,telefono} = req.body
        console.log(nombre, 'nombre');
        console.log(apellido, 'apellido');
    const response = await sendbookorder({nombre,apellido,email,telefono})
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = Mailerrouter