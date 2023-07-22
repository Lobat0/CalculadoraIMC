
//função para colcular o IMC
function calcularIMC () {
    //declarar e puxar variaveis
    var alturaInput = document.getElementById("altura")
    var pesoInput = document.getElementById("peso")
    var resultadoDiv = document.getElementById("resultado")

    //transformar as variaveis em float
    var altura = parseFloat(alturaInput.value)
    var peso = parseInt(pesoInput.value); //convertendo

    //tratamento de erro
    if (isNaN(altura) || isNaN(peso)) {
        resultadoDiv.innerHTML = "Introduza uma altura e um peso válidos."
        return;
    }

    //calculo imc
    var imc = peso / ((altura / 100) ** 2)
    var categoria = ""
    
    //condição do peso
    if(imc <18.5) {
        categoria = "Abaixo do peso"
    } else if (imc < 25){
        categoria ="Peso ideal"
    } else if (imc < 30){
        categoria = "Acima do peso"
    } else {
        categoria = "Obeso"
    }

    //impressão do resultado
    resultadoDiv.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (" + categoria + ")";

}