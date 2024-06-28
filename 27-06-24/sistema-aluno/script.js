const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// criando uma função para limpar o campo
function clearForm() {
    inputNotaValue = "";
}
 
// Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputNotaValue = inputNota.value;
    //console.log(inputNotaValue);

// validação de formulário
if (inputNotaValue === '') {
    alert("Campo obrigatório");
    return false;
}



// lógica    
if (inputNotaValue >= 6) {
    alert("Você está aprovado");
} else {
    alert("Você está reprovado");

}

// chamando a função limpar campo
clearForm();


   
});

