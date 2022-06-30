
let edad = Number(prompt("Ingrese su edad"));

if (isNaN(edad)) {
   alert("Su edad no es válida")
}
else {
   if (edad >= 18) {
      alert("Bienvienido, puede pedir una bebida alcoholica")
   }
   else {
      alert("¡NO PUEDE BEBER!")
   }
}
