const nodemailer = require('nodemailer');
const { User } = require('../db');

const emailController = async (data) => {
    try {

        const user = await User.findAll({
            where: {
                email: data.email
            }
        })
        if (user.length > 0) {
            return false
        } else {

            console.log(user, 'USERSSSS');
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'marcelaciappini@gmail.com',
                    pass: 'ruoriafmxevzofsg'
                },
            });

            const info = await transporter.sendMail({
                from: 'patrickmurayari03@gmail.com',
                to: data.email,
                subject: '¡Bienvenid@s a Terapias Holisticas!',
                text: "Estamos emocionados de que seas parte de esta comunidad en donde econtraras distintos tipos de talleres y cursos"
            });
            return true
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = emailController