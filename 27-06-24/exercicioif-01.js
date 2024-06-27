/*
- Armazene em uma constante apenas a hora atual na qual 
você está fazendo este exercício
- À partir das 6, exiba "Bom dia!" no console
-À partir das 12, exiba "Bom tarde!" no console
- À partir das 18, exiba "Bom noite!" no console
*/

const hora = 10;
const bomDia = hora >= 6 && hora < 12;
const boaTarde = hora >= 12 && hora < 18;


if (bomDia) {
    console.log("Bom dia!");
} else if (boaTarde) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");

}