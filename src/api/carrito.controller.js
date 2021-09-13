const ModelCarrito = require("../model/carrito.model");
const ModelUsuario = require("../model/usuario.model");
const mail = require("../utils/mail");
const sms = require("../utils/sms");

class CarritoController {
  constructor() {}

  async guardar(productos) {
    try {
      return await ModelCarrito.create(productos);
    } catch (error) {
      throw error;
    }
  }

  async finCompra(id) {
    try {
      let carrito = await ModelCarrito.findById(id);
      let usuario = await ModelUsuario.findById(carrito.usuario);

      mail.sendMail(
        "",
        "",
        `nuevo pedido de ${usuario.nombre} e email ${usuario.username}`,
        JSON.stringify(carrito.productos),
      );

      sms.sendSMS(
        `Listado de productos que compraste:  ${carrito.productos}`,
        "whatsapp:+19473334705",
        `whatsapp:${config.NUMBERWSP}`,
      );

      sms.sendSMS(`Pedido en proceso`, "+19473334705", usuario.fono);
    } catch (error) {
      throw error;
    }
  }

  async buscar(id) {
    try {
      return await ModelCarrito.find({});
    } catch (error) {
      throw error;
    }
  }
  
  async buscarPorId(id) {
    try {
      return await ModelCarrito.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async eliminar(id, id_prod) {
    try {
      let carrito = await ModelCarrito.findById(id);
      return await ModelCarrito.findByIdAndUpdate(id, {
        $pull: { productos: { _id: String(id_prod) } },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id, producto) {
    try {
      let carrito = await ModelCarrito.findById(id);
      producto.productos.forEach(function (prod) {
        carrito.productos.push(prod);
      });
      carrito.save();
      return carrito;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CarritoController();
