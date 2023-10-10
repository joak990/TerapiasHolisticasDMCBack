const { conn } = require('./src/db');
const cors = require('cors');
const server = require('./src/app.js'); 

const corsOptions = {
    origin: 'https://main--amazing-buttercream-47d324.netlify.app',
};

server.use(cors(corsOptions));

const PORT = 3001;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`Escuchando en el puerto http://localhost:${PORT}`);
    })
})