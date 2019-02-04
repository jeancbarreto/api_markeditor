const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
  .tz("America/Santiago")
  .format();

const { Schema } = mongoose;

const Draw = new Schema({
  Plano: {
    name: {
      type: String
    },
    type_plan: {
      type: String
    },
    objetos: {
      type: Array
    }
  }
});

Draw.statics.findbyname = function(name, cb) {
  return this.find({ "Plano.name": new RegExp(name, "i") }, cb);
};

module.exports = mongoose.model("Draw", Draw);
