const url = "https://api.agify.io/?country_id=BR&name=";


async function obterIdade(nome) {

    try {
        const resp = await fetch(url + nome);
        const dados = await resp.json();
        const { age, name } = dados;

        if (age == null) {
            console.log(`Nome ${nome} não encontrado`);
        }
        else {
            console.log(name + ' - ' + age);
        }

    } catch (error) {
        console.log(error.message);
    }

}

obterIdade('Tiago');
obterIdade('Rodrigo');
obterIdade('Liliane');
obterIdade('Mikaela');
obterIdade('Lucas');
obterIdade('Nativalina');
