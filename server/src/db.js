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
const MyVideos = require('./models/VideosCursosModals')

  const poll = new pg.Pool({connectionString:"postgres://terapiasholisticas:7eDKfa6SAJnrhX90MSBx62NKbRzP00i1@dpg-ckk5b0cl4vmc73fq5a0g-a.ohio-postgres.render.com/terapiasdb_ra8m"})

 const sequelize = new Sequelize({
    dialect: 'postgres',
    pool: poll,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Puedes ajustar esto según tus necesidades
        }
    },
});


UsuarioModels(sequelize)
CursoModels(sequelize)
ComentarioModels(sequelize)
CalificacionesModels(sequelize)
MyCourses(sequelize)
MyVideos(sequelize)

const { User, Comentario, Calification , Curso , Video} = sequelize.models;


User.hasMany(Comentario);


Comentario.belongsTo(User)

//------------------

User.hasMany(Calification);


Calification.belongsTo(User)

//-----------------------------

User.belongsToMany(Curso, { through: 'Usuario_Curso', /* options */ });
Curso.belongsToMany(User, { through: 'Usuario_Curso', /* options */ });

//---------------------------

Curso.hasMany(Video)
Video.belongsTo(Curso)

//-------------------------

module.exports = {
    ...sequelize.models,
    conn: sequelize
}