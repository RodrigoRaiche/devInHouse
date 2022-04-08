async function obterdadosBitcoin() {

    const url = "https://api.coincap.io/v2/assets/bitcoin";

    try {
        const resp = await fetch(url);
        const dados = await resp.json();
        const { symbol, priceUsd } = dados.data;

        console.log(`O preço do Bitcoin - ${symbol} em dólares hoje é $ ${priceUsd}`);

    } catch (error) {
        console.log(error.message);
    }
}

obterdadosBitcoin();
