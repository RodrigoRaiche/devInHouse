class Usuario {
     constructor(login, senha) {
          this.login = login;
          this.senha = senha;
     }

     autenticar(senha){
         return (senha === this.senha);
     }
}


const user = new Usuario('admin','segredo');
console.log( user.autenticar('segredo') ); // true
console.log( user.autenticar('errado') );  // false
