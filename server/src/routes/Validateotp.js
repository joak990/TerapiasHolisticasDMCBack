const express = require('express');
const {  verifyOTP } = require('../controllers/VerifiedOtp');
const ValidateRouter = express.Router()

ValidateRouter.post('/validateop',async(req,res ) => {
    try {
        const {code,email} = req.body
      
       const validate = await verifyOTP(email,code)
        res.status(200).json(validate);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})
module.exports = ValidateRouter