/*
    Escriba un programa que pida al usuario:
    Una operacion: SUMA / MUL 
    2 números
    e imprima en consola, el resultado de la operación.
    
    Complete el ejercicio, con DIVISION y RESTA. 

    SI TRATA DE DIVIDIR POR 0; MUESTRE UN ERROR

*/


const operacion = prompt(`INGRESE UNA OPERACION: 
        SUMA 
        MUL
        DIV
        RESTA`);

const numero1 = Number(prompt("Ingrese un número"));
const numero2 = Number(prompt("Ingrese otro número"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("NUMEROS NO VALIDOS")
}
else {
    switch (operacion) {
        case 'SUMA':
            {
                const resultado = numero1 + numero2;
                alert(`El resultado es ${resultado}`)
                break;
            }
        case 'MUL':
            {
                const resultado = numero1 * numero2;
                alert(`El resultado es ${resultado}`)
                break;
            }
        case 'DIV':
            {
                const resultado = numero1 / numero2;
                alert(`El resultado es ${resultado}`)
                break;
            }
        case 'RESTA':
            {
                const resultado = numero1 - numero2;
                alert(`El resultado es ${resultado}`)
                break;
            }
        default:
            {
                alert("Operación inválida")
                break;
            }

    }
    /* if(operacion === 'SUMA')
     {
         const resultado = numero1+numero2;
         alert(`El resultado es ${resultado}`)
     }
     else if(operacion === 'MUL')
     {
         const resultado = numero1*numero2;
         alert(`El resultado es ${resultado}`)
     }
     else if(operacion === 'DIV')
     {
         if(numero2 === 0){
             alert("División Inválida")
         }
         else 
         {
             const resultado = numero1/numero2;
             alert(`El resultado es ${resultado}`)
         }
         
     }
     else if(operacion === 'RESTA')
     {
         const resultado = numero1-numero2;
         alert(`El resultado es ${resultado}`)
     }
     else 
     {
         alert(`La operación es inválida`)
     } */
}
