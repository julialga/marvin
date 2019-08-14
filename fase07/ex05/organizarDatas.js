function organizarDatas(array) {
    var p = 0
    var chato = []
    t=""
    while (p < array.length){ 
        t= array[p].dataDeChegada
        bobo = p.toString()
    chato[p] =  t.substr(-4, 4) +  t.substr(3, 2) + t.substr(0, 2) + bobo
    p++
}
    chato.sort()
    p=0;
    j=[]
while (p < array.length) {
  agrvai = chato[p].substr(-1,1) 
   j[p] = array[agrvai]
   p++
}
return j
}
