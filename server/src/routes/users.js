const express = require ('express');
const UsersRouter = express.Router();

const { createUser } = require( '../controllers/CreateUsers.js');


UsersRouter.post("/users", async (req,res) => {
    try {
        
        const {id, name, email, password, type, isDeleted, uid} = req.body
        const dataUser = await createUser({ id, name, email, password, type, isDeleted, uid })
        res.status(200).send(dataUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


module.exports =  UsersRouter;