const  { Router } = require ('express');
const TerapiaRouter = require('./terapia');

const router = Router();

router.use("/", TerapiaRouter);

module.exports= router