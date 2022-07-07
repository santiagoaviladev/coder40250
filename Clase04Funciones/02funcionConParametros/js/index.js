
let operacionUsuario = prompt(`INGRESE UNA OPERACIÓN
                                SUMA
                                RESTA
                                MUL
                                DIV`);

calculadora(operacionUsuario)

function calculadora(operacion) {
    let numero1 = Number(prompt("Ingresa un numero"))
    let numero2 = Number(prompt("Ingresa numero2"))

    switch (operacion) {
        case "SUMA":
            sumar(numero1, numero2)
            break;
        case "RESTA":
            restar(numero1, numero2)
            break;
        case "DIV":
            dividir(numero1, numero2)
            break;
        case "MUL":
            multiplicar(numero1, numero2)
            break;
        default:
            alert("OPERACION INVÁLIDA")
            break;
    }
}


function sumar(x,y)
{
    let resultado = x+y;
    mostrarResultado(resultado)
}

function multiplicar(x,y)
{
    let resultado = x*y;
    mostrarResultado(resultado)
}

function dividir(x,y)
{
    let resultado = x/y;
    mostrarResultado(resultado)
}

function restar(x,y)
{
    let resultado = x-y;
    mostrarResultado(resultado)
}

function mostrarResultado(resultado)
{
    alert("El resultado es: "+resultado)
}