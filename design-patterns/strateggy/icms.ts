import Imposto from "./interfaceImposto";

export default class Icms implements Imposto {
    calculaOrcamento(orcamento : any){
        return orcamento * 0.1
    }
}
