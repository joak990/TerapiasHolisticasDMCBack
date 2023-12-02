const {Libro } = require('../db');

const getLibros = async () => {
    try {

        const books = await Libro.findAll({});

        return books;
    } catch (error) {
        console.error('Error al obtener libros:', error);
        throw error;
    }
}

module.exports = getLibros;
