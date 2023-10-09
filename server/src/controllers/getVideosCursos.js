const { Video, Curso } = require('../db');

const getVideos = async ({id}) => {
    try {
        // const cursoIdNumber = Number(cursoId);
        
        const myVideos = await Video.findAll({
            where: { CursoId: id }
        });

        console.log(myVideos);
        return myVideos;
    } catch (error) {
        console.error('Error al obtener videos:', error);
        throw error;
    }
}

module.exports = getVideos;
