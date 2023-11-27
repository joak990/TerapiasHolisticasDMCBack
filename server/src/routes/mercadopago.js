const express = require('express');
const mercadoPagoRouter = express.Router()
const mercadopago = require('mercadopago')

mercadoPagoRouter.post("/mercado_pago",  async (req, res) => {

  try {
    // Configurar la preferencia de MercadoPago
    const preference = {
      items: [
        {
          title: req.body.title,
          description: "cosa para comprar",
          unit_price: req.body.price,
          currency_id: "ARS",
          quantity: req.body.quantity,
        },
      ],
      back_urls: {
        "success": "https://amazing-buttercream-47d324.netlify.app/success",
        "failure": "https://amazing-buttercream-47d324.netlify.app/error",
        "pending": ""
      },
      auto_return: "approved",
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [
        
                  {
                            id: "credit_card"
                  },
                  {
                    id: "ticket"
                  }]
      }
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json( { id: response.body.id });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).send(error.message);
  }
});



module.exports = mercadoPagoRouter;
