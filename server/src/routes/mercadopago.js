
const express = require('express');
const mercadoPagoRouter = express.Router()
const mercadopago = require('mercadopago')




mercadoPagoRouter.post("/mercado_pago",  async (req, res) => {

    try {
        //- Configurar la preferencia de MercadoPago
    
        console.log(req.body);
    
        const preference = {
          items: [
            {
           
              title: req.body.title,
              unit_price: req.body.price,
              currency_id: "ARS", // La moneda en la que se cotiza el producto
              quantity: req.body.quantity, // Agregar la cantidad deseada aquí
            },
          ],
        };
    
        const response = await mercadopago.preferences.create(preference);
        res.status(200).send({ response });
      } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).send(error.message);
      }


})

module.exports = mercadoPagoRouter
