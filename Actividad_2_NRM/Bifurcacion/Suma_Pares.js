// Suma numeros pares 
var num=1000;
var suma = 0;
for (var i = 0; i <= num; i++) {
    if (i % 2 == 0) {
    suma += i;
    }
}

console.log(suma);