class CatalogoVillanos
{
       constructor(villanos)
       {
           this.villanos=villanos;
       } 

       agregarVillano(villano)
       {
           this.villanos.push(villano);
       }

       darCantidad()
       {
           return this.villanos.length;
       }

}