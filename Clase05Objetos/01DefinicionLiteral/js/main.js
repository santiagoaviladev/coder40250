 
  const categoria1 = {
      id: 1,
      nombre: "Desayuno",
      descripcion: "Cosas para desayunar",
  }

  console.log(categoria1);

  const categoria2 = {
    id: 2,
    nombre: "Bebidas Alcoholicas",
    descripcion: "Cosas para beber",
}

console.log(categoria2);

const producto1 = {
    sku: "0089000",
    nombre: "Huevos",
    precio: 3000,
    descripcion: "Caja por 12 huevos",
    categoria: categoria1,
}
console.log(producto1);

const cliente1 = {
    id:1,
    nombreUsuario: "yosoyunusuario", 
    correoElectronico: "yosoy@gmail.com",
    telefono: "45787878798",

}

console.log(cliente1);

const miCarritoDeCompras = {
    productos: producto1,
    cliente: cliente1,
    total: 3000 ,
    moneda: "ARS"
}

console.log(miCarritoDeCompras);

/*
Pedirle al usuario los datos de un producto: 
 1. SKU
 2. Nombre
 3. Precio 
 4. Descripción

 Crear un objeto literal con los datos 
 Imprimir el objeto.
*/

 const sku = prompt("Ingrese SKU");
 const nombre = prompt("Ingrese Nombre");
 const precio = Number(prompt("Ingrese Precio"));
 const descripcion = prompt("Ingrese Descripción");

 const miProducto = {
     sku: sku, 
     nombre: nombre, 
     precio: precio,
     descripcion: descripcion,
 }

 console.log("SKU", miProducto.sku, "PRECIO", miProducto.precio )
 console.log("NOMBRE", miProducto["sku"])

