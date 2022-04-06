function obterClienteNoBancoDeDados(idCliente) {
    return new Promise((resolve, reject) => {
        const cliente = { nome: 'bruce wayne', id: idCliente };
        resolve(cliente);
    });
}

async function processar() {
    var a = await obterClienteNoBancoDeDados(7)
    return a;
}

processar().then(cliente => console.log(cliente))
    .catch(valor => console.log(valor))
    .finally(() => {
        console.log('Fim do Processamento');
    });


