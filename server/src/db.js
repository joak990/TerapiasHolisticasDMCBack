require('dotenv').config();
const pg = require('pg')
const { Sequelize } = require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

// const dogs = require('./models/Dog')
// const temperaments = require('./models/Temperaments')
const UsuarioModels = require('./models/UsuariosModels')
const CursoModels = require('./models/CursosModels')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
    dialectModule: pg,// set to console.log to see the raw SQL queries
});


UsuarioModels(sequelize)
CursoModels(sequelize)

const { User, Curso } = sequelize.models;

//Un usuarios puede tener muchos cursos
User.hasMany(Curso);

//Un curso puede pertecer a muchos usuarios
Curso.belongsTo(User)



module.exports = {
    ...sequelize.models,
    conn: sequelize
}