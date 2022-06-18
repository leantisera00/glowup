const IVA = 1.21;
let totalcompra = 0;
const prendas = ["remera", "buzo","pantalon"]
const precios = [1500,4500,3000]


class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  calcularPrecio() {
    return this.precio * 1.21;
  }
}

const producto1 = new Producto((prendas[0]), (precios[0]));
const producto2 = new Producto((prendas[1]), (precios[1]));
const producto3 = new Producto((prendas[2]), (precios[2]));

function confirmarCompra() {
  const respuesta = prompt("¿Desea comprar algo?\n1) Si \n2) No");
  if (respuesta == "1") {
    return true;
  } else {
    return false;
  }
}


function comprarProducto() {
  while (confirmarCompra()) {
    const productoSeleccionado = prompt("¿Que desea comprar? \n1) Remera \n2) Buzo \n3) Babucha");
    let cantidad = prompt ("Indique la cantidad de productos que desee llevar");

    
    switch (productoSeleccionado) {
      case "1":
      case "Remera":
    case "REMERA":
        case "remera":            
        alert("Has comprado " + cantidad + " " + producto1.nombre + " por $" + producto1.calcularPrecio() + " Cada uno") ;
        totalcompra = totalcompra + producto1.calcularPrecio() * cantidad
        break;
      case "2":
        case "buzo":
        case "BUZO":
        case "Buzo":
            alert("Has comprado " + cantidad + " " + producto2.nombre + " por $" + producto2.calcularPrecio() + " Cada uno");
            totalcompra = totalcompra + producto2.calcularPrecio() * cantidad
            break;
      case "3":
        case "babucha":
        case "BABUCHA":
        case "Babucha":
            alert("Has comprado " + cantidad + " " + producto3.nombre + " por $" + producto3.calcularPrecio() + " Cada uno");
            totalcompra = totalcompra + producto3.calcularPrecio() * cantidad
        break;
      default:
        alert("No has seleccionado ningun producto");
        break;
    }
  }
  alert("El total de su compra es: "+ totalcompra);
}

comprarProducto();