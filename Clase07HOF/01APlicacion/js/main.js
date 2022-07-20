
const villanos = [
    { id: 1, nombre: "Tadhos", edad: 300, arma: "Guante" },
    { id: 3, nombre: "Gru", edad: 50, arma: "Minions" },
    { id: 4, nombre: "Pingüinoad", edad: 70, arma: "Sombrilla" },
    { id: 5, nombre: "Acertijo", edad: 50, arma: "?" },
    { id: 6, nombre: "Iki", edad: 40, arma: "Fuego" },
    { id: 7, nombre: "Darth Vader", edad: 45, arma: "Lightsaber" },
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
    catalogoVillanos.listarVillanos();
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

    catalogoVillanos.modificarVillano(nombreABuscar, nombre, edad, arma);

}

function ordenarVillanos()
{
    catalogoVillanos.ordenarVillanos();
}