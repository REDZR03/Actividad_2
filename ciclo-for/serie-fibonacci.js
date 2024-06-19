let fibo= [];
let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
  fibo.push(a);
  let temp = a;
  a = b;
  b = temp + b;
}

console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
