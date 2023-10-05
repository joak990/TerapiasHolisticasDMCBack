const express = require('express');
const Mailerrouter = express.Router()

const emailController = require('../controllers/NodeMailer.js')

Mailerrouter.post('/',async(req,res ) => {
    try {
        const {email} = req.body
        const emailUser = await emailController({email})
        res.status(200).json(emailUser);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = Mailerrouter