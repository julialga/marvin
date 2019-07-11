function maiusculo(palavra) {
    primeiras = palavra.substr(0,3);
    resto = palavra.substring(3);
        return (primeiras.toUpperCase() + resto);
}