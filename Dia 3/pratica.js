let nome = ''
let idade = 0
let altura = 0
let peso = 0 
let imc = 0

nome = prompt('Nome: ')
idade = parseInt(prompt('Idade: '))
altura = parseFloat(prompt('Altura: '))
peso = parseFloat(prompt('Peso: '))

nasc = 2023 - idade 
imc = parseFloat(peso / (altura*altura))

console.log("Olá " + nome + ","," Você tem " + idade, "anos, nasceu em "
+ nasc, "Tem " + altura, "de altura, pesa " + peso, "kg e seu IMC é " + imc, "kg/m²")
