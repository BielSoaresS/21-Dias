// Sistema de caixa eletronico com DOWhile(exercicio 2 DIA 7 CURSO 21 DIAS DODEV)
// Passei 1 hora para resolver esse exercicio. Vou melhorar!
let saldo = 10000
let continuar = "1"
let contador = 0
let valortotal = 0
let valor = 0
let nome = ''
do{
    nome = prompt('Nome: ')
    let cpf = parseInt(prompt('CPF:'))
    valor = parseInt(prompt('Valor:R$'))

    while(valor <= 0){
        console.log('Valor invalido. Tente novamente! ')
        valor = parseInt(prompt('Valor Invalido! Valor:'))
    }
    let opções = parseInt(prompt("[1] SAQUE [2] DEPOSITO"))
    valortotal = valortotal + valor
    
    if(continuar == "1"){
        contador ++
    }

    media = valortotal / contador
    
    if(opções == "1"){
        while(valor > saldo){
            console.log('Saque acima do saldo. Tente novamente! ')
            valor = parseInt(prompt('Valor Invalido! Valor:'))
        }
        saldo = saldo - valor 
    }

    else if(opções == "2"){
        saldo = saldo + valor 
    }

    continuar = parseInt(prompt('Deseja continuar?(1[SIM] 2[NÃO]): '))
    console.log('Olá '+nome+',',' CPF:'+cpf)
    console.log('Saldo disponivel:R$'+saldo)
    
} while (continuar == "1");
console.log('O maior valor movimentado foi:R$'+valor)
console.log('Media dos valores movimentados:R$'+media)
