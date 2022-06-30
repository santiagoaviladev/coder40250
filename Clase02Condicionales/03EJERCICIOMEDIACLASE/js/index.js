/*
   Pedir al usuario: 
   2 números 
   Una operación ("SUMA", "MUL")

   Y mostrar el resultado 

   
*/
 
let num1 = Number(prompt("Ingrese un numero"))
let num2 = Number(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese SUMA o MUL").toUpperCase()

if(isNaN(num1) || isNaN(num2))
{
   alert("Números inválidos")
}
else if(operacion === 'SUMA')
{
   alert(`LA SUMA ES: ${num1+num2}`)
}
else if(operacion === 'MUL')
{
   alert(`LA MUL ES: ${num1*num2}`)
}
else 
{
   alert("Operación NO VÁLIDA")
}
