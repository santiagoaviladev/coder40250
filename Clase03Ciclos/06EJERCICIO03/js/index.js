/*
 Escriba un programa que calcule el 
 factorial de un número ingresado por el usuario

 El factorial está definido como: 

 fact(n) = n*(n-1)*(n-2)*(n-3)*.... *1

 Ejemplo: fact(5) = 5*4*3*2*1 

*/

let num = Number(prompt("Ingrese un número"));
let resultado =1;
for(let i=num; i>=1; i--)
{
   resultado = resultado*i
}
console.log(`El resultado es ${resultado}`);
