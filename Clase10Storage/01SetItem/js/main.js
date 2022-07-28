
 let cadenaCualquiera = "DATO PARA GUARDAR";

 localStorage.setItem('MILLAVE', cadenaCualquiera);
 localStorage.setItem('MILLAVE2', 1);
 localStorage.setItem('MILLAVE3', false);


 programarBotones();

 function programarBotones()
 {
      programarFuente("10");
      programarFuente("20");
      programarFuente("50");
 }

 function programarFuente(valorFuente) 
 {

        console.log("VALOR FUENTE", `fuente${valorFuente}`)

     const boton = document.getElementById(`fuente${valorFuente}`);
     const parrafo = document.getElementById("miParrafo");
     boton.addEventListener("click", ()=>{
         cambiarFuente(parrafo,valorFuente)}
         );
 }

 function  cambiarFuente(parrafo,valorFuente)
 {
     parrafo.setAttribute("style", `font-size:${valorFuente}px`)
     localStorage.setItem("fontSize", valorFuente);
 }

