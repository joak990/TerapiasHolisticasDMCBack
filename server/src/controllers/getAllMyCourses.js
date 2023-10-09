
const { User, Curso, Usuario_Curso } = require('../db');
const getmycourses = async ({ email }) => {
    try {
        const userDb = await User.findOne({
            where: { email: email }
        })

        if (userDb && userDb.isDeleted) {
            return userDb.isDeleted
        }

        const cursoDb = await Usuario_Curso.findAll({
            where: { UserId: userDb.id }
        })

        const cursoIds = cursoDb.map((curso) => curso.CursoId);

        const CursosAll = await Curso.findAll({
            where: { id: cursoIds }
        })

        console.log(CursosAll, 'cursosAll');

        return CursosAll

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getmycourses