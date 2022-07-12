 
   function Habitacion(id, medida, tipoDeCama, precioPorNoche, extras, bloqueada)
   {
       this.id=id;
       this.medida=medida;
       this.tipoDeCama=tipoDeCama;
       this.precioPorNoche=precioPorNoche;
       this.extras=extras;
       this.bloqueada=bloqueada;
   }

   cargarDatosHabitacion()

   function cargarDatosHabitacion()
   {
       const id = prompt("ID");
       const medida = prompt("medida");
       const tipoDeCama = prompt("tipoDeCama");
       const precioPorNoche = prompt("precioPorNoche");
       const extras = prompt("extras");
       const hab1 = new Habitacion(id, medida,tipoDeCama,precioPorNoche, extras, true)
       console.log(hab1);
   }
