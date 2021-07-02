const express = require("express");
const router = express.Router();

const {
  getProductos,
  postProductos,
  putProductos,
  deleteProductos,
} = require("../controllers/productos.controller");

router.get("/listar/:id?", getProductos);
router.post("/agregar", postProductos);
router.put("/actualizar/:id", putProductos);
router.delete("/borrar/:id", deleteProductos);

module.exports = router;
