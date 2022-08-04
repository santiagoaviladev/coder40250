 
 let colorFavorito = localStorage.getItem("colorFavorito") || "No DEFINIDO";

 colorFavorito === "No DEFINIDO" && pedirColorFavorito();

 function pedirColorFavorito()
 {
   let color = prompt("Ingrese su color favorito")
   localStorage.setItem("colorFavorito", color);
 }

 console.log(colorFavorito);