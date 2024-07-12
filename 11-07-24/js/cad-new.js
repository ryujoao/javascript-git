const campo = document.querySelector("#campo");
const salvar = document.querySelector("#salvar");

// criando um elemento P
const pMensagem = document.createElement("p");

// adicionar evento de clique no botão salvar
salvar.addEventListener("click", function () {
    const valor = campo.value;

    // validação
    if (valor.trim() === "") {
        //alert("Campo obrigatório");
        pMensagem.textContent = "Campo obrigatório!";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");

        return;
    }


    // salvar no LocalStorage
    const chave = `valorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor);

    // limpar campo após salvar
    campo.value = "";

    // exibr os valores salvos
    carregarValoresSalvos();

});