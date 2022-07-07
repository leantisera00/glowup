const confirmarCompra = document.querySelector('#confirmarCompra');
const nombreCliente = document.querySelector('#nombreCliente');
const apellidoCliente = document.querySelector('#apellidoCliente');
const emailCliente = document.querySelector('#emailCliente');
const wrapperCompraFinal = document.querySelector('#wrapperCompraFinal');

/////////////////////////// FUNCIONES ///////////////////////////


function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

function mostrarResumenCompra() {
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const itemFinal = productos.filter((prod) => {
            return prod.idprod === parseInt(item);
        });
        const unidadesProd = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        let div = document.createElement('div')
        div.setAttribute('class', 'resumenCarrito')
        div.innerHTML = `
                        <img src='.${itemFinal[0].imagen}' alt=${itemFinal[0].nombre} class="imgProdResumen">
                        <p class="nombreProdResumen">${itemFinal[0].nombre}</p>
                        <p class="cantProdResumen">Cantidad ${unidadesProd}</p>
                        <p class="precioProdResumen">P.U. $${itemFinal[0].precio}</p>
                        `
        secResumenCompra.append(div);
    });
    precioFinalResumen.textContent = calcularTotal();

}

function chequearLocalStorage() {
    if (miLocalStorage.getItem('carrito') == null) {
        wrapperCompraFinal.innerHTML = ''
        wrapperCompraFinal.style.height = "30vh";
        let contMensajeCompra = document.createElement('div');
        contMensajeCompra.setAttribute('class', 'contMensajeCompra');
        let mensajeCompra = document.createElement('p');
        mensajeCompra.setAttribute('class', 'mensajeCompra');
        mensajeCompra.innerText = "Vuelva al inicio para comprar"
        wrapperCompraFinal.appendChild(contMensajeCompra);
        contMensajeCompra.appendChild(mensajeCompra);
    }
}

function finalizarCompra() {
    wrapperCompraFinal.innerHTML = ''
    wrapperCompraFinal.style.height = "30vh";
    let contMensajeCompra = document.createElement('div');
    contMensajeCompra.setAttribute('class', 'contMensajeCompra');
    let mensajeCompra = document.createElement('p');
    mensajeCompra.setAttribute('class', 'mensajeCompra');
    mensajeCompra.innerText = "¡" + nombreCliente.value + " " + apellidoCliente.value + "  muchas gracias por tu compra!" + "\nLa información para el pago será enviada a: " + emailCliente.value;
    wrapperCompraFinal.appendChild(contMensajeCompra);
    contMensajeCompra.appendChild(mensajeCompra);
    carrito = [];
    localStorage.clear();
}

//////////////////////////////// PROGRAMA ////////////////////////////////

cargarCarritoDeLocalStorage()
chequearLocalStorage()
mostrarResumenCompra()
