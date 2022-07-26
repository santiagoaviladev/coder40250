mostrarMenu();

function mostrarMenu()
{
    const opciones = ["Cargar Pregunta", "Jugar"]
    opciones.forEach((opcion)=>{
        mostrarOpcion(opcion)
    })
}

function mostrarOpcion(opcion)
{
    const nodoMenu = document.getElementById("mainMenu");
    const boton = document.createElement("button");
    boton.innerHTML=opcion
    boton.addEventListener("click", ()=>{
        if(opcion==="Cargar Pregunta")
        {
            mostrarCargarPregunta();
        }
        else if(opcion==="Jugar")
        {
            mostrarJugar();
        }
    })
    nodoMenu.appendChild(boton);
}

function mostrarCargarPregunta()
{
    const formulario = document.createElement("form"); 
    const inputPregunta = document.createElement("input");
    inputPregunta.setAttribute("id", "inputPregunta")
    inputPregunta.addEventListener("keydown", (event)=>{
            if(event.key==='k')
            {
                event.preventDefault();
                alert("SU COMPUTADOR VA A EXPLOTAR");
            }
    })
    formulario.appendChild(inputPregunta);
    const submitBtn = document.createElement("input")
    submitBtn.setAttribute("type", "submit");
    submitBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        if(inputPregunta.value==="")
        {
            alert("COMPLETE SU FORMULARIO")
        }
        else
        {
            alert("VAMOS A PROCEDER")
            inputPregunta.value="";
        }
        
    })
    formulario.appendChild(submitBtn);
    const nodo = document.getElementById("mainContent");
    nodo.appendChild(formulario);

}

function mostrarJugar()
{

}