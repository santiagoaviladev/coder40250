
cargarPreferencias();
programarBotones();

function cargarPreferencias()
{
    const parrafo = document.getElementById("miParrafo");
 
    const valorFuente = localStorage.getItem("fontSize")
    if(valorFuente) //valorFuente !=== null, undefined, 0, false, ""
    {        
        cambiarFuente(parrafo, valorFuente);
    }
}

 function programarBotones()
 {
      programarFuente("10");
      programarFuente("20");
      programarFuente("50");
 }

 function programarFuente(valorFuente) 
 {

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

