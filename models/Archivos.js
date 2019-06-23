const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
  .tz("America/Santiago")
  .format();

const { Schema } = mongoose;

const Archivos = new Schema({
  archivo: {
    name: {
      type: String
    },
    type_: {
      type: String
    },
    url:{
      type: String
    }
  }
});

Archivos.statics.findbyname = function(name, cb) {
  return this.find({ "archivo.name": new RegExp(name, "i") }, cb);
};

module.exports = mongoose.model("Archivos", Archivos);
