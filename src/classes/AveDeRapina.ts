import { Animal } from "./Animal.js";

export abstract class AveDeRapina extends Animal {
    emitirSom(): void {
        console.log(`${this.nome} faz: 'screech'`);
    }

    mover(): void {
        console.log(`${this.nome} está voando alto.`);
    }

    abstract caçar(): void;
}

export class Falcao extends AveDeRapina {
    caçar(): void {
        console.log(`${this.nome} está caçando sua presa.`);
    }
}
    

    