 
  const fenix = {
      id:1,
      nombre: "Fenix",
      img: "https://static.wikia.nocookie.net/saintseiya/images/5/56/Fenix_Ikki_Hades_Saga.png/revision/latest?cb=20180706004331&path-prefix=es",
      puntos: 10,
  }

  const seiya = {
    id:2,
    nombre: "Pegaso",
    img: "https://static.wikia.nocookie.net/saintseiya/images/7/7b/Pegasus_Seiya.png/revision/latest?cb=20171004012147&path-prefix=es",
    puntos: 20,
}

const caballeros = [fenix, seiya];
localStorage.setItem("caballeros", JSON.stringify(caballeros));

mostrarCaballeros();


  mostrarRegistro(fenix);
  mostrarRegistro(seiya);
  mostrarFavorito();

  function mostrarRegistro(caballero)
  {
      const container = document.getElementById("mainContainer");
      const nodoCaballero = document.createElement("div");
      nodoCaballero.setAttribute("style", "width:300px;heigth:300px;border:1px solid aqua;border-radius:20%;text-align:center");
      nodoCaballero.innerHTML=`<h3>${caballero.nombre}</h3>
                                <img src=${caballero.img} width=200px />
                                <p><b>${caballero.puntos} puntos</p>`
    
    const button = document.createElement("button")
    button.innerHTML="Elegir como Favorito"
    button.addEventListener("click", ()=>{

        elegirFavorito(caballero)
    });

    nodoCaballero.appendChild(button);
    

    container.appendChild(nodoCaballero);
                            
  }

  function elegirFavorito(caballero)
  {
      localStorage.setItem("favorito", JSON.stringify(caballero));
      alert('Guardaste tu favorito');
  }

  function mostrarFavorito()
  {
    let favorito = localStorage.getItem("favorito");
    
    if(favorito)
    {
        favorito = JSON.parse(favorito);
        alert(`Tu favorito es: ${favorito.nombre}`)
    }

  }


  function mostrarCaballeros()
  {
      let caballeros = localStorage.getItem("caballeros")
      if(caballeros)
      {
          caballeros=JSON.parse(caballeros);
          caballeros.forEach(element=>{
              console.log(element);
          })
      }
  }