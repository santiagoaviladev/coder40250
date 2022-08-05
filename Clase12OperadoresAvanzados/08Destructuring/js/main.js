const usuario = {
  id: 1,
  nombre: "Pedro",
  apellido: "Alvarez",
}

/*
 const id= usuario.id;
 const nombre = usuario.nombre;
 const apellido = usuario.apellido; */

 const {nombre, apellido} = usuario;

 console.log(nombre, apellido);