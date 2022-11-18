$(document).ready(function () {
    $(".valorEsp").on('submit', function (e) {
        e.preventDefault();

        var method = $("#method").val();
        
        if (method == 0) {
            $("#method").focus();
        } else {
            method = method[0];
            var matriz = getMatriz();
            var coheficiente = 0.65;
            var result = "";
console.log( "El metodo es: ", method);
            switch (method) {
                case 'laplace': 
                    console.log("Inicia laplace");
                    result = laPlace(matriz) ;
                break;
                case 'hurwicz': 
                    console.log("Inicia hurwicz");
                    result = hurwicz(matriz, coheficiente) ;
                break;
                case 'savage': 
                    console.log("Inicia savage");
                    result = savage(matriz) ;
                break;
                case 'optimista': 
                    console.log("Inicia optimista");
                    result = optimista(matriz) ;
                break;
                case 'pesimista': 
                    console.log("Inicia pesimista");
                    result = pesimista(matriz) ;
                break;
            }
            $("#result").html("Valor Esperado: " + result);
        }
    });

    $("#columnas").on('blur', function () {
        var col = $("#columnas").val();
        var fil = $("#filas").val();
        var obj = "";

        // console.log("Longitud: "+col.length);
        if ((col.length > 0 && fil.length > 0) && (col != 0 && fil != 0)) {
            // console.log('OKK');

            obj += "<table>"
            for (let a = 0; a < col; a++) {
                obj += "<tr>";
                for (let b = 0; b < fil; b++) {
                    obj += "<td>  <input style='width:50px;' type='number' id='" + a + "-" + b + "'>  <td>";
                }
                obj += "</tr>";
            }
            obj += "</table>";

            $(".matriz").html(obj);
            $(".reload").removeClass('hide');
            $(".reload").attr('id', col + "-" + fil);

        } else if ((col.length == 0 || fil.length == 0) || (col == 0 || fil == 0)) {
            // console.log('KOO');
            // alert("Es necesario indicar columnas");
            // $("#columnas").focus();
            // $("#columna").addClass('is-invalid');
        }
    });

    $(".reload").on('click', function () {
        var range = $(this).attr('id');
        var matriz = reloadTable(range);
    });
});

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function reloadTable(range) {
    range = range.split('-');
    var col = range[0];
    var fil = range[1];
    var arrGrande = [];
    // var arrMedian = [];

    for (let a = 0; a < col; a++) {
        var arrMedian = [];
        for (let b = 0; b < fil; b++) {
            var number = getRandomNumber(1, 999);
            arrMedian.push(number);
            var id = a + "-" + b;
            $("#" + id).val(number);
        }
        arrGrande.push(arrMedian);
    }
    return arrGrande;
}


function getMatriz() {
    var range = $(".reload").attr('id');
    range = range.split('-');
    var col = range[0];
    var fil = range[1];
    var arrGrande = [];
    // var arrMedian = [];

    for (let a = 0; a < col; a++) {
        var arrMedian = [];
        for (let b = 0; b < fil; b++) {
            var id = a + "-" + b;
            var number = $("#" + id).val();
            arrMedian.push(parseInt(number));
        }
        arrGrande.push(arrMedian);
    }
    return arrGrande;
}