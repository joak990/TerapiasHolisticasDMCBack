const { conn } = require('./src/db');
const cors = require('cors');
const server = require('./src/app.js'); 

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
};

server.use(cors(corsOptions));

const PORT = 3001;

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Escuchando en el puerto http://localhost:${PORT}`);
    })
})