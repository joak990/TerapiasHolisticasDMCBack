const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const mercadopago = require('mercadopago')
const app = express()
mercadopago.configure({
    access_token:"APP_USR-458533110909946-021110-f6da8a5969c0e661e0dc1f37b295ddab-69433903"
})
app.use(express.json()); // Middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', routes);

module.exports = app;