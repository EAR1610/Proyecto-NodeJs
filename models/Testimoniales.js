import Sequelize from 'sequelize'
import db from '../config/db.js'

export const Testimonial = db.define('mistestimonios',{ //Se insertan registros en la tabla 'mistestimonios'
    nombre : {
        type : Sequelize.STRING
    },

    correo : {
        type : Sequelize.STRING
    }, 

    mensaje : {
        type : Sequelize.STRING
    }
})