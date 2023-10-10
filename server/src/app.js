const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
// const { MercadoPagoConfig, Preference } = require("mercadopago");
// const mercadopago = require("mercadopago");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// Configuración CORS específica
app.use(cors({   
                origin: "https://main--amazing-buttercream-47d324.netlify.app/", 
                methods: ["GET", "POST", "PUT", "DELETE"], 
              }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);

// app.get("/", function (req, res) {
//   res.status(200).sendFile("index.html");
// });

// app.post("/create_preference", (req, res) => {
//   const client = new MercadoPagoConfig({
//     accessToken:
//       "TEST-5121552826806861-101012-3853530116d18905aa2b2006c53e0a72-605411115",
//   });

//   const preference = new Preference(client);

//   preference
//     .create({
//       items: [
//         {
//           title: "Meu produto",
//           quantity: 1,
//           currency_id: "BRL",
//           unit_price: 100,
//         },
//       ],
//     })
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// });

module.exports = app;
