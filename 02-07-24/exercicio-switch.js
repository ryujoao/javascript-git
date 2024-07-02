/*
*/

const tipoDrink = 'cerveja';

switch (tipoDrink) {
    case 'água':
        console.log("Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.");
        break;
    case 'refri':
        console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.");
        break;
    case 'suco':
        console.log("Bebida produziada por líquido extraído de frutos.");
        break;
    case 'cerveja':
        console.log("Bebida alcoólica produzida a partir da fermentação de cereais, principalmente a cevada maltada");
        break; 
    default:
        console.log("Bebida desconhecida.");
        break;

}