const  { Router } = require ('express');
const UsersRouter = require('./users');
const Mailerrouter = require('./nodeMailer');

const router = Router();

router.use("/", UsersRouter);
router.use("/send-email", Mailerrouter)

module.exports= router