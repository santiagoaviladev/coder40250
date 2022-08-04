
let edad = Number(prompt("Ingrese su edad"));

/*let puedeTomarCerveza;

if(edad >=18)
{
  puedeTomarCerveza = true;
}
else 
{
   puedeTomarCerveza=false;
}*/

let puedeTomarCerveza = edad >= 18 ? true : false;


/*
 if(puedeTomarCerveza)
 {
    alert("Puede tomar cerveza")
 }
 else
 {
    alert("No puede tomar cerveza")
 }*/


let mensaje = puedeTomarCerveza ? "Puede tomar cerveza" : "No puede tomar cerveza";

alert(mensaje)
