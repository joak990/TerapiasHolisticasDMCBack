const {Comentario, User} = require('../db')

const getAllComments = async ({id}) => {
    try {

        const ComentariosCursos = await Comentario.findAll({
            where:{Curso_id:id},
            include : [{model: User ,  attributes: ['name']}]
        })


        return ComentariosCursos
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllComments
}