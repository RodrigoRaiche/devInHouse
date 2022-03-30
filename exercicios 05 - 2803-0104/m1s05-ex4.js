const inputTeclado = document.querySelector('#search');
const searchRanking = document.querySelector('#searchRanking');
const buttonPesquisa = document.querySelector('#buttonPesquisa');
let resultadoNro = document.querySelector('#resultadoNro')
let nomePesquisa = '';
let nroPesquisa = '';

const listaNomes = document.querySelector("#listaNomes");
const qtdElement = document.querySelector("#qtdElement");
listaNomes.style.display = "flex";

let arrayPessoa = [];


const url = "https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000"

class Pessoa {
    constructor(nome, ranking) {
        this.nome = nome;
        this.ranking = ranking;
    }
}


function obterDados() {
    fetch(url).then(function (resposta) {
        return resposta.json();
    }).then(function (json) {
        manipulaDados(json);
    });
}

function manipulaDados(json) {
    const dados = json;
    for (linha of dados) {
        const pessoa = new Pessoa(linha.nome, parseInt(linha.rank));
        arrayPessoa.push(pessoa);
    }

}


function limpaTela() {
    while (listaNomes.firstChild) {
        listaNomes.removeChild(listaNomes.firstChild);
    }
    inputTeclado.innerHTML = nomePesquisa;
    resultadoNro.innerHTML = ' ';
    
}


buttonPesquisa.addEventListener("click", function (event) {

    inputTeclado.value = ' ';
    qtdElement.innerHTML = '';
    const inputNro = document.querySelector('#searchRanking');
    nropermitidos = "0123456789"

    var ok = true;

    if (inputNro.isNaN) {
        ok = false;
    }

    if (!ok) {
        alert("Não digite caracteres que não sejam números");
        limpaTela()
        return;
    }

    nroPesquisa = parseInt(inputNro.value);

    limpaTela()

    let resultado = arrayPessoa.find((pessoa) => {
        return (pessoa.ranking === nroPesquisa);
    })

    if (resultado != null) {
        resultadoNro.innerHTML = resultado.nome;
    }

});


inputTeclado.addEventListener("keyup", function (event) {

    searchRanking.value = ' ';
    letraspermitidas = "ABCEDFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz"

    var ok = false;
    letra = event.key;
    for (letra2 of letraspermitidas) {

        if (letra == letra2) {
            ok = true;
        }

    }

    if (!ok) {
        alert("Não digite caracteres que não sejam letras");
        limpaTela()
        return;
    }

    nomePesquisa += event.key;
    let nomePesquisaAlterado = nomePesquisa.toUpperCase();
    let qtd = 0;

    limpaTela()

    let resultado = arrayPessoa.map((pessoa) => {

        if (pessoa.nome.indexOf(nomePesquisaAlterado) != -1) {
            return pessoa.nome
        }
        else { return '-1'; }

    }).forEach((nome) => {
        if (nome != -1) {
            let liElemento = document.createElement('li');
            let spanList = document.createElement("span");
            liElemento.style.marginLeft = "20px";

            spanList.innerHTML = nome;
            liElemento.append(spanList)
            listaNomes.append(liElemento);
            qtd++;
        }
    });

    qtdElement.innerHTML = qtd;

});

obterDados();



