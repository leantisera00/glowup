//Global//

let carrito = []
const mainSec = document.querySelector(".SecMain");
const barraBuscar = document.getElementById("barraBusqueda");
const contadorCarrito = document.querySelector('#contadorCarrito');
const contItemsCarrito = document.querySelector("#contItemsCarrito");
const precioTotal = document.querySelector('#precioTotal');
const pPrecioTotal = document.querySelector('.Total');
const carritoBody = document.querySelector('.offcanvas-body');
const btnVaciarCarrito = document.querySelector('#btnVaciar');
const mensajeCarritoVacio = document.createElement('p');
mensajeCarritoVacio.textContent = 'Tu carrito está vacío';
mensajeCarritoVacio.classList.add('mensajeCarritoVacio');
const miLocalStorage = window.localStorage;
const imagenCarrito = document.querySelector('#contenedorCarrito');
const wrapper = document.querySelector('#wrapper');


// CLASES //

class Producto {
    constructor(idprod, nombre, categoria, precio, imagen) {
        this.idprod = idprod;
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
    }
}

// OBJETOS //

const productos = [];
productos.push(new Producto(1000, "Remera Nike Impossible Azul Hombre", "Remera_Nike_Hombre", 1800, "./img/Productos/remeras/remera_nike_azul.jpg"));
productos.push(new Producto(1001, "Remera Nike negra franja  blanca Hombre", "Remera_Nike_Hombre", 1800, "./img/Productos/remeras/remera_nike_cian_franjanegra.png"));
productos.push(new Producto(1002, "Remera Nike Cian franja  negra Hombre", "Remera_Nike_Hombre", 1800, "./img/Productos/remeras/remera_nike_gris_franjablanca.png"));
productos.push(new Producto(1003, "Remera Nike negra Hombre", "Remera_Nike_Hombre", 1800, "./img/Productos/remeras/remera_nike_negra.jpg"));
productos.push(new Producto(2000, "Remera Adidas Rosa Hombre", "Remera_Adidas_Hombre", 1800, "./img/Productos/remeras/Remera_Adidas_rosa.png"));
productos.push(new Producto(2001, "Remera Adidas Gris Hombre", "Remera_Adidas_Hombre", 1800, "./img/Productos/remeras/Remera_Adidas_gris.png"));
productos.push(new Producto(2002, "Remera Adidas Blanca Hombre", "Remera_Adidas_Hombre", 1800, "./img/Productos/remeras/Remera_Adidas_blanca.jpg"));
productos.push(new Producto(2003, "Remera Adidas Amarilla logo negro Hombre", "Remera_Adidas_Hombre", 1800, "./img/Productos/remeras/Remera_Adidas_amarilla_logonegro.png"));
productos.push(new Producto(2004, "Remera Adidas Amarilla logo blanco Hombre", "Remera_Adidas_Hombre", 1800, "./img/Productos/remeras/remera_adidas_amarilla.jpg"));
productos.push(new Producto(3000, "Babucha Nike frisada Negra franja lateral gris", "Babucha_Nike", 3000, "./img/Productos/babuchas/babucha_nike_negra.jpg"));
productos.push(new Producto(3001, "Babucha Nike frisada Gris franja lateral negra", "Babucha_Nike", 3000, "./img/Productos/babuchas/babucha_nike_gris.png"));
productos.push(new Producto(4000, "Buzo Adidas frisado con capucha gris", "Buzo_Adidas", 4500, "./img/Productos/buzos/buzo_adidas_gris.png"));
productos.push(new Producto(4001, "Buzo Adidas frisado con capucha negro", "Buzo_Adidas", 4500, "./img/Productos/buzos/buzo_adidas_negro.png"));
productos.push(new Producto(5000, "Remera Nike Impossible Mujer", "Remera_Nike_Mujer", 1800, "./img/Productos/remeras/nike_impossible_roja.png"));
productos.push(new Producto(5001, "Remera Nike Retro Gris Mujer", "Remera_Nike_Mujer", 1800, "./img/Productos/remeras/retro_gris.png"));
productos.push(new Producto(5002, "Remera Nike Retro Rosa Mujer", "Remera_Nike_Mujer", 1800, "./img/Productos/remeras/retro_rosa.png"));
productos.push(new Producto(6000, "Remera Climalite Rosa Mujer", "Remera_Adidas_Mujer", 2100, "./img/Productos/remeras/climalite_rosa_intermedio.png"));
productos.push(new Producto(6001, "Remera Climalite Rosa Claro Mujer", "Remera_Adidas_Mujer", 2100, "./img/Productos/remeras/climalite_rosaclaro.png"));
productos.push(new Producto(7000, "Calza Gris Jaspeada Mujer", "calza_nike_mujer", 2500, "./img/Productos/calzas/calza_gris_jaspeada.png"));
productos.push(new Producto(7001, "Calza Abstract Mujer", "calza_nike_mujer", 2500, "./img/Productos/calzas/calza_abstract.png"));

//FUNCIONES GLOBALES //

function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = productos.filter((items) => {
            return items.idprod === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0);
}