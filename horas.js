let dormiu = parseInt(prompt("Horas de dormir"))
let acordou = parseInt(prompt("Horas de acorda"))
let sono = 0
if(dormiu >=12 && acordou <12){
    sono=24-(horas-acordar)
    alert(`${sono} horas de sono`)
}else{
    sono=acordou-dormiu
    alert(`${sono}horas de/ sono`)
}
let i = 1
while(i <=sono){
    alert(`${i} horas dormindo`)
    i++;
}