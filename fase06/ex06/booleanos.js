function booleanos(x) {
  a = []
  i = 0
  u = 0
  while (x.length > i) {
      if (typeof x [i] != "boolean"){
          a[u] = x[i]
          u++
      }
      i++
}
return a
}