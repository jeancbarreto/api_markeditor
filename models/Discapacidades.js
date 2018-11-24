const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Discapacidades = new Schema({
    Id: {
      type: Number
    },
    Nombre: {
        type: String
    },
    Estado: {
        type: Number
    },
    Fecha_creacion: {
        type: Number
    }
});

module.exports = mongoose.model("Discapacidades", Discapacidades);
