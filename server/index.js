const { conn } = require('./src/db');
// const cors = require('cors');
const server = require('./src/app.js'); // Asegúrate de que la ruta sea correcta.


// const corsOptions = {
//     origin: 'https://pt-movies-front.vercel.app',
// };

// server.use(cors(corsOptions));

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Escuchando en el puerto http://localhost:${PORT}`);
})

