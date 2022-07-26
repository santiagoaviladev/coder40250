
 mostrarCategorias()


 function mostrarCategorias()
 {
    const categorias = ["Perros", "Gatos", "Otros"];

    categorias.forEach((categoria)=>{
        mostrarCategoria(categoria);
    })


 }

 function mostrarCategoria(categoria)
 {
     const nodoMenu = document.getElementById("mainMenu");
     const btn = document.createElement("button");
     btn.innerText=categoria;
     btn.classList.add("boton");

     nodoMenu.appendChild(btn);
 }