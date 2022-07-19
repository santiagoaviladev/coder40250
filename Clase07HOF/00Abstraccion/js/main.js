
  //Función que retorna función
  function mayorQue(n)
  {
      //Equivalencia 
      /*return function (m) {
        let mayorQue = n>m;
        return mayorQue;
      };
      */
        return (m) => n>m;
  }

  const esMayor = mayorQue(10);
  const resultado = esMayor(5);
  console.log("RESULTADO", resultado)

  


 //Función que recibe función por parámetro
  let total = 0;
  const numeros = [1,2,3,4]
  function acumular(num)
  {
    total+=num; // equivalete a total = total+num
  }

  function porCadaUno(arr, fun)
  {
    for(let i=0;i<arr.length;i++)
    {
      fun(arr[i]);
    }
  }
  porCadaUno(numeros, acumular);

  console.log("TOTAL ACUMLADO", total);

  porCadaUno(numeros, console.log);

  porCadaUno(numeros, alert);

  porCadaUno(numeros, prompt);