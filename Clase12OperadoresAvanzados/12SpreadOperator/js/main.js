 
    const mascotas = ["firulais", "coco", "pochi", "tron"]; 

    console.log(...mascotas); 
    // console.log(mascotas[0], mascotas[1], mascotas[2], mascotas[3])


    const numeros = [1,2,5,6,100,200,350,201];

    const max = Math.max(...numeros);
    console.log(max);


    const producto = {
        id: 1,
        nombre: "MAC AIR 2015",
        valor: 1500,
        promocion: '20%',
        color: "Negro",
    }

   
    const producto2 = {...producto, caja:"carton"};
    producto2.id=2;
    console.log("PRODUCTO:", producto);
    console.log("PRODUCTO2:", producto2);