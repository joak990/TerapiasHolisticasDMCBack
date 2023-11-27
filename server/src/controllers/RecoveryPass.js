const { User } = require('../db');
const bcrypt = require('bcrypt'); // Asegúrate de tener la biblioteca bcrypt instalada

const recoverypass = async (email, password) => {
  try {
    console.log(email,"emailhere");
    console.log(password,"paswwordhere");
    const user = await User.findOne({ where: { email: email } });

if(!user){
    return false
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
