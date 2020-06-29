function promocao(){
    var veiculo = document.getElementById("veiculo").value;
    var preco = document.getElementById("preco").value;
    var entrada = preco/2;
    var parcela = entrada/12;
    document.getElementById("promo").innerHTML = veiculo;
    document.getElementById("entrada").innerHTML = entrada;
    document.getElementById("parcelas").innerHTML = parcela;
}