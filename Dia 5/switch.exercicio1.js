console.log('----Calculadora----')
let num1 = parseInt(prompt("Digite um valor: "))
let num2 = parseInt(prompt('Digite outro valor: '))
let opção =prompt('Opções:[1] Soma [2]Subtração [3] Multiplicação [4] Divisão')
switch(true){
    case opção == 1:
        soma = num1 + num2 
        console.log('A soma entre '+ num1, "e "+ num2, 'é igual a ' + soma)
        break;
    case opção == 2:
        subtração = num1 - num2
        console.log('A subtração entre '+num1, "e "+ num2, "é igual a " + subtração )
        break;
    case opção == 3:
        multiplicação = num1 * num2
        console.log('A multiplicação entre '+num1, 'é '+num2, 'é igual a  '+ multiplicação)
        break;
    case opção == 4:
        divisão = num1 / num2
        console.log('A divisão entre '+num1, 'e '+num2, 'é igual a '+divisão) 
        break;
    default:
        console.log('Opção Invalida. Tente Novamente!')     
        break;     
}
