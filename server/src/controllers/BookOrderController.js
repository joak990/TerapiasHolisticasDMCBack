const nodemailer = require('nodemailer');

const sendbookorder = async (data) => {
    try {
        console.log(data,'dataBOOK');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'patrickmurayari03@gmail.com',
                pass: 'okzbxjuqdtdubzti'
            },
        });

        const htmlMessage = `
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333; font-size: 24px;">¡Pedido de compra!</h1>
                <p style="margin: 10px 0; color: #555;">Nombre: ${data.nombre}</p>
                <p style="margin: 10px 0; color: #555;">Apellido: ${data.apellido}</p>
                <p style="margin: 10px 0; color: #555;">Email: ${data.email}</p>
                <p style="margin: 10px 0; color: #555;">Teléfono: ${data.telefono}</p>
            </div>
        `;

        const info = await transporter.sendMail({
            from: 'patrickmurayari03@gmail.com',
            to: data.email,
            subject: '¡Pedido de Compra!',
            html: htmlMessage
        });
     
        console.log('Correo enviado con éxito:', info.response);
        return true;
    } catch (error) {
        console.error('Error al enviar el correo:', error.message);
        return false;
    }
}

module.exports = sendbookorder;
