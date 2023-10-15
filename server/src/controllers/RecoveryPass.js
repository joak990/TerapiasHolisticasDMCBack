const { User } = require('../db');
const bcrypt = require('bcrypt'); // Asegúrate de tener la biblioteca bcrypt instalada

const recoverypass = async (email, code, password) => {
  try {
    console.log(email,"emailhere");
    const user = await User.findOne({ where: { email: email } });

if(!user){
    return false
}

 // Verificar que el OTP coincida
 if (user.otp !== code) {
    return false; // OTP incorrecto
  }

    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    user.password = hashedPassword;
    await user.save();

    return true;

   


  } catch (error) {
    console.error('Error al recuperar la contraseña:', error);
    throw error;
  }
};

module.exports = recoverypass;
