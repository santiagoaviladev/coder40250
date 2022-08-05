 
  const usuario = {
      id: 1,
      nombre: "Pedro",
      apellido: "Alvarez",
  }

  const usuario2 = {
    id: 2,
    nombre: "Juan"
 }

 const usuario3 = null;

 const usuarios = [usuario2, usuario3, usuario]

 usuarios.forEach((user)=>{
     const {nombre} = user;
     console.log(nombre);
 })