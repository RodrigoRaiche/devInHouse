class Animal {
     constructor(nome, idade) {
          this.nome = nome;
          this.idade = idade;
          this.som = null;
     }

     getNome(){
          return this.nome;
     }

     getIdade(){
          return this.idade;
     }

     getSom(){
          return this.som;
     }

     emiteSom(som) {
          this.som = som;
     }

}

class Cachorro extends Animal {

     constructor(nome, idade, som) {
          super(nome, idade);
          this.som = 'latido';
     }

}

class Gato extends Animal {
     constructor(nome, idade, som) {
          super(nome, idade);
          this.som = 'miado';
     }
}


const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy.som);   // latido   
const frajola = new Gato('frajola', 8);
console.log(frajola.som);   // miado