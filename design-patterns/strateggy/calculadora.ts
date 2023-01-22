import Icms from "./icms";
import Iss from "./iss"

class calculadoraDeImpostos{
    calcular(orcamento, imposto){
        return imposto.calculaOrcamento(orcamento);
    }
}


const calculoNovo = new calculadoraDeImpostos;

console.log(calculoNovo.calcular(100, new Icms))
console.log(calculoNovo.calcular(100, new Iss))

