//exercicio:Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números
console.log('-----TABUADA-----')
let num = Number(prompt('Digite um número: '))
for(c = 0; c <= 10; c++){
    console.log(num + ' x '+ c, '= ' + (num*c))
}
console.log("-------------------")
for(c = 0; c <= 10; c++){
    console.log((num+1) + ' x '+ c, '= ' + ((num+1)*c))
}
console.log("-------------------")
for(c = 0; c <= 10; c++){
    console.log((num+2) + ' x '+ c, '= ' + ((num+2)*c))
}