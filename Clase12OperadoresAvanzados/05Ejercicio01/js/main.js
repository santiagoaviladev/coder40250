/*
    1.Escriba un programa que muestre el mensaje: 
    ¡Bienvenido! en una etiqueta <h1>
    2.Pida al usuario que ingrese su nombre
    3.Altere el DOM, para que si el usuario ingresó un nombre, 
    le muestre el mensaje "Mucho gusto, $nombreUsuario "
    4. Modifique su programa para que identifique si el usuario ha entrado antes, 
    en caso afirmativo que muestre el mensaje: 
    "Nos volvemos a ver, , $nombreUsuario"
    
*/

 let nombre = localStorage.getItem("nombre") || prompt("Ingrese su nombre");
 let flagSaludo =  Number(localStorage.getItem("flagSaludo")) ?? 0;

  nombre!=="" && localStorage.setItem("nombre", nombre)
  nombre!=="" && saludarUsuario();

  function saludarUsuario()
  {
      const nodo = document.getElementById("title");

    if(flagSaludo>0)
    {
        nodo.innerHTML=`<h1>Nos volvemos a ver por ${flagSaludo} vez, ${nombre}</h1>`;
        console.log(flagSaludo);
        let nuevoFlag = flagSaludo++;
        console.log(flagSaludo);
        localStorage.removeItem("flagSaludo");
        localStorage.setItem("aa", nuevoFlag );
    }
    else
    {
        nodo.innerHTML=`<h1>Mucho gusto, ${nombre}</h1>`;
        localStorage.setItem("flagSaludo", 1);
    }
      
  }

  