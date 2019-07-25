function soletrar(array) {
 var novaList = [];
 var interator = 0;
while ( interator < array.length){
    novaList.push(array.substr(interator ,1));
    interator++
}
return novaList;
}
    