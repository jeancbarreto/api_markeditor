const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Musica_tratamiento = new Schema({
    Id: {
      type: Number
    },
    Url: {
        type: String
    },
    Type: {
        type: Number
    }
});

module.exports = mongoose.model("Musica_tratamiento", Musica_tratamiento);
