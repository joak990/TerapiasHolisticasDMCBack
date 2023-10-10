const server = require('express');
const mercadopago = require('mercadopago');
const mercadoPagoRouter = server.Router()
const { Preference } = require('mercadopago');
const { MercadoPagoConfig } = require('mercadopago');
const client = new MercadoPagoConfig({ accessToken: 'TEST-4803780874960261-052716-389e6a69c226b07864b895e61923a1c8-605411115' });
mercadoPagoRouter.post("/create_preference", (req, res) => {
    try {

        const preference = new Preference(client);

        preference.create({
            'items': [
                {
                    'title': req.body.title,
                    'quantity': req.body.quantity,
                    'currency_id': 'ARS',
                    'unit_price': req.body.price
                }
            ]
        }).then((result) => console.log(result))
            .catch((error) => console.log(error));
    } catch (error) {
        console.log(error);
    }


})

module.exports = mercadoPagoRouter