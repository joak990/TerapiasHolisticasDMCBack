const { Curso } = require('../db');

const getCursos = async () => {
    try {
        // Especifica las columnas que deseas obtener, incluyendo 'contents'
        const cursos = await Curso.findAll({
            attributes: [ 'id',"nombre","descripcion","precio","imagen","isDeleted","createdInDb","contents"],
        });

        return cursos;
    } catch (error) {
        console.error('Error al obtener cursos:', error);
        throw error;
    }
}

module.exports = getCursos;
