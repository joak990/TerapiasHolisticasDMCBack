const { Curso, User } = require('../db');
const { Sequelize } = require('sequelize');


const getCursosPago = async (data) => {
    try {
        const { id, email } = data;

        // Buscar al usuario por su email
        const usuario = await User.findOne({
            where: { email },
        });
        console.log('usuario' , usuario.dataValues);

        // Buscar los cursos por sus IDs
        const cursos = await Curso.findAll({
            where: { id: { [Sequelize.Op.in]: id } },
        });

        console.log('cursos', cursos);

        // Asociar al usuario con los cursos en la tabla intermedia
        await usuario.addCursos(cursos);

        return true;
    } catch (error) {
        throw new Error('Error al asociar cursos: ' + error.message);
    }
}

module.exports = getCursosPago