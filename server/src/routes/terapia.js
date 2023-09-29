const express = require ('express');
const MoviesRouter = express.Router();

const { getApp } = require( '../controllers/getAppTerapia.js');


MoviesRouter.get("/app", getApp);


module.exports =  MoviesRouter;