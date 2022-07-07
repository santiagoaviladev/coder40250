/*

 Usted ha sido contratado para hacer un programa de gestión 
 de precios de una bodega. 

 Escriba un programa que pida al usuario el número de paquetes 
 que ingresaron en el día. 

 Y el peso de cada uno de los paquetes.

 Y Calcule (mostrar en consola o en un alert)
 * El mayor peso
 * El menor peso
 * El peso promedio de los paquetes

*/

let numPaquetes = Number(prompt("Ingrese numero de paquetes"))
let contador=0;
let promedio=0;
let mayor = 0;
let menor = 0;

while(contador<numPaquetes)
{
    let pesoPaquete = Number(prompt(`Ingrese el peso del paquete ${contador+1}`))
    promedio+= pesoPaquete;
    
    if(pesoPaquete>mayor)
    {
        mayor = pesoPaquete;
    }

    if(contador===0)
    {
        menor = pesoPaquete;
    }

    if(pesoPaquete<menor)
    {
        menor = pesoPaquete;
    }

    contador++;
} 
console.log(`El promdio es ${promedio/numPaquetes}`)
console.log(`El mayor es ${mayor}`)
console.log(`El menor es ${menor}`)

/*
    1. Pedirle al usuario el número de paquetes.
    2. Hasta que el usuario NO haya ingresado el peso de 
        TODOS LOS PAQUETES: 
        Pedirle al usuario, el peso de los paquetes
    3. Calcular mayor, menor y promedio
*/
