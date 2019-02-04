const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
  .tz("America/Santiago")
  .format();

const { Schema } = mongoose;

const Draw = new Schema({
  Draw: {
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

exports.name = function(req, res, next) {
  //query with mongoose
  var query = Schema.Draw.find({ name: req.params.name });

  query.exec(function(err, someValue) {
    if (err) return next(err);
    res.send(someValue);
  });
};

module.exports = mongoose.model("Draw", Draw);
