const { Libro, User } = require('../db');
const { Sequelize } = require('sequelize');


const getbookpago = async (data) => {
    try {
        const { id, email } = data;

        // Buscar al usuario por su email
        const usuario = await User.findOne({
            where: { email },
        });
        console.log('usuario' , usuario.dataValues);

        // Buscar los cursos por sus IDs
        const libros = await Libro.findAll({
            where: { id: { [Sequelize.Op.in]: id } },
        });

        console.log('books', libros);

        // Asociar al usuario con los cursos en la tabla intermedia
        await usuario.addLibros(libros);

        return true;
    } catch (error) {
        throw new Error('Error al asociar books: ' + error.message);
    }
}

module.exports = getbookpago