    /*
        Escriba un programa que pida al usuario:
        Una operacion: SUMA / MUL 
        2 números
        e imprima en consola, el resultado de la operación.
        
        Complete el ejercicio, con DIVISION y RESTA. 

        SI TRATA DE DIVIDIR POR 0; MUESTRE UN ERROR

    */ 


    const operacion = prompt(`INGRESE UNA OPERACION: 
        SUMA 
        MUL
        DIV
        RESTA`);

    const numero1 = Number(prompt("Ingrese un número"));
    const numero2 = Number(prompt("Ingrese otro número"));

    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("NUMEROS NO VALIDOS")
    }
    else
    {
        
    }
