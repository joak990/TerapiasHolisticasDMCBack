const  { Router } = require ('express');
const UsersRouter = require('./users');
const Mailerrouter = require('./nodeMailer');
const Cursorouter = require('./cursos')

const router = Router();

router.use("/", UsersRouter);
router.use("/send-email", Mailerrouter)
router.use("/cursos", Cursorouter)

module.exports= router