
const nodemailer = require('nodemailer');

const sendmailbuy = async (email) => {
    console.log(email);
    try {
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
            from: 'marcelaciappini@gmail.com',
            to: email.email,
            subject: '¡Gracias por tu compra en Terapias Holísticas DMC!',
            html: `
                <p style="font-size: 18px; font-weight: bold;">¡Gracias por tu compra en Terapias Holísticas DMC!</p>
               
                <p>Hemos recibido tu compra y pronto tendrás acceso a nuestros cursos. Para ver los cursos adquiridos, haz clic en el siguiente enlace:</p>
                <a href="https://terapiasholisticasdmc.com.ar/mycourses" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Ver mis cursos adquiridos</a>
            `
        });

     
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = sendmailbuy
