import { searchImage } from "./searchImage.js"
import { product } from "./product.js"
import { saveLista, listaCompras } from "./armazenaLista.js"

let idSeq = 0;
let valorTotal = 0;
let arrayProduct = [];

const inputProduct = document.querySelector('#inputProduct');
const btnInsert = document.querySelector('#btnInsert');
const ulShoppingList = document.querySelector('#ulShoppingList');
const pResultado = document.querySelector('#resultado');
const divmessage = document.querySelector('#message');
const divmessage2 = document.querySelector('#message2');
const btnOk = document.querySelector('#btnOk');
const btnValueYes = document.querySelector('#btnValueYes');
const btnValueNo = document.querySelector('#btnValueNo');
const fundo = document.querySelector("#fundo");
const spanElementAlvo = document.querySelector('#elementAlvo');
const spanFuncao = document.querySelector('#funcao');
const spanPos = document.querySelector('#pos');
const picMessage = document.querySelector('#picMessage');
const picMessage2 = document.querySelector('#picMessage2');


initializeScreen()

function initializeScreen() {

    hideMessage();
    hideMessage2();

    if (listaCompras['lista'] != null) {

        arrayProduct = listaCompras['lista']
        valorTotal = parseFloat(listaCompras['total']);

        arrayProduct.forEach(element => {
            createItemList(element);
            idSeq = parseInt(element.id);
        });
        idSeq++;

    }
    else {
        valorTotal = 0;
    }

    pResultado.innerHTML = 'R$ ' + valorTotal.toFixed(2);

}

function createItemList(productItem) {

    let checkbox;

    if (typeof (productItem.checkbox) == 'string') {
        checkbox = productItem.checkbox == 'true' ? true : false;
    }
    else {
        checkbox = productItem.checkbox;
    }

    const liItem = document.createElement('li');
    liItem.className = 'shoppingListItem';
    const inputItem = document.createElement('input');
    inputItem.setAttribute("type", "checkbox");
    inputItem.className = 'chkBox';
    inputItem.checked = checkbox;

    const labelItem = document.createElement('label');


    if (checkbox == true) {
        labelItem.style.textDecoration = 'line-through'
    }
    else {
        labelItem.style.textDecoration = 'none'
    }


    labelItem.innerHTML = productItem.description;

    liItem.append(inputItem);
    liItem.append(labelItem);
    const btnExc = document.createElement('button');
    btnExc.className = 'excButton';
    btnExc.append('X');
    liItem.append(btnExc);
    const inputValorHidden = document.createElement('input');
    inputValorHidden.setAttribute("type", "hidden");
    inputValorHidden.className = 'valueProduct';
    inputValorHidden.value = parseFloat(productItem.value);

    liItem.append(inputValorHidden);
    const inputIdHidden = document.createElement('input');
    inputIdHidden.setAttribute("type", "hidden");
    inputIdHidden.className = 'idProduct';
    inputIdHidden.value = parseInt(productItem.id);
    liItem.append(inputIdHidden);
    ulShoppingList.append(liItem);

    const divPopUp = createPopUp();
    ulShoppingList.append(divPopUp)

    btnExc.addEventListener("click", event => {
        let fatherProduct = btnExc.parentNode
        let idProduct = fatherProduct.getElementsByClassName('idProduct');
        let id = parseInt(idProduct[0].value);
        let elementPos = arrayProduct.map(function (product) { return product.id; }).indexOf(id);
        let productAlt = arrayProduct[elementPos]

        displayMessage(`Deseja excluir ${productAlt.description}?`, elementPos, 'excluir', btnExc, arrayProduct[elementPos].description);


    })

    inputItem.addEventListener("click", event => {

        const divpopup = document.querySelector('#divPopUp');

        let fatherProduct = inputItem.parentNode;
        let labelProduct = fatherProduct.querySelector('label');
        let valorProduct = fatherProduct.getElementsByClassName('valueProduct');

        let idProduct = fatherProduct.getElementsByClassName('idProduct');
        let id = parseInt(idProduct[0].value);

        let elementPos = arrayProduct.map(function (product) { return product.id; }).indexOf(id);

        let productAlt = arrayProduct[elementPos]



        if (fatherProduct.querySelector("input").checked === true) {
            displayPopUp(arrayProduct[elementPos].description, divpopup, `Digite valor para o Produto ${arrayProduct[elementPos].description}`, elementPos, inputItem);
        } else {
            labelProduct.style.textDecoration = 'none'
            productAlt.checkbox = false;
            if (productAlt.value != null) {
                valorTotal -= parseFloat(productAlt.value);
                valorProduct.value = 0;
                productAlt.value = 0;

            }
            pResultado.innerHTML = 'R$ ' + valorTotal.toFixed(2);
            arrayProduct[elementPos] = productAlt;

            saveLista(arrayProduct, valorTotal);

        }

    })

    inputProduct.focus();

}

function createPopUp() {

    const divPopUp = document.createElement('div');
    divPopUp.setAttribute("id", "divPopUp")

    const pPopUp = document.createElement('p');
    pPopUp.setAttribute("id", "titlePopup");

    const inputPopUp = document.createElement('input');
    inputPopUp.setAttribute("id", "inputValue");
    inputPopUp.setAttribute("placeholder", "Digite o valor");
    inputPopUp.setAttribute("step", "0.01");
    inputPopUp.setAttribute("type", "number");
    
    const picturePopUp = document.createElement('picture');
    picturePopUp.setAttribute("id", "picturePopUp");

    const brPopUp = document.createElement('br');

    const btnPopUp = document.createElement('button');
    btnPopUp.setAttribute("id", "btnValue");
    btnPopUp.innerHTML = 'inserir';

    const span1PopUp = document.createElement('span');
    span1PopUp.setAttribute("id", "spanElementAlvoP");

    const span2PopUp = document.createElement('span');
    span2PopUp.setAttribute("id", "spanPosP");

    divPopUp.style.display = "none";

    divPopUp.append(pPopUp);
    divPopUp.append(inputPopUp);
    divPopUp.append(picturePopUp);
    divPopUp.append(brPopUp);
    divPopUp.append(btnPopUp);
    divPopUp.append(span1PopUp);
    divPopUp.append(span2PopUp);

    btnPopUp.addEventListener("click", event => {
        const divPopUp = document.querySelector("#divPopUp");
        const spanElementAlvoP = document.querySelector("#spanElementAlvoP");
        const spanPosP = document.querySelector("#spanPosP");
        const inputValue = document.querySelector("#inputValue");

        divPopUp.style.display = "none";
        fundo.style.display = "none";
        let productAlt = arrayProduct[spanPosP.name]

        if (isNaN(inputValue.value) || inputValue.value === '') {
            displayPopUp(productAlt.description, divPopUp, `Digite valor para o Produto ${productAlt.description}`, spanPosP.name, spanElementAlvoP.name);
        }
        else
            if (inputValue.value == 0 || inputValue.value > 9999.99) {
                displayPopUp(productAlt.description, divPopUp, `Digite valor para o Produto ${productAlt.description}`, spanPosP.name, spanElementAlvoP.name);
            }
            else {
                let elementP = spanElementAlvoP.name
                let fatherProduct = elementP.parentNode;
                let labelProduct = fatherProduct.querySelector('label');
                let valorProduct = fatherProduct.getElementsByClassName('valueProduct');
                labelProduct.style.textDecoration = 'line-through'
                let valor = parseFloat(inputValue.value)
                valorTotal += valor;
                valorProduct.value = valor;
                productAlt.value = valor;
                productAlt.checkbox = true;
                pResultado.innerHTML = 'R$ ' + valorTotal.toFixed(2);
                arrayProduct[spanPosP.name] = productAlt;
                saveLista(arrayProduct, valorTotal);
            }

    });


    return divPopUp;
}


btnInsert.addEventListener("click", event => {

    if (inputProduct.value == '') {
        displayMessage2('Produto inválido!', '');
    }
    else {

        let existeproduto = serchProduct(inputProduct.value);
        if (existeproduto == false) {
            const productItem = new product(idSeq++, inputProduct.value);
            createItemList(productItem)
            arrayProduct.push(productItem)
            saveLista(arrayProduct, valorTotal);
            displayMessage2(`Produto ${productItem.description} inserido!`, inputProduct.value);
            inputProduct.value = "";
        }
        else {
            displayMessage2(`Produto ${inputProduct.value} já existe!`, inputProduct.value);
            inputProduct.value = '';

        }
    }

});

function serchProduct(productDesc) {
    let encontrou = false;
    let i = 0

    while (encontrou === false && i < arrayProduct.length) {
        let element = arrayProduct[i];
        if (element.description === productDesc) {
            encontrou = true;
        };
        i++;
    }

    return encontrou;

}


function DeleteElement(elementAlvo, pos) {

    let productAlt = arrayProduct[pos]

    if (productAlt.value != null) {
        valorTotal -= parseFloat(productAlt.value);
        pResultado.innerHTML = 'R$ ' + valorTotal.toFixed(2);
    }

    let elementoExcluir = elementAlvo.parentNode;
    elementoExcluir.remove();

    arrayProduct.splice(pos, 1);

    saveLista(arrayProduct, valorTotal);
}



btnValueYes.addEventListener("click", event => {
    hideMessage();
    fundo.style.display = "none";

    if (spanFuncao.name == 'excluir') {
        DeleteElement(spanElementAlvo.name, spanPos.name);
    }

    inputProduct.focus();
});


btnValueNo.addEventListener("click", event => {
    hideMessage();
    fundo.style.display = "none";
    inputProduct.focus();
});


btnOk.addEventListener("click", event => {
    hideMessage2();
    fundo.style.display = "none";
    inputProduct.focus();
});


function hideMessage() {
    divmessage.style.display = "none";
}

function hideMessage2() {
    divmessage2.style.display = "none";
}

function displayPopUp(productDesc, element, message, pos, elementAlvo) {

    element.style.display = "block";
    fundo.style.display = "block";
    let titlePopup = document.querySelector('#titlePopup');
    titlePopup.innerHTML = message;

    const inputValue = document.querySelector('#inputValue');
    const spanElementAlvoP = document.querySelector('#spanElementAlvoP');
    const spanPosP = document.querySelector('#spanPosP');
    inputValue.focus();
    inputValue.value = '';
    spanElementAlvoP.setAttribute("type", "hidden");
    spanElementAlvoP.name = elementAlvo;
    spanPosP.setAttribute("type", "hidden");
    spanPosP.name = pos;

    const picturePopUp = document.querySelector('#picturePopUp');

    if (picturePopUp.children[0]) {
        picturePopUp.removeChild(picturePopUp.firstChild);
    }

    const imgMsg = document.createElement('img');
    imgMsg.className = 'imgProduct';

    searchImage(productDesc).then(resposta => imgMsg.src = resposta);

    picturePopUp.append(imgMsg);
}


function displayMessage(message, pos, funcao, elementAlvo, productDesc) {
    divmessage.style.display = "block";
    fundo.style.display = "block";
    let pmessagem = document.querySelector('#pMessage');
    pmessagem.innerHTML = message;
    spanElementAlvo.setAttribute("type", "hidden");
    spanElementAlvo.name = elementAlvo;
    spanFuncao.setAttribute("type", "hidden");
    spanFuncao.name = funcao;
    spanPos.setAttribute("type", "hidden");
    spanPos.name = pos;

    picMessage.removeChild(picMessage.firstChild);

    const imgMsg = document.createElement('img');
    imgMsg.className = 'imgProduct';

    searchImage(productDesc).then(resposta => imgMsg.src = resposta);

    picMessage.append(imgMsg);
}

function displayMessage2(message, productDesc) {
    divmessage2.style.display = "block";
    fundo.style.display = "block";
    let pmessagem = document.querySelector('#pMessage2');
    pmessagem.innerHTML = message;

    picMessage2.removeChild(picMessage2.firstChild);

    const imgMsg = document.createElement('img');
    imgMsg.className = 'imgProduct';

    searchImage(productDesc).then(resposta => imgMsg.src = resposta);

    picMessage2.append(imgMsg);

}




