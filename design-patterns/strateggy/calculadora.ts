import Icms from "./icms";
import Imposto from "./interfaceImposto";
import Iss from "./iss"

class calculadoraDeImpostos{
    public calcular(orcamento : number, imposto: Imposto){
        return imposto.calculaOrcamento(orcamento);
    }
}


const calculoNovo = new calculadoraDeImpostos;

console.log(calculoNovo.calcular(100, new Icms))
console.log(calculoNovo.calcular(100, new Iss))

