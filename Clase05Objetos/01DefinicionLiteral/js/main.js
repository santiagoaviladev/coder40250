 
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