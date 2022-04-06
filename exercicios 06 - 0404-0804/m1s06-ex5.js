function aprovarDadosCadastrais( cliente ) {
    return new Promise( (resolve, reject) => {
        if (cliente.cpf === 11111111111)
            resolve(true);
        else 
            reject(false);
    });
}

function aprovarValorSolicitado( cliente, valor ) {
    return new Promise( (resolve, reject) => {
        if (cliente.margem >= valor)
            resolve(true);
        else 
            reject(false);
    });
}


const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

/*const cliente2 = { cpf: 21111111111, nome: 'Calleri', margem: 200.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente2);
const aprovacaoValor = aprovarValorSolicitado(cliente2, 300.0);*/

// continue com o tratamento dos resultados de ambas as promises...

Promise.all([aprovacaoCadastro, aprovacaoValor]).then((valor) =>{
      console.log('APROVADO');
  }).catch((valor) =>{
     console.log('REPROVADO');
  }).finally(()=>{
      console.log('Fim do Processamento');
  });



