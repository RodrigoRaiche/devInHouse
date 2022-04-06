const url = "https://api.agify.io/?country_id=BR&name=";


function obterIdade(nome) {
    fetch(url+nome).then(function (resposta) {
        return resposta.json();
    }).then(function (json) {
        if (json.age == null) {
            console.log('Nome não encontrado');
        }
        else {
            console.log(json.name + ' - ' + json.age);
        }
    }).catch(function(resposta){
        console.log(resposta);
    });
}

obterIdade('Tiago');
obterIdade('Rodrigo');
obterIdade('Liliane');
obterIdade('Mikaela');
obterIdade('Lucas');
obterIdade('Nativalina');
