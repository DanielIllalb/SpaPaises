import { Pais } from "./pais";

export interface Cache {
    porCapital:InfoPais;
    porPais:InfoPais;
    porRegion:InfoRegion;
}

interface InfoPais{
    termino:string;
    paises:Pais[];
}

interface InfoRegion{
    termino:string;
    paises:Pais[];
}
