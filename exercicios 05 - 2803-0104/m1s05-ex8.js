import modulo from './movimenta2.js';
const coordenadasSalvas = localStorage.getItem("coordenadasUsuario");

let x;
let y;

if (coordenadasSalvas != null) {
  const retorno = JSON.parse(coordenadasSalvas);
  x = retorno.x;
  y = retorno.y;

}
else {
  x = 0;
  y = 0;

}


let move = null
const personagem = document.querySelector("#personagem");

personagem.style.top = x + "px";
personagem.style.left = y + "px";
personagem.style.backgroundImage = "url('img/desce.png')";
personagem.style.backgroundSize = "100%";

let limiteXCima = 10;
let limiteYEsquerda = 10;
let limiteXDesce = 700;
let limiteYDireita = 1460;


setInterval(() => {

  let obj = modulo.movimenta(personagem, move, x, y);
  x = obj.x;
  y = obj.y;


}, 1)

function salvarCoordenadas() {

  localStorage.setItem("coordenadasUsuario", JSON.stringify({x:x, y:y}))
}

function stop() {
  move = false
}

window.addEventListener("keyup", (e) => {
  salvarCoordenadas();
  stop()
})


window.addEventListener("keydown", (e) => {

  move = modulo.captura(e.key, x, y, limiteXCima, limiteXDesce, limiteYEsquerda, limiteYDireita);


})


