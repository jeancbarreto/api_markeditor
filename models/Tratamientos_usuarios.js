const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Tratamientos_usuarios = new Schema({
    Id: {
      type: Number
    },
    Id_tratamiento: {
        type: Number
    },
    Id_usuario: {
        type: Number
    }
});

module.exports = mongoose.model("Tratamientos_usuarios", Tratamientos_usuarios);
