 
   class Producto{

    constructor(id, nombre, precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }

    getIva()
    {
        return this.precio*0.21;
    }

   }

   const producto1 = new Producto(1, "Café", 200);
   const iva = producto1.getIva();
   console.log(producto1, "IVA", iva);
   producto1.nombre="COCA COLA"
   console.log(producto1);