let prenda = prompt("¿Que prenda desea comprar? Tenemos descuentos en la prenda 'remera'");
const stock = "Tenemos stock de " + prenda + "." + " Muchas gracias por comprar";
const descuento = "Obtendras un descuento del %10 por llevar 2 0 mas remeras. Muchas gracias!";

while (prenda != "") {
    switch (prenda.toUpperCase()) {

        case "REMERA":
            const cantidad = prompt("Cuantas quiere llevar? Llevando 2 o mas accederas a descuentos");
            if (cantidad >= 2) {
                alert(descuento);
                prenda = "";
            } else {
                const sinDescuento = prompt("¿Seguro que no quiere acceder al descuento?");
                if (sinDescuento.toUpperCase() != "NO") {
                    alert("Comprara la prenda " + prenda + " sin descuentos. Muchas gracias por comprar");
                    prenda = "";
                } else {
                    alert(descuento);
                    prenda = "";
                }
            }
            break;

        case "BUZO":
            alert(stock);
            prenda = "";
            break;

        case "PANTALON":
            alert(stock);
            prenda = "";
            break;

        case "PANTALÓN":
            alert(stock);
            prenda = "";
            break;

        case "SHORT":
            alert(stock);
            prenda = "";
            break;

        case "CAMPERA":
            alert(stock);
            prenda = "";
            break;

        case "BERMUDA":
            alert(stock);
            prenda = "";
            break;

        case "JEAN":
            alert(stock);
            prenda = "";
            break;

        case "CHAQUETA":
            alert(stock);
            prenda = "";
            break;



        default:
            alert("No tenemos stock de la prenda mencionada");
            prenda = prompt("¿Que prenda desea comprar? Tenemos descuentos en la prenda 'remera'");
            break;
    }
}