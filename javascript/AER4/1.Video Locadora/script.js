function convert(){

    var filme = document.getElementById("filme").value;
    var x = document.getElementById("duracao").value;
    if(x >= 60){
        var minutos = x%60;
        var horas = x/60;
        var horasArredondado = parseFloat(horas.toFixed(0));
        //alert("Filme: " + filme + ", " + horasArredondado + " Hora(s) e " + minutos+" minuto(s).");
        document.getElementById("txt").innerHTML = filme;
        document.getElementById("txt2").innerHTML = horasArredondado;
        document.getElementById("txt3").innerHTML = minutos;
    } else{
        //alert("filme: " + filme, + " " + x)
        document.getElementById("txt").innerHTML = filme;
        document.getElementById("txt2").innerHTML = 0;
        document.getElementById("txt3").innerHTML = x;
    }

};