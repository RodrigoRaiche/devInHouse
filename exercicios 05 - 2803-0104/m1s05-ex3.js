const inputTeclado = document.querySelector('#search');
const listaNomes = document.querySelector("#listaNomes");
const qtdElement = document.querySelector("#qtdElement");
listaNomes.style.display = "flex";

const url = "https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000"

let arrayNome = [];


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
        arrayNome.push(linha.nome)
    }

}


let nomePesquisa = '';

function limpaTela(){
    while (listaNomes.firstChild) {
        listaNomes.removeChild(listaNomes.firstChild);
    }
    inputTeclado.innerHTML = nomePesquisa;

}


inputTeclado.addEventListener("keyup", function (event) {

    letraspermitidas = "ABCEDFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz"

    var ok = false;
    letra = event.key;
    for (letra2 of letraspermitidas) {

        if (letra == letra2) {

            ok = true;

        }

    }

    if (!ok){
        alert("Não digite caracteres que não sejam letras");
        limpaTela()
        return; 
     }

    nomePesquisa += event.key;
    let nomePesquisaAlterado = nomePesquisa.toUpperCase();
    console.log(nomePesquisaAlterado);
    let qtd = 0;

    limpaTela()


    let resultado = arrayNome.map((nome) => {

        if (nome.indexOf(nomePesquisaAlterado) != -1) {
            return nome
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



