var API = "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/"
var endereco = "";
var nro = 0;

let listaPopulacao = document.querySelector("#listaPopulacao");
listaPopulacao.style.display = "flex";


for (var i = 0; i < 5; i++) {
    nro = i + 1
    endereco = API + nro;
    console.log(endereco)
    fetch(endereco).then(function (resposta) {
        return resposta.json();
    }).then(function (json) {
        console.log(json)
        manipulaAposRequisicao(json)
    });
}

function manipulaAposRequisicao(json) {
    const dados = json;
     

    const itemList = document.createElement("li");
    itemList.style.width = "400px";
    itemList.style.alignContent = "center";
    itemList.style.margin = "10px 30px";
    itemList.style.padding = "10px 50px";
    itemList.style.backgroundColor = "#228B22";
    itemList.style.boxShadow = "5px 5px white, 10px 10px yellow, 15px 15px blue";

    const divList = document.createElement("divList");
    divList.style.fontSize = "20px";
    divList.style.textAlign = "left";
    
    const p1List = document.createElement("p");
    p1List.innerHTML = "Horário: " + dados.horario;
    const p2List = document.createElement("p");
    p2List.innerHTML = "Localidade: " + dados.localidade;
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



