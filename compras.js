let item = parseInt(prompt("Quanto item tem no carrinho?"))
let total = 0, preco = 0 ;
document.writeln(`<br>merca do atlas<br><br>`)
for(let i = 1; i <= item; i++){
    let preco = parseFloat(prompt("Digite o preço do intes"+ i +""));
    document.writeln(`Item ${i}: R$ ${preco}<br>`)
    total += preco;
}
document.writeln("VALOR TOTAL!:\n"+total.toFixed(2));