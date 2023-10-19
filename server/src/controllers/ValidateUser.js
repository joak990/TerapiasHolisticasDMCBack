const { User } = require('../db');
const bcrypt = require('bcrypt');

const validateUsers = async (email, password, type) => {
    try {
        const user = await User.findOne({
            where: { email: email }
        });
        if(user.isDeleted === true){
            return {isDeleted:true}
        }

        if (user && user.isDeleted) {
            return user.isDeleted;
        }

        if (user) {
            // Utiliza bcrypt.compare para verificar la contraseña
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name
                };
            }

            return false; // La contraseña no coincide
        }

        return false; // El usuario no existe

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    validateUsers
}
