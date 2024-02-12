const { Comentario, User, Libro } = require('../db');


const createbookComments = async ({ id, Contenido, libro, rating }) => {
    try {

        const userExists = await User.findOne({ where: { id: id } });
        const courseExist = await Libro.findOne({ where: { id: libro } });


        if (!userExists || !courseExist) {
            throw new Error('Usuario o curso no encontrado');
        }

        const newcomment = await Comentario.create({
            UserId: id,
            Curso_id: libro,
            Contenido: Contenido,
            isDeleted: false,
            rating: rating
        });

        return newcomment
    } catch (error) {
        console.error('Error al crear un comentario ', error);
        throw error;
    }
}




module.exports = {
    createbookComments
}