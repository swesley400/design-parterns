import Imposto from "./interfaceImposto";


export default class Iss implements Imposto {

    calculaOrcamento(orcamento){ 
        return orcamento * 0.6 ;
    }
}


