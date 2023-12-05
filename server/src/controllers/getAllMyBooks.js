
const { User, Libro, Usuario_Libro } = require('../db');
const getallmybooks = async ({ email }) => {
    try {
        const userDb = await User.findOne({
            where: { email: email }
        })

        if (userDb && userDb.isDeleted) {
            return userDb.isDeleted
        }

        const libroDb = await Usuario_Libro.findAll({
            where: { UserId: userDb.id }
        })

        const libroIds = libroDb.map((libro) => libro.LibroId);

        const LibrosAll = await Libro.findAll({
            where: { id: libroIds }
        })

        console.log(LibrosAll, 'LibrosAll');

        return LibrosAll

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getallmybooks