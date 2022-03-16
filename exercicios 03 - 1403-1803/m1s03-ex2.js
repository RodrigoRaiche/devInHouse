const tamanhoImg = "600px";

const main = document.createElement("main");

const heading = document.createElement("h1");
heading.innerText = "Página dinamica";
heading.style.textAlign = "Center";
heading.style.fontSize = "100px";

main.append(heading);

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
article.style.fontSize = "70px";
article.style.margin = "50px auto";

main.append(article);

const list = document.createElement("ul");
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

