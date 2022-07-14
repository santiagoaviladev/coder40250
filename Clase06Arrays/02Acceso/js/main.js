 //numeros
 const misNumeros = [22,10,7,5896,32,17,200,300,500];
 
 console.log("NUMEROS POS 3:", misNumeros[3]); //5896
 console.log("NUMEROS POS 4:", misNumeros[4]); //4
 console.log("NUMEROS POS 10:", misNumeros[10]); //undefinedd
 console.log("-----------")
 console.log("LONGITUD DEL ARRAY", misNumeros.length)//8
 console.log("-----------")

 for(let i=0;i<misNumeros.length;i++)
 {
     console.log("NUMEROS POS "+i, misNumeros[i]);
 }