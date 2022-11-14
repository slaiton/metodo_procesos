$(document).ready(function(){

    console.log(getRandomNumber(1,999));

    $("#columnas").on('blur', function(){

        var col = $("#columnas").val();
        var fil = $("#filas").val();
        var obj = "";

        console.log("Longitud: "+col.length);

        if(col.length > 0 && col != 0)
        {
            console.log('OKK');

                 obj += "<table>"
     
             for (let a = 0; a < col; a++) {
                // var number = getRandomNumber(1,999);
                 obj += "<tr>";
                 for (let b = 0; b < fil; b++) {
                     obj += "<td>  <input style='width:50px;' type='number' id='"+a+"-"+b+"'>  <td>";
                 }
                 obj += "</tr>";
             }
             obj += "</table>";
             
             $(".matriz").html(obj);
             $(".reload").removeClass('hide');
             $(".reload").attr('id', col+"-"+fil);

        }else if(col.length == 0 || col == 0){
            // console.log('KOO');
            // alert("Es necesario indicar columnas");
            // $("#columnas").focus();
            // $("#columna").addClass('is-invalid');
        }



    });

    $(".reload").on('click', function(){

       var range = $(this).attr('id');
       range = range.split('-');
       var col = range[0];
       var fil = range[1];

       for (let a = 0; a < col; a++) {
        for (let b = 0; b < fil; b++) {
            var number = getRandomNumber(1,999);
            var id = a+"-"+b;
            $("#"+id).val(number);
        }
       }

    });

    


});

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }