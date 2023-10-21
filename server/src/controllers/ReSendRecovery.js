const nodemailer = require('nodemailer');
const { User } = require('../db');

const reSendRecovery = async (email) => {
    try {
        function generateRandomOTP() {
            return Math.floor(1000 + Math.random() * 9000);
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return false
        } else {
            otp = generateRandomOTP()
            await user.update({otp:otp})

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
            return true
        }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

module.exports = reSendRecovery