let fibo = [];
let a = 0;
let b = 1;
let c = 1;

fibo.push(a); // Agregar 0
fibo.push(b); // Agregar 1

for (let i = 2; i < 10; i++) {
  fibo.push(c); // Agregar el siguiente número de Fibonacci
  let temp = c;
  c = a + b + c; // Sumar los tres números anteriores para obtener el siguiente número de la secuencia
  a = b;
  b = temp;
}

console.log(fibo);
