const tamanhoImg = "400px";

const main = document.createElement("main");
const title = document.createElement("div");

const heading = document.createElement("h1");
heading.className = "titleName"
heading.innerText = "Página dinamica";
heading.style.textAlign = "Center";
heading.style.fontSize = "80px";

title.append(heading);
main.append(title);

const galeria = document.createElement("div");

galeria.style.display = "flex";
galeria.style.gap = "20px";
galeria.style.justifyContent = "Space-Around";

const img1 = document.createElement("img");
img1.src = "img/paisagem01.jpeg";
img1.style.width = tamanhoImg;
img1.style.height = tamanhoImg;
galeria.append(img1);

const img2 = document.createElement("img");
img2.src = "img/paisagem02.jpeg";
img2.style.width = tamanhoImg;
img2.style.height = tamanhoImg;
galeria.append(img2);


const img3 = document.createElement("img");
img3.src = "img/paisagem03.jpeg";
img3.style.width = tamanhoImg;
img3.style.height = tamanhoImg;
galeria.append(img3);

main.append(galeria);

const article = document.createElement("article");
article.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel quia repudiandae doloremque, atque ad aliquam molestias tempora blanditiis dolor nemo sequi repellat, quibusdam debitis. Eveniet iusto soluta maxime aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel quia repudiandae doloremque, atque ad aliquam molestias tempora blanditiis dolor nemo sequi repellat, quibusdam debitis. Eveniet iusto soluta maxime aliquid!"
article.style.textAlign ="center";
article.style.fontSize = "50px";
article.style.margin = "50px auto";

main.append(article);

const list = document.createElement("ul");
list.className = "listPlaces"
list.innerText = "Lista não ordenada";
list.style.fontSize = "50px";
list.style.margin = "auto 30px" 

const itemList1 = document.createElement("li");
itemList1.innerHTML = "Lugar1";
const itemList2 = document.createElement("li");
itemList2.innerHTML = "Lugar2";
const itemList3 = document.createElement("li");
itemList3.innerHTML = "Lugar3";

list.append(itemList1);
list.append(itemList2);
list.append(itemList3);

main.append(list);

document.body.append(main);

var listplaces = document.querySelector(".listPlaces");
while (listplaces.firstChild) {
    listplaces.removeChild(listplaces.firstChild);
}

const itemList4 = document.createElement("li");
itemList4.innerHTML = "Lugar4";
const itemList5 = document.createElement("li");
itemList5.innerHTML = "Lugar5";
const itemList6 = document.createElement("li");
itemList6.innerHTML = "Lugar6";
const itemList7 = document.createElement("li");
itemList7.innerHTML = "Lugar7";
const itemList8 = document.createElement("li");
itemList8.innerHTML = "Lugar8";

list.append(itemList4);
list.append(itemList5);
list.append(itemList6);
list.append(itemList7);
list.append(itemList8);

main.append(list);

document.body.append(main);

document.querySelector('.titleName').remove();

const heading2 = document.createElement("h1");
heading2.className = "titleName2"
heading2.innerText = "Página dinamica 2";
heading2.style.textAlign = "Center";
heading2.style.fontSize = "80px";

title.append(heading2);

article.style.boxShadow = "30px 20px 20px gray";






