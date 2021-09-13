const mongoose = require("mongoose");

const schema = mongoose.Schema({
  timestamp: { type: Date, default: Date.now() },
  productos: [
    {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "Producto",
        required: "Campo id producto es requerido.",
      },
      descripcion: { type: String },
      codigo: { type: String, unique: true },
      foto: { type: String, max: 200 },
      nombre: { type: String, required: true, max: 100 },
      precio: { type: Number, required: true },
      stock: { type: Number, required: true },
    },
  ],
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
});

const Carrito = mongoose.model("Carrito", schema);

module.exports = Carrito;
