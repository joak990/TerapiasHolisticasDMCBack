const { User } = require('../db');

const verifyOTP = async (email, code) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return false;
    }

    if (user.otp === code) {
        try {
         
          await User.update({ isDeleted: false }, { where: { email: email } });

          await User.update({ otp: 0 }, { where: { email } });

         
        } catch (error) {
          console.error('Error ', error);
        }
   
      return true;
    }

    
  } catch (error) {
    throw new Error(error);
  }
};




module.exports = {
  verifyOTP,
};
