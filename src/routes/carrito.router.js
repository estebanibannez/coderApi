const express = require("express");
const router = express.Router();

const {
  getCarrito,
  postCarrito,
  deleteCarrito,
} = require("../controllers/carrito.controller");

router.get("/listar/:id?", getCarrito);
router.post("/agregar/:id_producto", postCarrito);
router.delete("/borrar/:id", deleteCarrito);

module.exports = router;
