const url = "https://api.coincap.io/v2/assets/bitcoin";


fetch(url).then(function (resposta) {
    return resposta.json();
}).then(function (json) {
    console.log(`O preço do Bitcoin - ${json.data.symbol} em dólares hoje é $ ${json.data.priceUsd}`);
}).catch(function (resposta) {
        console.log(resposta);
});


