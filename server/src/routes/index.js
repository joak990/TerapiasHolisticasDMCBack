const  { Router } = require ('express');
const UsersRouter = require('./users');

const router = Router();

router.use("/", UsersRouter);

module.exports= router