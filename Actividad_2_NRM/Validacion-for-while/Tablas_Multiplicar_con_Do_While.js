// Tablas de Multiplicarusando cilo do while

let i = 1;

do {
    let j = 1;
    do {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    } while (j <= 10);
    console.log(''); // Espacio entre tablas
    i++;
} while (i <= 10);
