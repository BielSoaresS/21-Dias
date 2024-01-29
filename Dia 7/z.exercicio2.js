// Exercicio 2: Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.
console.log('-----Informações-----')
let nome = prompt('Nome: ')
let idade = parseInt(prompt('Idade: '))
let salarioAtual = parseFloat(prompt('Salario Atual: '))
let pergunta = "N"

while (pergunta == "N") {
    console.log('Nome:'+nome)
    console.log('Idade:'+idade)
    console.log('Salario Atual:'+salarioAtual)
    pergunta = prompt('Suas Informações estão corretas?(S/N)').toUpperCase()

    if(pergunta == 'N'){
        console.log('-----Novas Informações-----')
    }
    else{
        break
    }

    nome = prompt('Nome: ')
    idade = parseInt(prompt('Idade: '))
    salarioAtual = parseFloat(prompt('Salario Atual: '))
}
console.log('-----Previsão de Salario-----')
let aumento = 0.015
for(let ano = 1; ano <= 10; ano ++){
    salarioAtual = salarioAtual + (salarioAtual*aumento)
    aumento = aumento * 2
    console.log(2024 + ano,' - R$'+salarioAtual.toFixed(2))
    
}
