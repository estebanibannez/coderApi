const Productos = require("../model/productos.model");

exports.getProductos = (req, res) => {
  let id = req.params.id;
  const query = Productos.listar(id);
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

exports.postProductos = (req, res) => {
  const { title, price, thumbnail } = req.body;

  let producto = Productos.guardar({
    title: title,
    price: price,
    thumbnail: thumbnail,
  });

  try {
    return res.json({
      status: 200,
      message: "Producto Guardado éxitosamente!",
      data: producto,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.putProductos = (req, res) => {
  Productos.actualizarProducto(req.params.id, req.body);

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

exports.deleteProductos = (req, res) => {
  const response = Productos.eliminarProducto(req.params.id);
  try {
    return res.json({
      status: 200,
      message: "Producto eliminado éxitosamente!",
      data: response,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
