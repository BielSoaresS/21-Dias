let nome = prompt('Nome: ')
let idade = parseInt(prompt('idade: '))
let carteira = prompt('Você possui carteira de motorista?')
let carro = prompt('Você possui carro?')
if(idade < 18 || carteira == "não"){
    console.log(nome + ",", "Você não pode dirigir")
}
else if(idade >= 18 && carteira == "sim" && carro == "não"){
    console.log(nome + ",", "Você pode dirigir, mas não tem um carro")
}
else if(idade >= 18 && carteira == "sim" && carro == "sim"){
    console.log("Você pode ser o motorista!")
}