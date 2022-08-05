 
  let producto = {
      id: 1,
      nombre: "MAC AIR 2015",
      valor: 1500,
      promocion: '20%',
      color: "Negro",
  }

  let servicio = {
    id: 1,
    nombre: "Capacitación",
    valor: 1500,
  }



  imprimirIva(producto);
  imprimirIva(servicio);

  function imprimirIva( {valor})
  {
     console.log(valor, valor*0.25, valor+valor*0.25);
  }