//Control de Bucles 

let listNum=[1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i<listNum.length; i++){
    //Exclusion de un valor
    if (listNum[i]===5){
        continue;
    }

    console.log(listNum[i])


    //Interrumpir un bucle
    if(listNum[i]>5){
        break;
    }
}

/*Realizar un programa que cuente los numeros del 1 al 10 usando un while y un do while
Sumando los numeros del 1 al 100 usando un while y do while
Realizar las tablas del 1 al 10 usando while o do while*/ 