// Obtém os botões do DOM
let btnMudaCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

//Adiciona um evento de clique ao botão 'Mudar cor de fundo'
btnMudaCor.addEventListener("click", function() {
    document.body.style.background = "#63B8FF"  
});

// Adiciona um evento de cliqueao botão 'Voltar cor normal'

btnVoltarCor.addEventListener("click", function() {
    document.body.style.background = "#FFFACD"
});