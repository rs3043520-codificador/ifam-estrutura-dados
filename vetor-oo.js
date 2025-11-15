
var vetor = new Array();
vetor[0] = "olá";
vetor[98] = "estudo"
vetor[99] = "ifam";

/*if (vetor.length == 100) alert("O length é 100.");
alert(vetor[vetor.length-1])*/

/*vetor.forEach(function (item, indice, array) {
  alert(item, indice);
}); */
var primeiro = vetor.shift();
vetor.shift()
vetor.forEach(function (item, indice, array){
    alert(item,indice);
});
