function vogalOuConsoante(l) {
   var letra = l.toUpperCase()
   if ( letra == "A"||letra == "E"||letra == "I"||letra == "0"||letra == "U" ) {
       return "Vogal";
   } else {
       return "Consoante";
   }
}