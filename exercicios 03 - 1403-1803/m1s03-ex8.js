var API1 = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes/"
var API2 = "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/"
var endereco = "";
var nro = 0;
var localidade = [];


let listaPopulacao = document.querySelector("#listaPopulacao");
let selectReg = document.querySelector("#selectReg");


listaPopulacao.style.display = "flex";

for (var i = 0; i < 5; i++) {
    nro = i + 1
    endereco = API1 + nro;
    console.log(endereco)
    fetch(endereco).then(function (resposta) {
        return resposta.json();
    }).then(function (json) {
        manipulaAposRequisicaoRegioes(json)
    });
}

function manipulaAposRequisicaoRegioes(json) {

    const dados = json;

    if (dados.id == '1') {
        const optionReg = document.createElement("option");
        optionReg.value = ['0']
        optionReg.innerHTML = 'Selecione a região';
        selectReg.append(optionReg);
    }

    localidade[dados.id] = dados.nome + ' - ' + dados.sigla;
    const optionReg = document.createElement("option");
    optionReg.value = [dados.id]
    optionReg.innerHTML = dados.nome + ' - ' + dados.sigla;
    selectReg.append(optionReg);
}

function obterSelecReg() {

    var listplaces = document.querySelector("#listaPopulacao");
    while (listplaces.firstChild) {
        listplaces.removeChild(listplaces.firstChild);
    }

    nro = selectReg.options[selectReg.selectedIndex].value

    if (nro != '0') {
        endereco = API2 + nro;
        console.log(endereco)
        fetch(endereco).then(function (resposta) {
            return resposta.json();
        }).then(function (json) {
            manipulaAposRequisicao(json)
        });
    } else {
        window.alert('Região inválida')
    }

}


function manipulaAposRequisicao(json) {
    const dados = json;

    const itemList = document.createElement("li");
    itemList.className = "itemlistReg"
    itemList.style.width = "400px";
    itemList.style.alignContent = "center";
    itemList.style.margin = "60px 30px";
    itemList.style.marginLeft = "35%";
    itemList.style.padding = "10px 50px";
    itemList.style.backgroundColor = "#228B22";
    itemList.style.boxShadow = "5px 5px white, 10px 10px yellow, 15px 15px blue";

    const divList = document.createElement("div");
    divList.style.fontSize = "20px";
    divList.style.textAlign = "left";

    const p1List = document.createElement("p");
    p1List.innerHTML = "Horário: " + dados.horario;
    const p2List = document.createElement("p");
    p2List.innerHTML = "Localidade: " + dados.localidade + ' - ' + localidade[dados.localidade];
    const p3List = document.createElement("p");
    p3List.innerHTML = "Incremento Populacional: " + dados.projecao.periodoMedio.incrementoPopulacional;
    const p4List = document.createElement("p");
    p4List.innerHTML = "População: " + dados.projecao.populacao;


    divList.append(p1List);
    divList.append(p2List);
    divList.append(p3List);
    divList.append(p4List);

    itemList.append(divList);
    listaPopulacao.append(itemList);


}

selectReg.addEventListener("click", obterSelecReg);


