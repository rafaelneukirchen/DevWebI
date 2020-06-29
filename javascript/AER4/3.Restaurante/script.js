function calcular(){
    
    var valor = document.getElementById("preco").value;
    var pesoGr = document.getElementById("peso").value;
    
    const y = valor;
    const x = pesoGr;
    
    const preco = x*y/1000;
    const precoArredondado = parseFloat(preco.toFixed(2));

    document.getElementById("valor").innerHTML = precoArredondado;


}