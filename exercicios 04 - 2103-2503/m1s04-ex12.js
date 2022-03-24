class Personagem {
     constructor(nome) {
          this.nome = nome;
          this.percentualVida = 100;
     }

     sofreuDano(percentualDano) {
          if (this.percentualVida >= percentualDano) {
               this.percentualVida -= percentualDano;
          }else{
               this.percentualVida = 0;
          } 
     }

     usouKitMedico(){
         if (this.percentualVida <= 90) {
          this.percentualVida += 10;
         }
     }


}

const jogador = new Personagem('Mr. Shooter');
console.log(jogador);
jogador.sofreuDano(30);
jogador.usouKitMedico();
console.log(jogador.percentualVida);    // 80
