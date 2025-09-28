import type { Animal } from '../classes/Animal.js';

export class Inventario {
    private animais: Animal[] = [];

    adicionar (animal: Animal): void {
        this.animais.push(animal);
    }


    lista () {
        console.log('=== Inventário de Animais ===');
        this.animais.forEach((a, i) => {
            console.log(`${i + 1}. ${a.nome} (${a.constructor.name})`);
        })
    }


    interagirTodos() {
      for (const a of this.animais) {
        a.emitirSom();
        a.mover();
      }
    }



    removerAnimal(nome: string): boolean {
       const index = this.animais.findIndex(a => a.nome === nome);
        if (index !== -1) {

           console.log(`Removendo Animal: ${nome}`);
           this.animais.splice(index, 1);
           return true;
   
        }   else {
               console.log(`Animal não encontrado: ${nome}`);
               return false;
            }

    }
    contarClasses(): void {
       const aves = this.animais.filter(a => a.constructor.name === 'Ave').length;
       const mamiferos = this.animais.filter(a => a.constructor.name === 'Mamifero').length;
       const peixes = this.animais.filter(a => a.constructor.name === 'Peixe').length;
       const repteis = this.animais.filter(a => a.constructor.name === 'Reptil').length;
       const avesderapina = this.animais.filter(a => a.constructor.name === 'Falcao').length;

       console.log(`Total de Aves: ${aves}`);
       console.log(`Total de Mamíferos: ${mamiferos}`);
       console.log(`Total de Peixes: ${peixes}`);
       console.log(`Total de Répteis: ${repteis}`);
       console.log(`Total de Aves de Rapina: ${avesderapina}`);
    }

}    
