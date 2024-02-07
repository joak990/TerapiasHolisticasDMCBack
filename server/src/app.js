const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const mercadopago = require('mercadopago')
const app = express()
mercadopago.configure({
    access_token:"APP_USR-5121552826806861-101012-78d94ca10774783a62881baf498db34b-605411115"
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