import Imposto from "./interfaceImposto";

export default class Icms implements Imposto {
    public calculaOrcamento(orcamento : number){
        return orcamento * 0.1;
    }
}
