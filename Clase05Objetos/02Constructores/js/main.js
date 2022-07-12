
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


