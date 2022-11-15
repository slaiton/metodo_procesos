

    // $(document).ready(function(){
    //       $(".metodo").on('click', function(){
    //       var metodo = $(this).attr('id');
  
    //       switch (metodo) {
    //         case 'laplace':
                
    //             alert(metodo)
                
    //             matriz = [[4,5,6,5],[10,15,0,3],[11,8,1,5],[6,4,2,9]];
    //             resp =  laPlace(matriz);
                
    //             console.log(resp);
                
                
    //             break;
                
    //             default:
    //                 break;
    //             }
                
    //         });
    //     });









var filas = 0;
    columnas = 0;
    // matriz = [[4,5,6,5],[10,15,0,3],[11,8,1,5],[6,4,2,9]];
    coheficiente = 0;

    // resp =  laPlace(matriz);            
    // console.log(resp);
                

    function laPlace(matriz)
    {

        console.log("matriz:");
        console.log(matriz);


    var coh = matriz.length;
    var totalFila = 0;
    var totalFinal = 0;
    var mayor = 0;
    var anterior = 0;

      for (let a = 0; a < matriz.length; a++) {
        var linea = matriz[a];
        // console.log("FILA #" + a);
        totalFila = 0;

        for (let b = 0; b < linea.length; b++) {
            var element = linea[b];
            totalFila += element;
        }

        totalFinal = totalFila/coh;
        
        if(totalFinal > anterior)
        {
            mayor = totalFinal;
        //   console.log(totalFinal + "Mayor que "+anterior);
        }
        anterior = totalFinal;
    }

      return mayor;

    }