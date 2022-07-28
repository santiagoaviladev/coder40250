
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

    const mode = localStorage.getItem("mode")
    if(mode) //mode !=== null, undefined, 0, false, ""
    {        
        cambiarModo(mode);
    }
}

 function programarBotones()
 {
      programarFuente("10");
      programarFuente("20");
      programarFuente("50");
      programarModo("dark");
      programarModo("ligth");
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

 function programarModo(modo)
 {
    const boton = document.getElementById(`${modo}Mode`);
    boton.addEventListener("click", ()=>{
        cambiarModo(modo);
    })
    
 }

 function cambiarModo(modo)
 {
     if(modo==='dark')
     {
         document.body.setAttribute("style", "background-color:black;color:white");
     }
     else if(modo==='ligth')
     {
        document.body.setAttribute("style", "background-color:white;color:black");
     }
     localStorage.setItem("mode", modo);
 
 }