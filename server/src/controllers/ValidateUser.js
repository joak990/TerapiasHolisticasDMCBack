const { User } = require('../db');

const validateUsers = async (email, password ,type) => {
    try {
        const EmailUser = await User.findOne({
            where: {email:email}
        })

        if (EmailUser && EmailUser.isDeleted) {
            return EmailUser.isDeleted
        }

        if (EmailUser) {
            if(EmailUser.password === password) {
                return {
                    id: EmailUser.id, 
                    email: EmailUser.email, 
                    name: EmailUser.name
                }; 
            }
            return false;
        }
        return false;

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    validateUsers
}