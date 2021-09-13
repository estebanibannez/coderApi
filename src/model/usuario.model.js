const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
  nombre: { type: String },
  direccion: { type: String },
  edad: { type: Number },
  fono: { type: String },
  foto: { type: String },
});

const Usuario = mongoose.model("Usuario", schema);

module.exports = Usuario;
