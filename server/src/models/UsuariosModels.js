const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid'); // Importa la función uuidv4

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
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
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
            type: DataTypes.STRING, // Puedes usar STRING para el código OTP
            allowNull: true,
            validate: {
                is: /^[0-9]{4}$/ // Valida que tenga exactamente 4 dígitos
            }
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    });

    // Genera un código OTP de 4 dígitos al crear un nuevo usuario
    sequelize.addHook('beforeCreate', (user) => {
        user.otp = Math.floor(1000 + Math.random() * 9000).toString(); // Genera un número aleatorio de 4 dígitos
    });
};
