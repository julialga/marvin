function primo(n) {
 var i = 2
var primo = false;
if (n == 2) {
  primo = true;
return "Sim"
  }
 while (i < n) {
if (n % i === 0) {
primo = false;
break;
}else{
    primo = true
    ;
    i++;
}
}
if (primo){
    return "Sim"
}else{
    return "Não";
}
}
