
  const villanos = ["Jocker", "Thanos", "Darth Vader", "Úrsula", "Bane"]

//push
// agrega un elemento al final del array
// MODIFICA EL ARRAY
villanos.push("Dr. Frío");
console.log("DESPUES DE PUSH", villanos);
 

//unshift
// agrega un elemento al inicio del array
villanos.unshift("Lex Luthor");
console.log("DESPUES DE UNSHIFT", villanos);



//pop
// elimina el último elemento del array
villanos.pop();
console.log("DESPUES DE POP", villanos);

//shift
// elimina el primer elemento del array 
villanos.shift();
console.log("DESPUES DE SHIFT", villanos);


//splice
// Elimina elementos del array desde el índice dado, 
//con la longitud dada
villanos.splice(2,1,"otro elem", "otro elm2")
console.log("DESPUES DE SPLICE", villanos);


//join
// Une los elementos del array, con el caracter dado
const cadena = villanos.join("-");
console.log("CADENA DE JOIN", cadena);

//concat
// Une 2 arrays
const enemigos = ["zorg", "gargamel", "subzero"]
const unido = villanos.concat(enemigos);
console.log("DESPUES DE CONCAT", unido)

//slice
// retorna un fragmento del array // NO MODIFICA EL ARRAY ORIGINA
console.log("ANTES DE SLICE", villanos);
const parte = villanos.slice(1,4);
console.log("DESPUES DE SLICE", parte);

//indexOf
// Busca un elemento en el array y devuelve el índice
const index = villanos.indexOf("Úrsula")
console.log("INDEX OF", index);

//includes
const esta = villanos.includes("Thanos")
console.log("ESTA", esta);


//reverse
// invierte el array
villanos.reverse()
console.log("DESPUES DE REVERSE", villanos);
