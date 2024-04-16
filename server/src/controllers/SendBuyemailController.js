
const nodemailer = require('nodemailer');

const sendmailbuy = async (email) => {
    console.log(email);


    const emailmarce = "marcelaciappini@gmail.com"
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
            to: emailmarce,
            subject: ` ${email.email} ¡Ha comprado un producto!`,
            html: `
                <p style="font-size: 18px; font-weight: bold;">¡Una nueva compra en tu web!</p>
               
                <p>¡Queremos comunicarte que ${email.email} ha hecho una compra en tu sitio web por favor verifica tu mercadopago!</p>
               
            `
        });

     
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = sendmailbuy
