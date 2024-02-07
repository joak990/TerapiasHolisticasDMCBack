const { User } = require('../db');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
    try {
        function generateRandomOTP() {
            return Math.floor(1000 + Math.random() * 9000);
        }

        let root = user.uid ? 'google' : 'register';
        let otp = root === 'register' ? generateRandomOTP() : 0;

        const userDb = await User.findOne({
            where: { email: user.email }
        });

        if (userDb && userDb.isDeleted) {
            return userDb.isDeleted;
        }

        if (userDb) {
            return {
                id: userDb.id,
                email: userDb.email,
                name: userDb.name,
                root,
                isDeleted: userDb.isDeleted,
                duplicated: true
            };
        }

        let hashedPassword;
        if (root === 'register') {
            hashedPassword = await bcrypt.hash(user.password, 10);
        } else {
            // Si es de Google, no se realiza el hash de la contraseña
            hashedPassword = user.password;
        }

        const newUser = await User.create({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            type: user.type,
            root,
            isDeleted: true,
            uid: user.uid,
            otp,
        });

        if (newUser) {
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
            }, 2 * 60 * 1000);
        }

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createUser
};
