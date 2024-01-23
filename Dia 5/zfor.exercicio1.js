console.log('-----Contador-----')
let num = parseInt(prompt('Digite um número'))
if(num < 0){ 
        console.log('Opção invalida! Tente Novamente')
        num = parseInt(prompt('Digite um número'))
}
for(contador = 0; contador <= num; contador++){
    console.log(contador)
}