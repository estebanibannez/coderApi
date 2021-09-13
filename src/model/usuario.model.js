const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 },
    nombre: { type: String },
    direccion: { type: String },
    edad: { type: Number },
    fono: { type: String },
    foto: { type: String },
  },
  {
    timestamps: true,
  },
);

// schema.methods.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// schema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const Usuario = mongoose.model("Usuario", schema);

module.exports = Usuario;
