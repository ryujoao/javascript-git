// Obtém os valores dos campos de entrada
let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade");

// Adiciona um evento de formulário
// submit

form.addEventListener("submit", function (event) {
    // Previne o comportamento padrão
    event.preventDefault();

    // Cria um novo item de lista com os valores
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Nome: </strong> ${nome.value} <br> <strong>Email: </strong> ${email.value} <br> <strong>Cidade: </strong> ${cidade.value}`;

    // Adiciona o novo item na lista
    cadastroList.appendChild(listItem);

    // Limpa os campos de entrada
    form.reset();



});