function parEPositivo(x) {
   if ( x % 2 === 0 && Math.sign(x) === 1 || Math.sign(x) === 0 ) {
  return "Sim";
   } else {
       return "Não";
   }
}