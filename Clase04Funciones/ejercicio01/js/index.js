

  /*
    Escriba un programa que solicite a un usuario una combinación 
    login / password 

    La rutina debe llamar a una función que verifique la combinación 
    Si el login es "usuario1" y el password es "password1"

    El programa mostrará un mensaje que diga: "LOGIN EXITOSO"
    En caso contrario, deberá mostrar un mensaje que diga: "ERROR"

    Siempre que haya un error, el programa deberá pedir de nuevo los datos de acceso
  
  */

  /*
      1. Pedir un username
      2. Pedir un password
      3. Validar combinación
        3.1 Si combinación es exitosa: MOstrar "LOGIN EXITOSO"
        3.2 Si no, mostrar "ERROR"
  */ 

    let nombreUsuario = ""
    let contra = ""
    init();

    function init()
    {
      pedirDatos()
      let esValido = validarDatos(nombreUsuario,contra)
      validarLogin(esValido)
    }

    function pedirDatos()
    {
      nombreUsuario = prompt("Inrgese nombre usuario")
      contra = prompt("Ingrese Contraseña")
      
    }

    function validarDatos(username, pwd)
    {
      let esValido = false;
      if(username==="usuario1" && pwd==="password1")
      {
        esValido=true;
      }
      return esValido;
    }

    function validarLogin(isValid)
    {
       if(!isValid)
       {
          alert("ERROR")
          init();  

       }
       else
       {
         alert("LOGIN EXITOSO")
       }
    }



    

    
