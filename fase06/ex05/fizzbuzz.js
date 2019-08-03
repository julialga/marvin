function fizzbuzz(n1, n2) {
    var nMe, nMa;
    if (n1<n2) {
       nMe = n1;
        nMa = n2;
    } else {
        nMe = n2;
        nMa = n1;
    }
    while (nMe <= nMa) {
        if ((nMe % 3 === 0) && (nMe % 5 === 0)) {
        console.log(nMe + " FizzBuzz");
    } else if (nMe % 5 === 0) {
        console.log(nMe + " Buzz");
    } else if (nMe % 3 === 0){
        console.log(nMe + " Fizz")
    } else {
        console.log(nMe);
    }
    nMe++
}
}

    