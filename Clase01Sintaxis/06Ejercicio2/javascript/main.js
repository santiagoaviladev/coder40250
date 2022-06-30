
/*
    Escriba un programa que le pida a un usuario 2 números y muestre:

    A. El resultado de la suma en la consola
    B. El resultado de la multiplicaión en un alert


    Debe indicarle al usuario la operación ejecutada. 

    Por ejemplo, si el usuario ingresa los números 8 y 10

    Debe mostrar un alert que diga: 
    "La multiplicación de los números ingresados es: 80"

    Y en la consola: 
    "La suma de los números ingresados es: 18

*/



  let numero1 = Number(prompt("Ingrese un numero")) // parseInt(prompt("Ingrese un numero"))
  let numero2 = Number(prompt("Ingrese otro numero"))
  let suma = numero1+numero2
  let mul = numero1*numero2
  alert(`Multiplicación ${mul}`)
  console.log(`Suma, ${suma}`)