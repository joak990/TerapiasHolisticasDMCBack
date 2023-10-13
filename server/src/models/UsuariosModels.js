const { DataTypes } = require('sequelize');

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
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }, 
       otp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
       
       
    },{ timestamps: false });
};