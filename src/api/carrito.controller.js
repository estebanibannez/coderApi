const Carrito = require("../model/carrito.model");

exports.getCarrito = (req, res) => {
  const { id } = req.params;
  const query = "";
  try {
    return res.json({
      status: 200,
      message: "OK",
      data: query,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.postCarrito = (req, res) => {
  try {
    let resultado = Carrito.guardar(req.params.id_producto);
    if (!resultado) {
      return res.json({
        status: 200,
        message: "El Producto que intentas agregar al carro no éxiste",
      });
    }
    return res.json({
      status: 200,
      message: "OK",
      data: resultado,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deleteCarrito = (req, res) => {
  const query = "";
  try {
    return res.json({
      status: 200,
      message: "OK",
      data: query,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
