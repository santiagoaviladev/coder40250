 
 const catalogoVillanos = new CatalogoVillanos([]);

 mostrarMenu()


 function mostrarMenu()
 {
     let opcion = "";
     while(opcion!=="10")
     {
        opcion= prompt(`Ingrese una opción:
                        1. Ingresar Villano
                        10. Fin`)
         switch (opcion) {
             case "1": // Crear Villano
                 crearVillano()
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

 function crearVillano()
 {
     let nombre = prompt("Ingrese un nombre")
     let edad = Number(prompt("Ingrese una edad"))
     let arma = prompt("Ingrese un arma")

     let villano = new Villano(catalogoVillanos.darCantidad()+1 ,nombre,edad, arma);
     catalogoVillanos.agregarVillano(villano);

     console.log("CATALOGO VILLANOS", catalogoVillanos);
 }