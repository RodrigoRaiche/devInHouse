var API1 = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
var endereco = "";
var nro = 0;
var nomesFamilia = ["Rodrigo", "Rafael", "Liliane", "Onildo", "Nativalina", "Mikaela", "Olinda", "Irâze", "Marina", "Rafaela", "Lucas", "Vanessa"];

let listaNome = document.querySelector("#listaNome");
listaNome.style.display = "flex";

const divChart = document.querySelector('.chart-container');
var myChartElem = null;



const labels = [
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Frequência por período',
        backgroundColor: '#373737',
        borderColor: '#232323',
        data: [],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        resposive: true
    }
};


function manipulaAposRequisicaoNomes(json) {

    while (listaNome.firstChild) {
        listaNome.removeChild(listaNome.firstChild);
    }

    while (data.labels.length) {
        data.labels.pop();
    }

    while (data.datasets[0].data.length) {
        data.datasets[0].data.pop();
    }

    let nome = json[0].nome;


    for (var res of json[0].res) {
        periodo = res.periodo;
        periodoatualizada = periodo.replace('[', '');
        periodoatualizada = periodoatualizada.replace('[', '');
        periodoatualizada = periodoatualizada.replace(',', '-');
        data.labels.push(periodoatualizada);
        data.datasets[0].data.push(res.frequencia);
    }


     console.log("teste 1") ;  
     if (myChartElem != null){
        myChartElem.remove();
        console.log("teste 2") ;
     }
     console.log("teste 3") ;
     myChartElem = document.createElement("canvas");
     divChart.append(myChartElem);
     var myChart = new Chart(myChartElem, config);
     

  

    const itemList = document.createElement("li");
    itemList.className = "itemlistReg"
    itemList.style.width = "300px";
    itemList.style.alignContent = "center";
    itemList.style.margin = "30px 50px";
    itemList.style.marginLeft = "40%";
    itemList.style.padding = "10px 20px";
    itemList.style.backgroundColor = "gray";
    itemList.style.boxShadow = "5px 5px black";

    const divList = document.createElement("div");
    divList.style.fontSize = "15px";
    divList.style.textAlign = "left";

    const p1List = document.createElement("p");
    p1List.innerHTML = "Nome: " + nome;


    divList.append(p1List);
    itemList.append(divList);
    listaNome.append(itemList);


}

var j = 0;

function obterNomes() {
    nome = nomesFamilia[j];
    endereco = API1 + nome;

    fetch(endereco).then(function (resposta) {
        return resposta.json();
    }).then(function (json) {
        manipulaAposRequisicaoNomes(json)
        console.log(j + '/' + nomesFamilia.length);
        if (j < nomesFamilia.length) {
            j++;
        }
        else {
            j = 0;
        }

    });



}

setInterval(obterNomes, 5000);
//obterNomes();

