
programarBotones()

function programarBotones() {
    const boton = document.getElementById("miBoton");

    boton.addEventListener("click", () => {
        saludar();
    }
    )

    const boton2 = document.getElementById("miBoton2");
    boton2.onclick = () => {
        mostrarMensaje();
    }

}

function saludar()
{
    let nombre = prompt("Ingrese su nombre")
    let saludo = document.createElement("h2");
    saludo.innerText=`Hola, ${nombre}`
    document.body.appendChild(saludo);
}


function mostrarMensaje()
{
    alert("ESTE ES UN MENSAJE");
}