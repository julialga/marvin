function somaPares(n1, n2) {
  var x = Math.ceil(n1);
    var y = Math.round(n2); 
    var nMe, nMa;
     var total = 0
    
    if ( x < y){
    nMe = x;
    nMa = y;
    } else {
    nMe = y;
    nMa = x;
    }
   
   while (nMe <= nMa){
    if (nMe % 2 === 0) {
        total += nMe;
    }
    nMe++
    }
  return total;
}
