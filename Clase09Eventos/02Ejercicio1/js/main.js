const categorias = ["Perros", "Gatos", "Otros"];

mostrarOpciones()
mostrarCategorias()


function mostrarOpciones()
{
    const btn = document.createElement("button")
    btn.innerText="CREAR CATEGORIA";
    btn.addEventListener("mouseover", ()=>
    {
        crearCategoria();
    });
    const adminNode = document.getElementById("adminMenu")
    adminNode.appendChild(btn);
    
}

function crearCategoria()
{
    let cat = prompt("Ingrese la categoria");
    categorias.push(cat);
    mostrarCategorias();
}


function mostrarCategorias() {
    
    const nodoMenu = document.getElementById("mainMenu");
    nodoMenu.innerHTML="";

    categorias.forEach((categoria) => {
        mostrarCategoria(categoria);
    })


}

function mostrarCategoria(categoria) {
    const nodoMenu = document.getElementById("mainMenu");
    const btn = document.createElement("button");
    btn.innerText = categoria;
    btn.classList.add("boton");
    btn.setAttribute("id", categoria);

    btn.addEventListener("click", () => {
        mostrarProductos(categoria)
    })

    nodoMenu.appendChild(btn);
}

function mostrarProductos(categoria) {
    switch (categoria) {
        case "Perros":
            mostrarProductosPerros();
            break;
        case "Gatos":
            mostrarProductosGatos();
            break;
        case "Otros":
            mostrarProductosOtros();
            break;
        default:
            alert("Categoria Inválida")
            break;
    }
}

function mostrarProductosPerros()
{
    const productosPerros = ["Comida", "Shampoo", "Accesorios"]
    mostrarProductosCategoria(productosPerros)
}

function mostrarProductosGatos()
{
    const productosGatos = ["Comida Gatos", "Shampoo Gatos", "Ratones"]
    mostrarProductosCategoria(productosGatos)
}

function mostrarProductosOtros()
{
    const productosOtros = ["Comida Otros", "Otros"]
    mostrarProductosCategoria(productosOtros)
}

function mostrarProductosCategoria(productos)
{
    const nodoContenedor = document.getElementById("mainContainer");
    nodoContenedor.innerText="";
    productos.forEach((producto)=>{
       const nodoDiv = document.createElement("div")
      nodoDiv.setAttribute("style", "border:1px solid blue;padding:3%")
       nodoDiv.innerText=producto;
       nodoContenedor.appendChild(nodoDiv)
    })
}