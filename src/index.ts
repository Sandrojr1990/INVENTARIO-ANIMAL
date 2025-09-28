import { Mamifero } from './classes/Mamifero.js';
import { Reptil } from './classes/Reptil.js';
import { Ave } from './classes/Ave.js';
import { Inventario } from './managers/Inventario.js';
import { Peixe } from './classes/Peixe.js';
import { Animal } from './classes/Animal.js';
import { Falcao } from './classes/AveDeRapina.js';

console.log('== Inventário Animal ===/n');

const inventario = new Inventario();
const leao = new Mamifero('Leão', 5);
const cobra = new Reptil('Cobra Coral', 4);
const papagaio = new Ave('Papagaio', 2);
const tubarao = new Peixe('Tubarão', 8);
const falcao = new Falcao('Falcão', 3);

inventario.adicionar(leao);
inventario.adicionar(cobra);
inventario.adicionar(papagaio);
inventario.adicionar(tubarao);
inventario.adicionar(falcao);
inventario.lista();
inventario.contarClasses();


console.log('\n=== total de animais: ${inventario.obterTotal()} ===\n');

console.log('Iterações dos animais:');

inventario.interagirTodos();