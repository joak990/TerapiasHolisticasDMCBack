const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Calification", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        idusuario: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cursoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
       
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
       
    }, { timestamps: false });
};