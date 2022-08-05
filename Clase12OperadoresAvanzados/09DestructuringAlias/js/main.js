const usuario = {
    id: 1,
    nombre: "Pedro",
    apellido: "Alvarez",
  }
  const usuario2 = {
    id: 2,
    nombre: "Juan",
    apellido: "Perez",
  }
  
  
   let {nombre, apellido} = usuario;
   let {nombre: nombreUsuario2, apellido: apellidoUsuario2} = usuario2;
  
   console.log(nombre, apellido, nombreUsuario2, apellidoUsuario2);