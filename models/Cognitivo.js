const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Cognitivo = new Schema({
    Id: {
      type: Number
    },
    Nombre: {
        type: String
    },
    Minutos: {
        type: Number
    }
});

module.exports = mongoose.model("Cognitivo", Cognitivo);
