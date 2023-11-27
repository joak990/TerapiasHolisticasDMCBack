const express = require('express');
const UsersRouter = express.Router();

const { createUser } = require( '../controllers/CreateUsers.js');
const { validateUsers } = require( '../controllers/ValidateUser.js');
const sendrecovery = require('../controllers/SendRecovery.js');
const recoverypass = require('../controllers/RecoveryPass.js');
const reSendRecovery  = require('../controllers/ReSendRecovery.js');

UsersRouter.post("/users", async (req,res) => {
    try {
        
        const {id, name, email, password, type, isDeleted, uid} = req.body
        const dataUser = await createUser({ id, name, email, password, type, isDeleted, uid })
        res.status(200).send(dataUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

UsersRouter.post("/validate", async (req,res) => {
    try {
        
        const {email, password} = req.body
        const validateUser = await validateUsers(email, password)
        res.status(200).send(validateUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


UsersRouter.post("/send-recovery", async (req,res) => {
    try {
        
        const {email} = req.body
        console.log(email,"s");
        const recoverypassword = await sendrecovery(email)
        res.status(200).json(recoverypassword);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


UsersRouter.put("/recovery", async (req,res) => {
    try {
        
        const {email,password} = req.body
        const recoveryfinish = await recoverypass(email,password)
        res.status(200).json(recoveryfinish);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


UsersRouter.post("/resendcode", async (req,res) => {
    try {
        
        const {email} = req.body
        
        const resendactive = await reSendRecovery(email)
        res.status(200).json(resendactive);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports =  UsersRouter;