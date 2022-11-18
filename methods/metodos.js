

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

    function obtenerMenor( arr ){
        var menor = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if( arr[i] < menor ){
                menor = arr[i];
            }
        }
        return menor;
    }
    
    function obtenerMayor( arr ){
        var mayor = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if( arr[i] > mayor ){
                mayor = arr[i];
            }
        }
        return mayor;
    }
    
    
    function pesimista( matriz ){
        var menor = [];
        for (let i = 0; i < matriz.length; i++) {
            menor[i] = obtenerMenor( matriz[i] );
            console.log("El menor es: ", menor[i]);
        }
    
        var mayor = obtenerMayor( menor); menor[0];
        console.log("El mayor es: ", mayor);
    
        return mayor;
    }
    
    function optimista( matriz ){
        var max = [];
        for (let i = 0; i < matriz.length; i++) {
            max[i] = obtenerMayor( matriz[i] );
            console.log("El mayor es: ", max[i]);
        }
    
        var mayor = obtenerMayor( max );
        console.log("El mayor es: ", mayor);
    
        return mayor;
    }
    
    function hurwicz( matriz, coheficiente ){
        console.log(matriz);
        console.log(coheficiente);
        var valor = [];
        for (let i = 0; i < matriz.length; i++) {
            var menor = obtenerMenor( matriz[i] );
            var mayor = obtenerMayor( matriz[i] );
            valor[i] =  (mayor * coheficiente) + (menor * ( 1 - coheficiente));
            console.log( "Menor ", menor, " Mayor ", mayor, " Ve ", valor[i]);
            
        }
        return obtenerMayor( valor );
    }
    
    function obtenerColumna(matriz, columna){
        var column = [];
        for(var i=0; i<matriz.length; i++){
           column.push(matriz[i][columna]);
        }
        return column;
     }
    
    function savage( matriz ){
        var mayor = [];
        var valorMatriz = matriz;
        var valorEsperado = [];
        for (let i = 0; i < matriz.length; i++) {
            mayor[i] = obtenerMayor( obtenerColumna( matriz, i ) );
            console.log(mayor[i])
        }
        
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                valorMatriz[i][j] = mayor[j] - matriz[i][j];
            }
        }
        
        for (let i = 0; i < matriz.length; i++) {
            valorEsperado[i] = obtenerMayor( matriz[i] );
        }
    
        console.log( valorMatriz );
        console.log( valorEsperado );
        return obtenerMenor(valorEsperado);
    }