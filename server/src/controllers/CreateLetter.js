const { User } = require('../db');


const createLetter = async (email) => {
    try {
        const userall = await User.findAll({
            where: { email: email },
            attributes: ['id', 'uid', 'name', 'email', 'password', 'type', 'root', 'isDeleted', 'otp', 'newsletter'],
        });

        for (const user of userall) {
            user.newsletter = true;
            await user.save();
        }
      
        return userall
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = createLetter;