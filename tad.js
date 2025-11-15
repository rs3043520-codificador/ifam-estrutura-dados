const copas = [1958,1962,1970,2002];
let opcao
    do{
         opcao = prompt("Oque você deseja dicionar? inserir no inicio 1\n1 remover inicio 2\n2 inserir final 3\n remover final 4\n informa tamanho\n5:")
         switch(opcao){
            case '1':
                let valorinicio=parseInt(prompt("digitr o ano para inserir ni inicio:"))
            copas.shift(valorinicio);
            alert("vetor agora "+ copas.join())
             break;

            case '2':
                let copas = parseInt(prompt("Digite oque voçê quer remover"));
             copas.shift(valorinicio)

             
            case '2': rotaB++;break;  
            default: contNulos++;break;           
        } 
    }while(op!= -1);
    