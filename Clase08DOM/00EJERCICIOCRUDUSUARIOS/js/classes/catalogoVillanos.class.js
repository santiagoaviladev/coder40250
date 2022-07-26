class CatalogoVillanos {
    constructor(villanos) {
        this.villanos = villanos;
    }

    agregarVillano(villano) {
        this.villanos.push(villano);
    }

    darCantidad() {
        return this.villanos.length;
    }

    listarVillanos() {
        /*for (let i = 0; i < this.darCantidad(); i++) {
            console.log(this.villanos[i])
        }*/

        this.villanos.forEach((villano) => {
            console.log("LISTADO", villano);
        })
    }
    buscar(nombreABuscar) {
        let esta = this.villanos.some((villano) =>
            villano.nombre.includes(nombreABuscar)
        )

        if (esta) {
            alert("LO ENCONTRE")

            let filtrado = this.villanos.filter((villano) =>
                    villano.nombre.includes(nombreABuscar)
            )

            console.table("ESTO ENCONTRÉ", filtrado);
        }
        else {
            alert("NO LO ENCONTRÉ")
        }


    }
    modificarVillano(nombreABuscar, nombre, edad, arma, img)
    {
        let villanoEncontrado = this.villanos.find((villano) =>
            villano.nombre.includes(nombreABuscar)
        )
        if(villanoEncontrado)
        {
            villanoEncontrado.nombre=nombre;
            villanoEncontrado.edad=edad;
            villanoEncontrado.arma=arma;
            villanoEncontrado.img=img
            console.log("Villanos MOd", this.villanos);
        }
        else{
            alert("NO PUEDO MODIFICAR")
        }


    }
    ordenarVillanos()
    {
        this.villanos.sort((villanoA, villanoB)=>
        {
            if(villanoA.nombre<villanoB.nombre)
            {
                return -1
            }
            return 1;
        
        })
        console.log("ORDENADO", this.villanos)
    }

}