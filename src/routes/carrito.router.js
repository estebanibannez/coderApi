const express = require("express");
const router = express.Router();
const controller = require("../api/carrito.controller");
const utils = require("../utils/mail");

router.get("/carrito/listar", middlewareCarrito, async (req, res) => {
  try {
    let resultado = await controller.buscar();
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/carrito/listar/:id", middlewareCarrito, async (req, res) => {
  let { id } = req.params;

  try {
    let resultado = await controller.buscarPorId(id);
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/carrito/agregar", middlewareCarrito, async (req, res) => {
  try {
    let resultado = await controller.guardar(req.body);
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/carrito/borrar/:id", middlewareCarrito, async (req, res) => {
  try {
    let { id } = req.params;
    let resultado = await controller.eliminar(id, req.query.idprod);
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/carrito/finalizar/:id", middlewareCarrito, async (req, res) => {
  try {
    let { id } = req.params;
    let resultado = await controller.finalizarCompra(id);
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/carrito/actualizar/:id", middlewareCarrito, async (req, res) => {
  try {
    let { id } = req.params;
    let producto = req.body;
    let resultado = await controller.update(id, producto);
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

function middlewareCarrito(req, res, next) {
  let body = req.body;
  const url = req.originalUrl;
  const metodo = req.method;
  if (body.permisos.administrador && body.permisos.usuario) {
    next();
  } else {
    res.status(500).send({
      error: "-1",
      descripcion: `ruta ${url} método ${metodo} no autorizada`,
    });
  }
}

module.exports = router;
