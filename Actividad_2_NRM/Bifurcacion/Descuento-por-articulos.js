//Articulos
let cantidadArticulos = 21; 
let precioPorArticulo = 100; 
let totalCompra = cantidadArticulos * precioPorArticulo;
let descuento = 0;

if (cantidadArticulos >= 0 && cantidadArticulos <= 10) {
    descuento = 0.05; 
} else if (cantidadArticulos >= 11 && cantidadArticulos <= 20) {
    descuento = 0.10; 
} else if (cantidadArticulos >= 21) {
    descuento = 0.15; 
}
let totalConDescuento = totalCompra - (totalCompra * descuento);
let iva = 0.16;
let totalConIva = totalConDescuento + (totalConDescuento * iva);
console.log("Total de la compra después del descuento y con IVA: $" + totalConIva);


//Switch
let CanArt = 21;
let Precio = 100;
let total = CanArt * Precio;
let des = 0;

switch(true){
    case (CanArt >= 0 && CanArt <= 10):
        des = 0.05; 
        break;
    case (CanArt >= 11 && CanArt <= 20):
        des = 0.10; 
        break;
    case (CanArt >= 21):
        des = 0.15; 
        break;
}
let TconDesc = total - (total * des);
let ivaa = 0.16;
let totIva = TconDesc + (TconDesc * ivaa);
console.log("El total de la compra con un iva del 16% y con el descuento es de: $" +totIva);