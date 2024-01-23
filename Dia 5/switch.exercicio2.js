console.log('-----Posto de Gasolina-----')
let opções = prompt("Opções: [1]Gasolina [2]Alcool [3]Calibrar Pneus")
switch(true){
    case opções == 1:
        let valorGasolina = parseInt(prompt('Quanto reais você deseja abastecer?'))
        litroGasolinaTotal = valorGasolina / 5 
        console.log('Seu carro foi abastecido com '+litroGasolinaTotal, "litros de gasolina.")
        break;
    case opções == 2:
        let valoraAlcool = parseInt(prompt('Quantos reais você deseja abastecer?')) 
        litroaAlcoolTotal = valoraAlcool / 3
        console.log('Seu carro foi abastecido com '+litroaAlcoolTotal, 'litros de alcool.')
        break;
    case opções == 3:
        console.log('Pneus calibrados com sucesso!')
        break;
    default:
        console.log('Opção invalida. Tente novamente!')
        break;
    }