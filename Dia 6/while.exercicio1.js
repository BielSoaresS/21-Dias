// Sistema de notas com While
// Tive um pouco mais de linhas nesse codigo, pois quis deixar bem arrumado. pretendo deixar mais enxuto no futuro
let continuar = "s"
let contador = 1
let soma = 0
let media = 0
let contadorm = 0
let contadorf = 0
while(continuar == "s"){
    console.log('-----ALUNO'+contador+"-----")
    let nota = parseFloat(prompt(('Nota Do aluno: ')))
    console.log('Nota: '+nota)
    let sexo = (prompt('Sexo(m/f): '))
    if(contador == 1){
        notamaior = nota
    }
    else{
        if(nota > notamaior)
            notamaior = nota
    }
    if(sexo == "m"){
        contadorm ++
    }
    continuar = prompt('Deseja Continuar?(s/n): ')
    if(continuar == "s")
        contador ++ 
    if(mulher = nota > 7){
        contadorf ++
    }
    soma = soma + nota
    media = soma / contador
}
console.log('----RESULTADOS-----')
console.log('A media geral dos alunos foi '+media)
console.log(contadorm+' Homens enviaram suas notas')
console.log(contadorf+" Mulheres tiraram nota acima de 7")
console.log("A maior nota dos alunos registrados foi "+notamaior)