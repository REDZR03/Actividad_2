//FOR

/* Estructura 
for(inicializacion; condicion; actualizacion){
    bucle
}

let i=0;

i=i+1;
i+=1;

i++
i--

*/

//Tipos de FOR

//for 
for(let i=0; i<10; i++){
    //Aqui va el bucle
    console.log(i);
}

let lista=[1, 4, 6, 8, 10, 15, 18]
for(let i=0; i<lista.length /*Longitud de la cadena */; i++){
    console.log(lista[i]);
}

//for of
for(let valor of lista){
    console.log(valor)
}



//forEach
lista.forEach(valor => /*Esta es una Arrow fuction*/{
    console.log(valor);
})

//for in
let persona = {
    nombre:"Noe",
    apellido:"Resendiz",
    edad:32,
    isDeveloper:true
}

console.log(persona.nombre)

let prop="edad";
console.log(persona [prop]);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}