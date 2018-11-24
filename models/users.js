const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Users = new Schema({
    Id: {
      type: Number
    },
    Nombre: {
        type: Number
    },
    Apellido: {
        type: String
    },
    Dni: {
        type: String
    },
    Fecha_creacion: {
        type: String
    },
    Estado: {
        type: Number
    },
    Rol: {
        type: Number
    },
    Tratamiento: {
        type: Number
    },
    Descripcion_tratamiento: {
        type: String
    }
});

module.exports = mongoose.model("Users", Users);
