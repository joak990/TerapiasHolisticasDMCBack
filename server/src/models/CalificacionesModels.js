const { DataTypes } = require( 'sequelize');

module.exports = (sequelize) => {
    sequelize.define("Calificacio", {
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
        cursoid: {
            type: DataTypes.INTEGER,
            allowNull: true,
           
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isdeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    
    }, { timestamps: false });
};