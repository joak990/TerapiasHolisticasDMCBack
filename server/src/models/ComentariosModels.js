const { DataTypes } = require( 'sequelize');

module.exports = (sequelize) => {
    sequelize.define("Comentario", {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Curso_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Contenido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    }, { timestamps: false });
};