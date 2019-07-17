function acharNumero(x) {
   if ( x < 5 ) {
  return "a";
   }
  if ( x == 5 || x > 5 && x < 10 || x == 10 ) {
  return "b";
  }
  if (x > 10 && x < 100 || x == 100 ) {
  return "c";
   } 
    if (x > 100 ) {
       return "d";
   }
}