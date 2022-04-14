export async function searchImage(product) {

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=dpPu1kIHwa3fxoQiH9lzTfmUkMgEjtuS&q='

    try {
        const resp = await fetch(url + product);
        const dados = await resp.json();
        let original = dados.data[0].images.original.url
        return original;
    }
    catch (error) {
        return 'img/imagenotfound.jpg';
    }

}