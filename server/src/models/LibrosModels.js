const { DataTypes } = require( 'sequelize');

module.exports = (sequelize) => {
    sequelize.define("Libro", {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDeleted: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    }, { timestamps: false });
};