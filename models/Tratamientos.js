const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Tratamiento = new Schema({
    Id: {
      type: Number
    },
    Estado: {
        type: Number
    },
    Descripcion: {
        type: String
    },
    Fecha_creacion: {
        type: String
    },
    Nombre: {
        type: String
    },
    Ruta: {
        type: String
    },
    Icon: {
      type: String
    }
});

module.exports = mongoose.model("Tratamiento", Tratamiento);
