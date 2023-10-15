const { User } = require('../db');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
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
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await User.create({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            type: user.type,
            root: root,
            isDeleted: user.isDeleted,
            uid: user.uid,
            otp: otp,
            
        })
        if(newUser){
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'patrickmurayari03@gmail.com',
                    pass: 'okzbxjuqdtdubzti'
                },
            });
            const info = await transporter.sendMail({
                from: 'patrickmurayari03@gmail.com',
                to: user.email,
                subject: '¡Solo falta un paso para tener tu cuenta en Terapias Holiticas DMC!',
                html: `
                    <p style="font-size: 18px; font-weight: bold;">Falta poco para tener tu cuenta en Terapias Holiticas DMC. ¡Ya casi estás listo/a!</p>
                    <p>Tu código de seguridad es <span style="font-weight: bold;">${otp}</span>. Por favor, no compartas este código con nadie.</p>
                `
            });
            setTimeout(async () => {
                try {
                    await newUser.update({ otp: 0 });
                    console.log('El OTP ha sido eliminado después de 1 minuto para el email:', user.email);
                } catch (error) {
                    console.error('Error al eliminar el OTP:', error);
                }
            },2 * 60 * 1000); 
        }
        
        console.log(otp);
        console.log(user.email);
        return newUser
    } catch (error) {
        
        // console.log(error);
        throw new Error(error);
    }
}


module.exports = {
    createUser
}