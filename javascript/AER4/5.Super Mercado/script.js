function discount(){
    var preço = document.getElementById("preco").value;
    var item = document.getElementById("produto").value;

    var terceiroItem = preço * 0.5;
    var total = preço*2 + terceiroItem;
    
    document.getElementById("nome").innerHTML = item;
    document.getElementById("desconto").innerHTML = terceiroItem;
    document.getElementById("promo").innerHTML = total;
}
