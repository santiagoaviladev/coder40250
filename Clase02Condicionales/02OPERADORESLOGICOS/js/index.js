
let edad = Number(prompt("Ingrese su edad"));

if (isNaN(edad) || edad<1 || edad>110) 
{
   alert("Su edad no es válida")
}
else if(edad>=1 && edad<=12)
{
   alert("No puede beber en nuestro bar")
}
else if(edad>12 && edad<=18)
{
   alert("Puede beber cocktail sin licor")
}
else {
   alert("Puede beber cocktail con licor")
}


