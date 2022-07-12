
   function Producto(sku, nombre, precio)
   {
       this.sku = sku;
       this.nombre=nombre;
       this.precio=precio;
   }

   const producto1 = new Producto("098789", "Leche", 200)
   console.log("Producto1", producto1);
   console.log("Producto1 - NOMBRE", producto1.nombre);

   const producto2 = new Producto("876789", "Café", 300)
   console.log("Producto2", producto2);
   console.log("Producto2 - SKU ", producto2["sku"]);

 /*
   Crear un constructor para un usuario con: 
   id, nombre y apellido 

   Pedirle al usuario del sistema que pida los datos del 
   usuario (objeto)

   Construir el usuario (objeto)

   Imprimirlo
 */
 /*Créditos Facundo */
   function Empleado(id, nombre, apellido){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  const id = prompt("Ingrese el ID de empleado");
  const nombre = prompt("Ingrese el nombre de empleado");
  const apellido = prompt("Ingrese el apellido de empleado");

  const empleado1 = new Empleado(id, nombre, apellido);
console.log(empleado1)