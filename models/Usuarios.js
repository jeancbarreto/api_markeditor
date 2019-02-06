const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
  .tz("America/Santiago")
  .format();

const { Schema } = mongoose;

const Usuarios = new Schema({
  usuario: {
    Nombre: {
      type: String
    },
    Apellido: {
      type: String
    },
    Dni: {
      type: String
    },
    Fecha_creacion: {
      type: String
    },
    Estado: {
      type: Number
    },
    Rol: {
      type: Number
    },
    email: {
      type: String
    },
    contraseña: {
      type: String
    }
  }
});

Usuarios.statics.findbyEmail = function(req, cb) {
  return this.find(
    {
      "usuario.email": new RegExp(req.query.email, "i"),
      "usuario.contraseña": new RegExp(req.query.contraseña, "i")
    },
    cb
  );
};

module.exports = mongoose.model("Usuarios", Usuarios);
