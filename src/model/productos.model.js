const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    nombre: { type: String, required: true, max: 100 },
    descripcion: { type: String, required: true },
    codigo: { type: String, required: true },
    foto: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  {
    timestamp: true,
  },
);

const Producto = mongoose.model("Producto", schema);

module.exports = Producto;
