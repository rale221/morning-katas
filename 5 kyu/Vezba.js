const a1 = [1, '2', 3]
let suma1 = 0;
const fja = () => {
  for(let i=0; i< a1.length; i++) {
    if(typeof a1[i] === 'string') {
        a1[i] = +a1[i] // a1[i] = parseInt(a1[i])
        console.log('element je string', a1[i])
    }
    suma1 = suma1 + a1[i] // suma += a1[i]
}
return suma1;
}
const resenj = fja(a1);
console.log('resenje je', resenj)