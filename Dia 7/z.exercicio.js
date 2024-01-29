//Exercicio 1
pergunta = "s"
while(pergunta == "s"){
    console.log('-----REGISTRO DE USUARIO-----')
    let nome = prompt('Nome:')
    let idade = parseInt(prompt('Idade: '))
    let peso = parseFloat(prompt('Peso: '))
    let altura = parseFloat(prompt('Altura: '))
    let profissão = prompt('Profissão: ')
    let nasc = 2023 - idade
    let c = 0
    console.log('Olá '+nome+',','você tem '+idade+' anos ','nascido em '+nasc+', ','é '+profissão+',', 'tem '+altura,'de altura e pesa '+peso+"kg.")

    if(idade >= 18){
        console.log('Está liberado para tomar umas geladas')
    }
    else{
        console.log('Sem gelada para você')
    }

    console.log('Você tem '+(idade*12),'meses de vida')
    console.log('Voce tem '+(idade*12*4),'semanas de vida')
    console.log('Você tem '+(idade*12*365),'dias de vida')
    console.log('-----------------------------')

    console.log('-----CALCULO DE IMC-----')
    let imc = peso/(altura*altura)

    if(imc < 18.5){
        console.log('IMC:'+imc)
        console.log('Estado de Magreza!. Procure um medico!')
    }
    else if(imc >18.5 && imc <= 24.9){
        console.log('IMC:'+imc.toFixed(2))
        console.log('Estado Normal. Continue Assim!')
    }
    else if(imc > 24.9 && imc <= 30){
        console.log('IMC:'+imc.toFixed(2))
        console.log('Estado de Sobrepeso. Tome cuidado!')
    }
    else{
        console.log('IMC:'+imc.toFixed(2))
        console.log('Estado de Obesidade. Procure um medico!')
    }

    console.log("-----------------------------S")

    for(c = 0; c < idade; c++){
        console.log(nasc+c+' - '+ c+' anos de idade')
    }
    pergunta = prompt('Deseja Continuar?(s/n)')       
} 