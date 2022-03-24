let myChartElem = null;
let j = 0;

function atualizaPagina(){

    let listaNome = document.querySelector("#listaNome");
    listaNome.style.display = "flex";

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


function limpaPagina() {

    while (listaNome.firstChild) {
        listaNome.removeChild(listaNome.firstChild);
    }

    if (myChartElem != null) {
        myChartElem.remove();
    }

}

function geraGrafico(labelDinamica, dadosDinamicos, nome) {

    const data = {
        labels: labelDinamica,
        datasets: [{
            label: 'Frequência por período',
            backgroundColor: '#373737',
            borderColor: '#232323',
            data: dadosDinamicos,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            resposive: true
        }
    };


    const divChart = document.querySelector('.chart-container');
    myChartElem = document.createElement("canvas");

    divChart.append(myChartElem);
    const myChart = new Chart(myChartElem, config);
  

}

function atualizaNome(nome) {

    fetch("https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + nome)
        .then(function (r) { console.log(r); return r.json() })
        .then(function (resposta) {

            let arraydoConjuntoDeFrequenciaEValor = resposta[0].res;
            let arrayDeLabel = [];
            let arraydeData = [];

            for (let conjuntoDeFrequenciaEValor of arraydoConjuntoDeFrequenciaEValor) {
                let periodo = conjuntoDeFrequenciaEValor.periodo;
                periodoatualizada = periodo.replace('[', '');
                periodoatualizada = periodoatualizada.replace('[', '');
                periodoatualizada = periodoatualizada.replace(',', '-');

                arrayDeLabel.push(periodoatualizada);
                arraydeData.push(conjuntoDeFrequenciaEValor.frequencia);
            }


            limpaPagina();

            geraGrafico(arrayDeLabel, arraydeData, resposta[0].nome);

            atualizaPagina();

        });


}

function obterNomes() {

    let nomesFamilia = ["Rodrigo", "Rafael", "Liliane", "Onildo", "Mikaela", "Olinda", "Marina", "Rafaela", "Lucas", "Vanessa"];

    nome = nomesFamilia[j];
    atualizaNome(nome);

    if (j < nomesFamilia.length - 1) {
        j++;
    }
    else {
        j = 0;
    }


}

setInterval(obterNomes, 5000);

