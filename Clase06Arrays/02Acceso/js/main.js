
const misNumeros = [10,9,8,7,6,6,100,200,300];
 //Posición o índice 0,1,2,3,4,5,  6,  7

 console.log(misNumeros[0]) // 10
 console.log(misNumeros[7]) // 200
 console.log(misNumeros[100]) // undefined

 //recorrer un array de la casill inicial, a la 5
 for(let i=0; i<=5;i++)
 {
    console.log(misNumeros[i]);
 }