function parabens (a,b)
{
    if (b == 5)
    {
          alert("Parabéns "+a+" todas as respostas estão corretas, "+a+" é um expert!")
    }
    
}

let pontuacao = 0
let nome = prompt("Informe seu nick")
let pergunta1 = prompt("Questão-1) Qual é a capital do brasil?\nALTERNATIVA\na)Sao Paulo\nb)Rio de Janeiro\nc)Brasilia\nd)Bahia")
if (pergunta1.toLowerCase() == "c" ){
    alert("Correto")
pontuacao++;}
else
    alert("Errado")
let pergunta2 = prompt("Questão-2) Quanto é 5*5 ?\nALTERNATIVAS:\na)25\nb)23\nc)30\nd)20")
if (pergunta2.toLowerCase() == "a" ){
    alert("Correto")
    pontuacao++;}
else
    alert("Errado")
let pergunta3 = prompt("Questão-3) Qual o planeta conhecido como planeta vermelho?\nALTERNATIVAS:\na)marte\nb)venus\nc)sartuno\nd)plutao")
if (pergunta3.toLowerCase() == "a" ){
    alert("Correto")
    pontuacao++;}
else
    alert("Errado")
let pergunta4 = prompt("Questão-4) Qual o maior rio do mundo?\nALTERNATIVAS:\na)Rio Nilo\nb)Rio Sao francisco\nc)Rio Amazonas\nd)Rio Purus")
if (pergunta4.toLowerCase() == "c" ){
    alert("Correto")
    pontuacao++;}
else
    alert("Errado")
let pergunta5 = prompt("Questão-5) Qual estado o municipio de boca do acre?\na)Acre\nb)Amazonas\nc)Amapa\nd)Mato-grosso")
if (pergunta5.toLowerCase() == "b" ){
    alert("Correto")
    pontuacao++;}
else
    alert("Errado")
alert("Você respondeu 5 perguntas do quiz, sua pontuação é: "+pontuacao)
parabens(nome, pontuacao)