/////////////////////////// FUNCIONES ///////////////////////////

/////////////////////////////////////
//// Mostrar todos los productos ////
/////////////////////////////////////

function mostrarProductos(listaProd) {
    mainSec.innerHTML = ""
    listaProd.forEach(prod => {
        let contenedor = document.createElement("article");
        contenedor.classList.add('contProducto');
        contenedor.innerHTML = `
                            <img src=${prod.imagen} alt=${prod.nombre} class="imgProd">
                            <div class="contInfoProd">
                            <p class="nombreProd">${prod.nombre}</p>
                            <p class="precioProd">$${prod.precio}</p>
                            </div>
                            `;

        const contInfoCompra = document.createElement('div');
        contInfoCompra.classList.add('contInfoCompra');
        mainSec.appendChild(contenedor);
        contenedor.appendChild(contInfoCompra);
        const btnComprar = document.createElement('button');
        btnComprar.classList.add('btn-comprar');
        btnComprar.textContent = ('Comprar');
        btnComprar.setAttribute('prodID', prod.idprod);
        contInfoCompra.appendChild(btnComprar);
        btnComprar.addEventListener('click', agregarAlCarrito);
    });
}

////////////////////////////
//// Carrito de compras ////
////////////////////////////

function agregarAlCarrito(e) {
    carrito.push(e.target.getAttribute('prodID'));
    actualizarContadorCarrito()
    mostrarCarrito();
    verificarEstadoCarrito();
    guardarCarritoEnLocalStorage();
}

function mostrarCarrito() {
    contItemsCarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = productos.filter((prod) => {
            return prod.idprod === parseInt(item);
        });
        const unidadesProd = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        let div = document.createElement('div')
        div.setAttribute('class', 'productoEnCarrito')
        div.innerHTML = `
                        <img src=${miItem[0].imagen} alt=${miItem[0].nombre} class="imgProdCarrito">
                        <p>${miItem[0].nombre}</p>
                        <p>Cantidad: ${unidadesProd}</p>
                        <p>Precio: $${miItem[0].precio}</p>
                        `
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('boton-eliminar', 'btn-danger');
        btnEliminar.textContent = 'X';
        btnEliminar.dataset.item = item;
        btnEliminar.addEventListener('click', borrarItemCarrito);
        div.appendChild(btnEliminar);
        contItemsCarrito.appendChild(div);
    })
    actualizarContadorCarrito()
    precioTotal.textContent = calcularTotal()
}

function borrarItemCarrito(e) {
    const id = e.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    mostrarCarrito();
    verificarEstadoCarrito();
    guardarCarritoEnLocalStorage();
}

function actualizarContadorCarrito() {
    contadorCarrito.textContent = carrito.length;
}

function verificarEstadoCarrito() {
    if (carrito.length == 0) {
        pPrecioTotal.setAttribute('style', 'display:none');
        btnFinalizar.setAttribute('style', 'display:none');
        btnVaciarCarrito.setAttribute('style', 'display:none');
        contItemsCarrito.appendChild(mensajeCarritoVacio);
    }
    else {
        pPrecioTotal.removeAttribute('style', 'display:none');
        btnFinalizar.removeAttribute('style', 'display:none');
        btnVaciarCarrito.removeAttribute('style', 'display:none');
    }
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
    verificarEstadoCarrito();
    localStorage.clear();
}

btnVaciarCarrito.addEventListener('click', vaciarCarrito);

///////////////////////
//// Local Storage ////
///////////////////////

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        mostrarCarrito()
    }
}

//////////////////////////
//// Finalizar compra ////
//////////////////////////

const main = document.querySelector('#main');
const btnFinalizar = document.querySelector('#btn-finalizar');
const productosComprados = document.querySelector('#itemsCarrito');
const aside = document.querySelector('#aside');
const subtitulo = document.querySelector('.subtSeccion');
const secResumenCompra = document.querySelector('#secResumenCompra');
const contenedorCompraFinalizada = document.querySelector('#contenedorCompraFinalizada');

btnFinalizar.onclick = () => {
    location.href = './pages/finalizarCompra.html';
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

//////////////////////////////// PROGRAMA ////////////////////////////////

actualizarContadorCarrito();
cargarCarritoDeLocalStorage();
mostrarProductos(productos);
verificarEstadoCarrito();