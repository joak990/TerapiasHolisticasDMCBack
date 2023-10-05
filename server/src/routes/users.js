const express = require('express');
const UsersRouter = express.Router();

const { createUser } = require( '../controllers/CreateUsers.js');
const { validateUsers } = require( '../controllers/ValidateUser.js');

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


module.exports =  UsersRouter;