const { DataTypes } = require( 'sequelize');

module.exports = (sequelize) => {
    sequelize.define("Video", {
        id: {
            type: DataTypes.STRING,
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
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDeleted: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        new: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });
};