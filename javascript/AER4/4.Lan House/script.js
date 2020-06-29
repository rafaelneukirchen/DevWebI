function calcular(){
    var valor = document.getElementById("valor").value;
    var tempo = document.getElementById("tempo").value;

    if(tempo % 15 == 0){
        var preco = valor*tempo/15;
        document.getElementById("preco").innerHTML = preco;
    } else {
        var preco = Math.ceil(tempo / 15)*valor;
        document.getElementById("preco").innerHTML = preco;
    }

}