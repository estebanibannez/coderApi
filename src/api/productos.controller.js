const ProductoModel = require("../model/productos.model");

class ProductosController {
  constructor() {}

  async guardar(productos) {
    try {
      return await ProductoModel.create(productos);
    } catch (error) {
      throw error;
    }
  }

  async buscar(id) {
    try {
      return await ProductoModel.find({});
    } catch (error) {
      throw error;
    }
  }

  async buscarPorId(id) {
    try {
      return await ProductoModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async eliminar(condicion) {
    try {
      return await ProductoModel.findByIdAndDelete(condicion);
    } catch (error) {
      throw error;
    }
  }

  async update(condicion, producto) {
    try {
      return await ProductoModel.findByIdAndUpdate(condicion, producto, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductosController();
