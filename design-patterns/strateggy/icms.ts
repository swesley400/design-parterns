import Imposto from "./interfaceImposto";

export default class Icms implements Imposto {
    calculaOrcamento(orcamento : number){
        return orcamento * 0.1;
    }
}
