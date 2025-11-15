let numero = parseFloat(prompt("Informe um numero"))
var fatorial = 1
for(let i = 1; i <=numero; i++){
    fatorial*=i;
}
alert(`${numero}! = ${fatorial}`)