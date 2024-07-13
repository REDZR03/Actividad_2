//if-else
let cal = 100;
if(cal>=90 && cal<=100){
    console.log("A");
}else if(cal>=80 && cal<=89 ){
    console.log("B")
}else if(cal >= 70 && cal<=79){
    console.log("C");
}else if (cal >=60 && cal<=69){
    console.log("D");
}else{
    console.log("F");
}


//Switch
let calificacion = 70; 

switch (true) {
    case (calificacion >= 90 && calificacion <= 100):
        console.log("A");
        break;
    case (calificacion >= 80 && calificacion < 90):
        console.log("B");
        break;
    case (calificacion >= 70 && calificacion < 80):
        console.log("C");
        break;
    case (calificacion >= 60 && calificacion < 70):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}

