let num = Number(prompt("Ingrese un número"));
let resultado =1;

let j = num;
resultado =1;
do 
{
    resultado*=j //resultado = resultado*i;
    j--;
}
while(j>=1)
console.log(`DO WHILE: El resultado es ${resultado}`);