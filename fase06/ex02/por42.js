function por42(n1, n2) {
var w = (Math.ceil(n1/42) +1)*42
if (w <= n2){
    return w
} else {
    console.log("Não encontrado")
    return false
}
}