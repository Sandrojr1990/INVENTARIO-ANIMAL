export interface IAnimal {
    nome: string;
    idade: number;

    emitirSom(): void;
    mover(distancia: number): void;
}
