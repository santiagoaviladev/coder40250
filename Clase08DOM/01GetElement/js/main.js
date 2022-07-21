 
 saludar()
 cambiarTextos()
 escribirParrafos()

 function saludar()
 {
     const nombre = prompt("Ingresa tu nombre")
     const titulo = document.getElementById("miTitulo")
    console.log("DOCUMENT", document)
    console.log("TITULO", titulo)


     titulo.innerText=`¡Bienvenido, ${nombre}! 🤯`;
 }

 function cambiarTextos()
 {
    const nodosSpan = document.getElementsByClassName("mySpan");
    console.log("NODOSSPAN", nodosSpan)
    
    for(let nodo of nodosSpan)
    {
       nodo.innerHTML=`<b>${nodo.innerText}</b>`;
    }

 }

 function escribirParrafos()
 {
     const parrafos= document.getElementsByTagName("p")

     for(let parrafo of parrafos)
    {
        parrafo.innerHTML=`Lorem ipsun dor sit amet`;

        parrafo.setAttribute("style", "border:1px solid blue;margin:2%;border-radius:50px;max-width:300px;padding:5%")
    }
 }