const { User } = require('../db');
const { Op } = require('sequelize');
const createUser = async (user) => {
    try {
        function generateRandomOTP() {
            return Math.floor(1000 + Math.random() * 9000);
        }
        let root = '';
        let otp = null
        user.uid ? (root = 'google') : (root = 'register');
       
       if(root === "register"){
        otp = generateRandomOTP()
       }else{
        otp= 0
       }
        const userDb = await User.findOne({
            where: { email: user.email }
        })
        if (userDb && userDb.isDeleted) {
            return userDb.isDeleted
        }
        // console.log(userDb)
        if (userDb) return {
            id: userDb.id,
            email: userDb.email,
            name: userDb.name,
            root: root,
            isDeleted : userDb.isDeleted,
            duplicated: true
        };

        const newUser = await User.create({
            name: user.name,
            email: user.email,
            password: user.password,
            type: user.type,
            root: root,
            isDeleted: user.isDeleted,
            uid: user.uid,
            otp: otp,
            
        })
        return newUser
    } catch (error) {
        
        // console.log(error);
        throw new Error(error);
    }
}


module.exports = {
    createUser
}