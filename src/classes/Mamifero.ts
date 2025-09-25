// Mamifero.ts

import { Animal } from './Animal.js';

export abstract class Mamifero extends Animal {
    emitirSom(): void {
        console.log(`${this.nome} faz: 'grrr'`);
    }

    mover(distancia: number): void {
        console.log(`${this.nome} está correndo ${distancia} metros.`);
    }

}
