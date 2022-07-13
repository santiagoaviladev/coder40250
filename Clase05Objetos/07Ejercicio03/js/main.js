 
 class Villano {
     constructor(id, nombre, edad, contacto, arma)
     {
         this.id=id;
         this.nombre=nombre;
         this.edad=edad;
         this.contacto=contacto;
         this.arma=arma;
         this.energia=100;
         this.vidas=10;
     }

     saltar()
     {
        this.energia = this.energia-10;
     }

     comer()
     {
         this.energia= this.energia+5;
     }
 }

 class Arma {
    constructor(id, nombre, desc, impacto, material)
    {
        this.id=id;
        this.desc=desc;
        this.impacto=impacto;
        this.material=material;
        this.nombre=nombre;
    }
}

class Material {
    constructor(id, nombre, desc, precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.desc=desc;
        this.precio=precio;
    }
}

class Costo {
    constructor(id, valor, moneda)
    {
        this.id=id;
        this.valor=valor;
        this.moneda=moneda;
    }
}


const miVillano1 = new Villano(1, "PABLO", 20, "hhh@gmail", new Arma());
console.log(miVillano1);
miVillano1.saltar()
//console.log("DESPUES DE SALTAER", miVillano1);
miVillano1.comer()
console.log("DESPUES DE COMER", miVillano1);