const apagar = document.querySelector("#apagar");

apagar.addEventListener("click", () => {
    //limpa todos os valores no localStorage
    localStorage.clear();

    // limpa lista de interface
    listaValores.innerHTML = "";
})