const { User } = require('../db');

const verifyOTP = async (email, code) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return false;
    }

    if (user.otp === code) {
      // OTP válido, establece un temporizador para eliminarlo después de 1 minuto
      setTimeout(async () => {
        try {
          // Borra el OTP después de 1 minuto
          await User.update({ otp: 0 }, { where: { email } });

          console.log('El OTP ha sido eliminado después de 1 minuto.');
        } catch (error) {
          console.error('Error al eliminar el OTP:', error);
        }
      }, 2 * 60 * 1000); 
      return true;
    }

    return false;
  } catch (error) {
    throw new Error(error);
  }
};




module.exports = {
  verifyOTP,
};
