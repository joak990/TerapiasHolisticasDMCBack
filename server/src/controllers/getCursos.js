const { Curso } = require('../db');

const getCursos = async () => {
    try {
        const cursos = await Curso.findAll();
        return cursos;
    } catch (error) {
        console.error('Error al obtener cursos:', error);
        throw error;
    }
}

module.exports = getCursos