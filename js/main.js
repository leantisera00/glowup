/////////////////////////// GLOBAL ///////////////////////////

let carrito = []
const barraBuscar = document.getElementById("barraBusqueda");
let mainSec = document.querySelector(".SecMain");


/////////////////////////// CLASES ///////////////////////////

class Producto {
    constructor(idprod, nombre, categoria, precio, imagen) {
        this.idprod = idprod;
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
    }

}

/////////////////////////// OBJETOS ///////////////////////////

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



//////////////////////////////// DOM ////////////////////////////////

mostrarProductos(productos);

/////////////////////////// FUNCIONES ///////////////////////////

// Mostrar el total de productos //

function mostrarProductos(listaProd) {

    mainSec.innerHTML = ""

    listaProd.forEach(el => {
        let contenedor = document.createElement("article");
        contenedor.classList.add('contProducto');
        contenedor.innerHTML = `
                            <img src=${el.imagen} alt=${el.nombre} class="imgProd">
                            <div class="contInfoProd">
                            <p class="nombreProd">${el.nombre}</p>
                            <p class="precioProd">$ ${el.precio}</p>
                            </div>
                            <div class="contInfoCompra">
                            <button type="button" class="btn-comprar" id="boton${el.idprod}">Comprar</button>
                            </div>
                            `;

        mainSec.appendChild(contenedor);

        let btnAgregar = document.getElementById(`boton${el.idprod}`);
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(el.idprod);
            btnAgregar.setAttribute('disabled', '');
            btnAgregar.innerHTML = "Agotado";
        })

    })

}

//////////////////////////////////////
/// Barra de busqueda de productos ///
//////////////////////////////////////

barraBuscar.addEventListener('input', () => {
    if (barraBuscar.value === '') {
        mostrarProductos(productos);
    } else {
        let prodFiltrados = productos.filter(elemento => elemento.nombre.includes(barraBuscar.value.toUpperCase()));
        mostrarProductos(prodFiltrados);
    }
})

////////////////////////////
/// Filtros por checkbox ///
////////////////////////////

let btnFiltro = document.getElementById("btn-filtrar");

function obtenerValoresCheckbox() {
    let valoresCheckbox = new Array();
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((elem) => {
        if (elem.checked) {
            valoresCheckbox.push(elem.value);
        }
    });
    return valoresCheckbox;
}

btnFiltro.onclick = (e) => {
    e.preventDefault();
    let seleccionados = obtenerValoresCheckbox();
    if (seleccionados.length == 0) {
        mostrarProductos(productos);
    } else {
        prodCheckeados = new Array();
        for (let i = 0; i < seleccionados.length; i++) {
            for (let p = 0; p < productos.length; p++) {
                if (seleccionados[i] == productos[p].categoria) {
                    prodCheckeados.push(productos[p]);
                }
            }
        }
        mostrarProductos(prodCheckeados);
    }
};

////////////////////////////
//// Carrito de compras ////
////////////////////////////

function agregarAlCarrito(id) {
    let productoAgregado = productos.find(obj => obj.idprod === id)
    carrito.push(productoAgregado);
    mostrarCarrito(productoAgregado);
    actualizarCarrito();
}

function mostrarCarrito(productoAgregado) {

    let div = document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML = `<img src=${productoAgregado.imagen} alt=${productoAgregado.nombre} class="imgProdCarrito">
                    <p>${productoAgregado.nombre}</p>
                    <p>Precio: $${productoAgregado.precio}</p>
                    <button id="eliminar${productoAgregado.idprod}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    itemsCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregado.idprod}`)
    btnEliminar.addEventListener('click', () => {
        btnEliminar.parentElement.remove();
        carrito = carrito.filter(elemento => elemento.idprod !== productoAgregado.idprod)
        actualizarCarrito()
        let btnAgregar = document.getElementById(`boton${productoAgregado.idprod}`);
        btnAgregar.removeAttribute('disabled', '');
        btnAgregar.innerHTML = "Comprar";
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
}

//////////////////////////
//// Finalizar compra ////
//////////////////////////

const btnFinalizar = document.getElementById('btn-finalizar');
const main = document.getElementById('main');
const productosComprados = document.getElementById('itemsCarrito');
const aside = document.getElementById('aside');

btnFinalizar.onclick = () => {
    productosComprados.innerHTML = ``;
    aside.innerHTML = ``;
    main.innerHTML = `<div class="contMensajeCompra">
                        <p class="mensajeCompra">¡Gracias por tu compra!</p>
                        <div>
                        `;
    carrito.length = 0;
    actualizarCarrito();
    contadorCarrito.innerText = '';
}

////////////////////////////////////////////////////
//// Ir al inicio cuando hay scrolling vertical ////
////////////////////////////////////////////////////

botonToTop = document.getElementById("toTop");

window.onscroll = function () { detectarScrollVertical() };
botonToTop.onclick = function () { irArriba() };

function detectarScrollVertical() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonToTop.style.display = "block";
    } else {
        botonToTop.style.display = "none";
    }
}

function irArriba() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


