const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Roles = new Schema({
    Id: {
      type: Number
    },
    Nombre: {
        type: String
    },
    Estado: {
        type: String
    },
    Fecha_creacion: {
        type: String
    }
});

module.exports = mongoose.model("Roles", Roles);
