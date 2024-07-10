var rango = 100;

for (var i = 2; i < rango; i++) {
    var prim = true;
    
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            prim = false;
            break;
        }
    }

    if (prim) {
        console.log(i);
    }
}
