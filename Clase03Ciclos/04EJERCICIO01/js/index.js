/*
 Escriba un programa que muestre 
 la configuración inicial de un tablero de ajedrez: 
 TCARRACT
 PPPPPPPP
 00000000
 00000000
 00000000
 00000000
 PPPPPPPP
 TCARRACT
*/

 for(let i=0;i<8; i++)
 {
     if(i===0 || i===7)
     {
         console.log("TCARRACT")
     }
     else if(i===1 || i===6)
     {
        console.log("PPPPPPPP")
     }
     else
     {
        console.log("00000000")
     }
 }
   