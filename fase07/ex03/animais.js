function animais(array) {
    var p = 0
   while (p<array.length) {
       delete array[p]["altura"];
        array[p]["idade"] = 5 + p;
   p++
   }
      return array;     
}