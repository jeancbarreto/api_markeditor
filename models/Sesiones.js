const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Sesiones = new Schema({
    Id: {
      type: Number
    },
    Fecha_inicio: {
        type: String
    },
    Log: {
        type: String
    }
});

module.exports = mongoose.model("Sesiones", Sesiones);
