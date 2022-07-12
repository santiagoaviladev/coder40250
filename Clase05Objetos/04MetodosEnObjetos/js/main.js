function Empleado(id, nombre, apellido){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreYApellido =  () => this.nombre + " " + this.apellido
    
  }

 
  const id = prompt("Ingrese el ID de empleado");
  const nombre = prompt("Ingrese el nombre de empleado");
  const apellido = prompt("Ingrese el apellido de empleado");

  const empleado1 = new Empleado(id, nombre, apellido);
  
  console.log(empleado1)

  const nombreYApellido = empleado1.nombreYApellido();
  console.log("NOMBRE Y APELLIDO", nombreYApellido);

  const empleado2 = new Empleado(2, "Lucas", "Cespedes");
  console.log("NOMBRE Y APELLIDO del 2", empleado2.nombreYApellido());

 console.table(empleado2);