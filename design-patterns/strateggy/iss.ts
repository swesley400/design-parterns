import Imposto from "./interfaceImposto";

export default class Iss implements Imposto {
    calculaOrcamento(orcamento: number){ 
        return orcamento * 0.6;
    }
}


