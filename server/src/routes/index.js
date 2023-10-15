const  { Router } = require ('express');
const UsersRouter = require('./users');
const Mailerrouter = require('./nodeMailer');
const Cursorouter = require('./cursos')
const Videosrouter = require('./videos')
const mercadoPagoRouter = require('./mercadopago')
const CommentsRouter = require('./Comments');
const ValidateRouter = require('./Validateotp');
const router = Router();

router.use("/", UsersRouter);
router.use("/send-email", Mailerrouter)
router.use("/cursos", Cursorouter)
router.use("/videos", Videosrouter )
router.use("/",mercadoPagoRouter )
router.use("/",CommentsRouter )
router.use("/",ValidateRouter )
module.exports= router