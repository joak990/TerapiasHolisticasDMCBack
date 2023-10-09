const  { Router } = require ('express');
const UsersRouter = require('./users');
const Mailerrouter = require('./nodeMailer');
const Cursorouter = require('./cursos')
const Videosrouter = require('./videos')

const router = Router();

router.use("/", UsersRouter);
router.use("/send-email", Mailerrouter)
router.use("/cursos", Cursorouter)
router.use("/videos", Videosrouter )

module.exports= router