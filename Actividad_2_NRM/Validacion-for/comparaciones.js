//Comparaciones

//Igualdad

if (5==5){
    console.log("5 es igual que 5");
}

if (5===5){
    console.log("5 es igual que 5");
}

let a = 5;
console.log(typeof a )

//let b = 5;

let b = "5";
console.log(typeof b )


if(a==b){
    console.log("a es igual a b DEBIL")
}

if(a===b)/*Verifica tambien el tipo*/{
    console.log("a es igual a b FUERTE")
}

//Desigualdades

let c = 4;
//let d = 10;

let d="4"

if(c != d){
    console.log("c diferente que d DEBIL");
}

if (c !== d){
    console.log("c diferten que d FUERTE");
}


// Mayor que y menor que 

let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min");
}

if(max >= min){
    console.log("max es mayor o igual que min");
}

if(min < max){
    console.log("min es menor max");
}

if(min <= max){
    console.log("min es menor o igual que max");
}