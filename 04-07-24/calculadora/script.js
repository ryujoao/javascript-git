    //Obtém os elementos do DOM
    let valor1 = document.getElementById("valor1");
    let valor2 = document.getElementById("valor2");
   
    //Botões
    const btnSomar = document.getElementById("btnSomar");
    const btnSubtrair = document.getElementById("btnSubtrair");
    const btnMultiplicar = document.getElementById("btnMultiplicar");
    const btnDividir = document.getElementById("btnDividir");
    //Botão resultado
    const resultado = document.getElementById("resultado"); 

    //Adiciona um evento de clique no botão
    btnSomar.addEventListener("click", function() {
        //Converte os valores dos inputs para números e soma
        let soma = Number(valor1.value) + Number(valor2.value);
        
        // Exibe o resultado na tela
        resultado.textContent = soma;

        valor1.value = "";
        valor2.value = "";

        setTimeout(function(){
            resultado.innerHTML = 0;
        }, 2000);
    });

    btnSubtrair.addEventListener("click", function(){
        let sub = Number(valor1.value) - Number(valor2.value);
        resultado.textContent = sub;
        
        setTimeout(function(){
            resultado.innerHTML = 0;
            valor1.value = "";
            valor2.value = "";
        }, 2000);
    });
    
    btnMultiplicar.addEventListener("click", function(){
        let mult = Number(valor1.value) * Number(valor2.value);
        resultado.textContent = mult;
        
        setTimeout(function(){
            resultado.innerHTML = 0;
            valor1.value = "";
            valor2.value = "";
        }, 2000);
    });

    btnDividir.addEventListener("click", function(){
        let div = Number(valor1.value) / Number(valor2.value);
        resultado.textContent = div;
        
        setTimeout(function(){
            resultado.innerHTML = 0;
            valor1.value = "";
            valor2.value = "";
        }, 2000);
    });

    