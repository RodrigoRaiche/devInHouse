const API = "https://dog.ceo/api/breeds/image/random"

let listnomes = document.querySelector("#listaImagens");
listnomes.style.display = "flex";


for (var i = 0; i < 10; i++) {
    fetch(API).then(function (resposta) {
        return resposta.json();
    }).then(function (json) {
        console.log(json.message)
        manipulaAposRequisicao(json.message);
    });
}

function manipulaAposRequisicao(imagem) {
    const imagemGaleria = imagem;
    console.log(imagemGaleria);

    const itemList = document.createElement("li");
    itemList.style.margin = "60px";
    const pictureList = document.createElement("picture");
    
    

    const imgItem = document.createElement("img");
    imgItem.src = imagemGaleria;
    imgItem.style.width = "200px";
    imgItem.style.boxShadow = "10px 5px 5px black";
    
    
    pictureList.append(imgItem);
    itemList.append(pictureList);
    listnomes.append(itemList);
}



