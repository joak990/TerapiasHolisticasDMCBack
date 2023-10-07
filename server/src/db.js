require('dotenv').config();
const pg = require('pg')
const { Sequelize } = require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE
} = process.env;

// const dogs = require('./models/Dog')
// const temperaments = require('./models/Temperaments')
const UsuarioModels = require('./models/UsuariosModels')
const CursoModels = require('./models/CursosModels')
const ComentarioModels = require('./models/ComentariosModels')
const CalificacionesModels = require('./models/CalificacionesModels')
const MyCourses = require('./models/MyCoursesModals')

const sequelize = new Sequelize(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
    logging: false, 
    native:false,
    dialectModule: pg,// set to console.log to see the raw SQL queries
});



UsuarioModels(sequelize)
CursoModels(sequelize)
ComentarioModels(sequelize)
CalificacionesModels(sequelize)
MyCourses(sequelize)

const { User, Comentario, Calification , Curso} = sequelize.models;


User.hasMany(Comentario);


Comentario.belongsTo(User)

//------------------

User.hasMany(Calification);


Calification.belongsTo(User)

//-----------------------------

User.belongsToMany(Curso, { through: 'Usuario_Curso', /* options */ });
Curso.belongsToMany(User, { through: 'Usuario_Curso', /* options */ });

module.exports = {
    ...sequelize.models,
    conn: sequelize
}