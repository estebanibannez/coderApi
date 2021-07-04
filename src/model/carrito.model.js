const fs = require("fs");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

class Carrito {
  carritos = [];

  constructor() {
    const carrito = fs.readFileSync("src/data/carrito.json", "utf-8");
    const productos = fs.readFileSync("src/data/productos.json", "utf-8");

    if (carrito.length > 0) {
      this.carritos = JSON.parse(carrito);
    }

    this.productos = JSON.parse(productos);
    // console.log(this.carritos);
    // console.log(this.productos);
  }

  guardar(idProducto) {
    debugger;
    let id = uuidv4();

    //verifico si existe un carrito creado con el id
    let existeCarrito = this.carritos.filter(
      (carro) => carro.id == "2ae8258d-1a8a-4ebc-bf72-bca27a516240",
    );

    console.log("carrito existe? ", existeCarrito);

    //busco producto
    let productoSeleccionado = this.productos.filter(
      (producto) => producto.id === parseInt(idProducto),
    );

    console.log(productoSeleccionado);
    //valido si el producto que se desea crear existe
    if (productoSeleccionado.length > 0) {
      if (existeCarrito) {
        //si existe carrito , guardo el producto al carro existente
        existeCarrito.map((carritonuevo) => {
          carritonuevo.productos.push(productoSeleccionado);
        });
        let resultado = fs.writeFileSync(
          "src/data/carrito.json",
          JSON.stringify(existeCarrito),
          "utf-8",
        );

        return resultado;
      } else {
        //creo un nuevo carrito
        let carrito = {
          id: id,
          timestamp: moment(new Date().now).format("L"),
          productos: [],
        };

        carrito.productos.push(...productoSeleccionado);
        let resultado = fs.writeFileSync(
          "src/data/carrito.json",
          JSON.stringify(carrito),
          "utf-8",
        );
        return resultado;
      }
    } else {
      // si no existe el producto para el id
      return false;
    }
  }
}

module.exports = new Carrito();
