const { DataTypes } = require('sequelize');

function generateRandom4DigitOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    root: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[0-9]{4}$/ // Valida que tenga exactamente 4 dígitos
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  // Para crear un nuevo usuario con un código OTP aleatorio:
  const newUser = {
    // Otras propiedades del usuario...
    otp: generateRandom4DigitOTP(), // Genera el código OTP
  };

  // Ahora crea el nuevo usuario en la base de datos usando sequelize.create(newUser);
}
