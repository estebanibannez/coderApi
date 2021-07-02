const fs = require("fs");

//obtiene todos los productos
class Productos {
  productos = [];

  constructor() {
    const json_productos = fs.readFileSync("src/data/productos.json", "utf-8");
    this.productos = JSON.parse(json_productos);
  }

  listar(id) {
    try {
      if (id) {
        return this.buscarPorId(id);
      } else {
        return this.productos;
      }
    } catch (error) {
      throw error;
    }
  }

  guardar(producto) {
    try {
      //asigno ID al producto.
      const id = this.productos.length + 1;
      producto.id = id;

      this.productos.push(producto);

      // guardo el nuevo producto en el json
      const json_productos = JSON.stringify(this.productos);
      fs.writeFileSync("src/data/productos.json", json_productos, "utf-8");

      return producto;
    } catch (error) {
      throw error;
    }
  }

  buscarPorId(id) {
    try {
      let producto = this.productos.filter((res) => res.id == id);
      return producto;
    } catch (error) {
      throw error;
    }
  }

  actualizarProducto(id, producto) {
    try {
      // producto.id = parseInt(id);
      const productoEncontrado = this.productos.filter(
        (p) => p.id === parseInt(id),
      );
      console.log(productoEncontrado);

      
      productoEncontrado.id = parseInt(id);
      productoEncontrado.title = producto.title;
      productoEncontrado.price = producto.price;
      productoEncontrado.thumbnail = producto.thumbnail;
     

      let index = this.productos.findIndex((x) => x.id === parseInt(id));

      console.log('index ->',index);
      this.productos.splice(index, 1, ...productoEncontrado);
      console.log('nuevo listado de productos',this.productos)

      // const json_productos = JSON.stringify(this.productos);
      // fs.writeFileSync("src/data/productos.json", json_productos, "utf-8");

      return producto;
    } catch (error) {
      throw error;
    }
  }

  eliminarProducto(id) {
    try {
      let productoEliminado = this.productos.filter(
        (producto) => producto.id == parseInt(id),
      );
      let productos = this.productos.filter(
        (producto) => producto.id != parseInt(id),
      );
      console.log(productos);

      const json_productos = JSON.stringify(productos);
      fs.writeFileSync("src/data/productos.json", json_productos, "utf-8");

      return productoEliminado;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Productos();
