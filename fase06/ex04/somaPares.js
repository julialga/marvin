function somaPares(n1, n2) {
  var x = Math.ceil(n1);
    var y = Math.round(n2); 
    var numeroMenor, numeroMaior;
     var total = 0
    
    if ( x < y){
    numeroMenor = x;
    numeroMaior = y;
    } else {
    numeroMenor = y;
    numeroMaior = x;
    }
   
   while (numeroMenor <= numeroMaior){
    if (numeroMenor % 2 === 0) {
        total += numeroMenor;
    }
    numeroMenor++
    }
  return total;
}

    
    