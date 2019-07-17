function nove(number) {
    var texto = number.toString()
    numero = texto.substr(-1,1);
    return numero == 9 ? true : false ;
}