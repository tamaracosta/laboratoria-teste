
var nome = prompt("Qual é seu nome completo?");

var bemVindo = prompt("Seja bem vindo(a) " + nome + "!" + " Podemos começar? \n 1.Sim \n 2.Não");

if (bemVindo == "2") {
    alert("Ah que pena! Volte depois!!!");

} else {

    var respostasCertas = "";
    var respostasErradas = "";


    var resposta1 = prompt("1.Onde surgiu a Laboratoria? \n a.México \n b.Colômbia \n c.Peru");
    if (resposta1 == "c") {
        respostasCertas = respostasCertas + "Resposta 1 Correta <br>";
    } else {
        respostasErradas = respostasErradas + "Resposta 1 Errada <br>";
    }


    var resposta2 = prompt("2.Qual era nome da agência que deu início a tudo em 2013? \n a.Ahu \n b.Ayu \n c.Ashu");
    if (resposta2 == "b") {
        respostasCertas += "Resposta 2 Correta <br>";
    } else {
        respostasErradas = respostasErradas + "Resposta 2 Errada <br>";
    }



    var resposta3 = prompt("3.Em que país a Laboratoria não tem sede? \n a.Peru \n b.Brasil \n c.Espanha");
    if (resposta3 == "a") {
        respostasCertas += "Resposta 3 Correta <br>";
    } else {
        respostasErradas = respostasErradas + "Resposta 3 Errada <br>";
    }

    var resposta4 = prompt("4.Qual porcentagem de aprovação de empregabilidade atual de acordo com o site? \n a.90% \n b.78% \n c.65%");
    if (resposta4 == "b") {
        respostasCertas += "Resposta 4 Correta <br>";
    } else {
        respostasErradas = respostasErradas + "Resposta 4 Errada <br>";
    
        
                
    }

    
document.querySelector("#respostaCorreta").innerHTML = respostasCertas
document.querySelector("#respostaIncorreta").innerHTML = respostasErradas

} 









