 
 programarBotones()

 function programarBotones()
 {
    const opciones = ['categorias', 'productos']
    
    opciones.forEach((opcion)=>{
        programarBoton(opcion)
    })
    

 }

 function programarBoton(opcion)
 {
    const btn = document.getElementById(opcion);
    
    btn.addEventListener("click",()=>{

        if(opcion === 'categorias')
        {
            mostrarCategorias()
            programarBotonesCategorias()
        }
        else if(opcion === 'productos')
        {
            mostrarProductos();
        }

    })
 }

 function mostrarCategorias()
 {
    categorias.forEach((categoria)=>{
        mostrarCategoria(categoria)
    })
    
   
 }

 function mostrarProductos()
 {
     
 }


 function mostrarCategoria(categoria)
 {
     
    const div = document.getElementById("manejarOpcion")
    const categoriaDiv = document.createElement("div")
    categoriaDiv.innerHTML= `<h4>${categoria.nombre}</h4>
                            <button id="listar-${categoria.nombre}">ListarProductos</button>
                            <button>Borrar</button>`
    div.appendChild(categoriaDiv);

   
    
 }

 function programarBotonesCategorias()
 {
      categorias.forEach((categoria)=>{
          programarBtnListar(categoria);
      })
 }

 function programarBtnListar(categoria)
 {
     const btn = document.getElementById(`listar-${categoria.nombre}`)
     btn.addEventListener("click", ()=>listarProductos(categoria.id))
 }

 function listarProductos(id)
 {
     //OPCION CON REDIRECCIONAMIENTO: 
     //window.location.href=`/backoffice/producto.html?idCat=${id}`

     const filtrados = productos.filter((producto)=>producto.categoria===id)

     console.log(filtrados);

 }