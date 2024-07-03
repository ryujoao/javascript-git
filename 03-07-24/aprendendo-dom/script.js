// Obtém o elemento do DOM com o ID 'idNome'
let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCity");

function mudar (event) {
    //previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();
    
    
    document.getElementById("titulo").innerHTML = nome.value;
    document.getElementById("titulo2").innerHTML = cidade.value;

    nome.value = '';
    cidade.value = '';
}

