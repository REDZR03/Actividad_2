// String (cadena de caracteres)

let srt_1 = "Soy un texto con comillas";
let srt_2 = 'Soy un texto con comillas simples';
let srt_3 = "Comillas dentro de comillas \"Ejemplo\"";
let srt_4 = 'Comillas dentro de comillas simples "Ejemplo"';
let srt_5 = "Comillas simples dentro de comillas'Ejemplo'";

console.log(srt_1)
console.log(srt_2)
console.log(srt_3)
console.log(srt_4)
console.log(srt_5)

//Comillas invertidas (backticks) ``

let srt_6 = `comillas invertidas backticks`;
console.log(srt_6)

let nombre = "Noe Resendiz";
let welcome = `hola, ${nombre}, esto es una variable dentro del valor de otra varible`

console.log(welcome);


//Plantilla HTML

let plantilla = `
<html>
    <h3> Pagina de web de ${nombre}<h3>
    <p> un parrafo <p>
</html>
`