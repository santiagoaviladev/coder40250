/*
Escribir un programa para administrar villanos: 
1. Mostrar un menu, con las siguientes opciones: 
    A. Ingresar un Villano
    B. Listar todos los villanos
    K. FIN
2. Si el usuario selecciona A: Pedir nombre del villano
3. Si el usuario sleecciona B: Listar vilanos en consola
4. Mostrar el menu, siempre que no se seleccione K.

*/

const villanos = ["Jocker", "Thanos", "Darth Vader", "Úrsula", "Bane"]

mostrarMenu();


function mostrarMenu() {
    let opcion = "";
    while (opcion !== "K") {

        opcion = prompt(`Seleccione una opcion: 
                        A. Ingresar Villano
                        B. Listar Villanos
                        C. Buscar Un Villano (Decir si está o no está)
                        D. Borrar Un Villano (dado su nombre)
                        K. FIN`);

        switch (opcion) {
            case "A":
                ingresarVillano();
                break;
            case "B":
                listarVillanos();
                break;
            case "K":
                alert("GRACIAS");
                break;
            default:
                alert("opcion inválida")
                break;
        }
    }

}

function ingresarVillano() {
    let nuevoVillano = prompt("Ingrese un nuevo villano")
    villanos.push(nuevoVillano);
    alert("Villano ingresado con Éxito")
}


function listarVillanos() {
    console.log(villanos);
}
