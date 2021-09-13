const express = require("express");
const router = express.Router();
const controller = require("../api/productos.controller");

router.get("/productos/listar", async (req, res) => {
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

router.get("/productos/listar/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let resultado = await controller.buscarPorId(id);
    return res.json({
      status: 200,
      message: "OK - Producto encontrado éxitosamente.",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/productos/guardar", middlewareAdmin, async (req, res) => {
  try {
    let producto = req.body;
    let resultado = await controller.guardar(producto);
    return res.json({
      status: 200,
      message: "OK - Producto guardado éxitosamente.",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/productos/actualizar/:id", middlewareAdmin, async (req, res) => {
  try {
    let { id } = req.params;
    let producto = req.body;

    let resultado = await controller.update(id, producto);
    return res.json({
      status: 200,
      message: "OK - Producto actualizado éxitosamente.",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/productos/borrar/:id", middlewareAdmin, async (req, res) => {
  try {
    let { id } = req.params;
    let producto = req.body;

    let resultado = await controller.eliminar(id);
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

function middlewareAdmin(req, res, next) {
  let body = req.body;
  const url = req.originalUrl;
  const metodo = req.method;
  if (body.permisos.administrador) {
    next();
  } else {
    res.status(500).send({
      error: "-1",
      descripcion: `ruta ${url} método ${metodo} no autorizada`,
    });
  }
}

// function middlewareUsuario(req, res, next) {
//   let body = req.body;
//   if (body.permisos.usuario) {
//     next();
//   } else {
//     res.status(500).send({
//       error: "-1",
//       descripcion: `ruta ${url} método ${metodo} no autorizada`,
//     });
//   }
// }
module.exports = router;
