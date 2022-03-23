const senhas = ['abc123', 'super-secreta', '42', 'senha', '007'];

senhas.map(function (senha) {
     let validacao = false;
     if (senha.length >= 4 && senha.length <=10){
          validacao = true;
     }
     return validacao;
}).forEach(function(senha){
     console.log(senha);
})





