cargarDatos();
async function cargarDatos() {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let json = await res.json();
    console.log(json);
    console.log(json.forms[0].name);
    console.log(json.forms[0].url);
    let res2 = await fetch(json.forms[0].url);
    let json2 = await res2.json();
    console.log(json2);
    console.log(json2.sprites.back_shiny);
    dibujarDatos(json.forms[0].name, json2.sprites.back_shiny);
}

function dibujarDatos(name, url) {
    console.log("probando", url);
    const midiv = document.getElementById("appContainer");
    midiv.innerHTML = `
    <img src="${url}" alt="">
    <p >${name}</p>
    `
}



const productos = [
    {
        id: 1,
        nombre: "Lapiz",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Cuaderno",
        precio: 1000
    },
    {
        id: 3,
        nombre: "Compás",
        precio: 2000
    }
]

class productoCarrito{
    constructor(producto, cantidad)
    {
       this.producto=producto;
       this.cantidad=cantidad;
    }
}

class Carrito {
    constructor(productos)
    {
        this.productos=productos;
    }
    addProducto(producto){
        const enCarrito = this.buscarProducto(producto);
        if(enCarrito)
        {
            enCarrito.cantidad++;
        }
        else 
        {
            this.productos.push(producto);
        }
        
    }
    buscarProducto(producto)
    {
        let enCarrito = this.productos.filter((elemento)=>{
            elemento.producto.id === producto.id
        })
        return enCarrito;
    }
}