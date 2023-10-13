const { Comentario,User,Curso } = require('../db');


const createcomments = async ({id,Contenido,curso,rating}) => {
    try {
        const userExists = await User.findOne({ where: { id: id } });
        const courseExist = await Curso.findOne({ where: { id: curso } });
       
        if (!userExists || !courseExist) {
            throw new Error('Usuario o curso no encontrado');
          }

          const newcomment = await Comentario.create({
            UserId: id,
            Curso_id: curso,
            Contenido: Contenido,
            isDeleted: false,
            rating:rating
          });

      return newcomment
    } catch (error) {
        console.error('Error al crear un comentario ', error);
        throw error;
    }
}




module.exports = {
    createcomments
}