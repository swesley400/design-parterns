import Imposto from "./interfaceImposto";

export default class Iss implements Imposto {
    public calculaOrcamento(orcamento: number){ 
        return orcamento * 0.6;
    }
}


