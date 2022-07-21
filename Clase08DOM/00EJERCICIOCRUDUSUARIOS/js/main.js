
const villanos = [
    { id: 1, nombre: "Thanos", edad: 300, arma: "Guante", img:"https://media.gq.com.mx/photos/5dec0db85b7e8300097bca15/16:9/w_1280,c_limit/thanos-bebe-marvel.jpg" },
    { id: 3, nombre: "Gru", edad: 50, arma: "Minions", img: "https://elcomercio.pe/resizer/FE4uwyfnmMmAPrR4ode4vqxIles=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/EBN6KI2JTFHPBKQ7MGYG5CC4XM.jpg" },
    { id: 4, nombre: "Pingüino", edad: 70, arma: "Sombrilla", img: "https://media.vandalsports.com/i/640x360/6-2018/201864112850_1.jpg"},
    { id: 5, nombre: "Acertijo", edad: 50, arma: "?", img: "https://static.wikia.nocookie.net/batman/images/1/13/JimCarreyRiddler.jpg/revision/latest?cb=20180127231837&path-prefix=es" },
    { id: 6, nombre: "Iki", edad: 40, arma: "Fuego" },
    { id: 7, nombre: "Darth Vader", edad: 45, arma: "Lightsaber", img: "https://www.google.com/search?q=darth+vader&tbm=isch&ved=2ahUKEwir3eLvjYv5AhWkrZUCHa8yADgQ2-cCegQIABAA#imgrc=efnSKCE2wW9KiM" },
]


const catalogoVillanos = new CatalogoVillanos(villanos);
console.log("VILLANOS ORIGINAL", catalogoVillanos.villanos)
mostrarMenu()


function mostrarMenu() {
    let opcion = "";
    while (opcion !== "10") {
        opcion = prompt(`Ingrese una opción:
                        1. Ingresar Villano
                        2. Listar Villanos
                        3. Buscar Villano
                        4. Actualizar Villano
                        5. Ordenar Villanos
                        10. Fin`)
        switch (opcion) {
            case "1": // Crear Villano
                crearVillano()
                break;
            case "2": // Crear Villano
                listarVillanos()
                break;
            case "3": // Crear Villano
                buscarVillano()
                break;
            case "4": // Crear Villano
                actualizarVillano()
                break;
            case "5": // Crear Villano
                ordenarVillanos()
                break;
            case "10":
                alert("Gracias")
                break;
            default:
                alert("Opción Inválida")
                break;
        }
    }
}

function crearVillano() {
    let nombre = prompt("Ingrese un nombre")
    let edad = Number(prompt("Ingrese una edad"))
    let arma = prompt("Ingrese un arma")

    let villano = new Villano(catalogoVillanos.darCantidad() + 1, nombre, edad, arma);
    catalogoVillanos.agregarVillano(villano);

    console.log("CATALOGO VILLANOS", catalogoVillanos);
}

function listarVillanos() {
    //catalogoVillanos.listarVillanos();
    
    const nodoPrincipal = document.getElementById("mainContent")
    nodoPrincipal.innerHTML="";
    nodoPrincipal.setAttribute("style","display:flex")
    catalogoVillanos.villanos.forEach((villano)=>{

        const divVillano = document.createElement("div")
        divVillano.innerHTML=`<h3>${villano.nombre}</h3>
                              <div class='edadVillano'> (${villano.edad})</div>
                              <div><img src=${villano.img} width="200px"></div>
                              <hr>
                              <div>${villano.arma}</div>`
        
        nodoPrincipal.appendChild(divVillano);

        //document.body.appendChild()
    })


}


function buscarVillano() {
    let nombreABuscar = prompt("Ingrese el nombre que quiere buscar");
    catalogoVillanos.buscar(nombreABuscar);

}

function actualizarVillano() {

    let nombreABuscar = prompt("Ingrese el nombre que quiere buscar");
    let nombre = prompt("Ingrese un nombre")
    let edad = Number(prompt("Ingrese una edad"))
    let arma = prompt("Ingrese un arma")
    let imagen = prompt("Ingrese Imagen")

    catalogoVillanos.modificarVillano(nombreABuscar, nombre, edad, arma, img);

}

function ordenarVillanos()
{
    catalogoVillanos.ordenarVillanos();
}