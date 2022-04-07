import { movimentaPersonagem } from "./movimentaPersonagem.js"
import { save, position } from "./armazenamento.js"
import { geraObjeto } from "./geraObjeto.js"

const personagem = new movimentaPersonagem(position["x"], position["y"]);
personagem.char.style.backgroundImage = "url('img/tanqueBaixo.png')";
personagem.char.style.backgroundSize = "100%";
personagem.char.style.width = "60px";
personagem.char.style.height = "140px";

const retangulos = new geraObjeto();
retangulos.desenhaRetangulos(9);

window.addEventListener("keyup", (e) => {
    personagem.stop();
    save(personagem.x, personagem.y);
})

window.addEventListener("keydown", (e) => {
    if (e.key == " ") {
        destruirRetangulo();
    } else {
        personagem.setDirection(e.key)
    }
})

function destruirRetangulo() {

    for (let elemento of retangulos.array) {
        if (
            personagem.x >= elemento.left && personagem.x <= elemento.right &&
            personagem.y >= elemento.top && personagem.y <= elemento.bottom
        ) {
            let alvo = document.getElementById(retangulos.array.indexOf(elemento));

            if (elemento.width <= 10 && elemento.height <= 10) {
                elemento.width *= 0;
                elemento.height *= 0;
                alvo.remove();
            }
            else {
                elemento.width *= 0.99;
                elemento.height *= 0.99;
            }

            alvo.style.width = elemento.width + "px"
            alvo.style.height = elemento.height + "px"

            personagem.sizeWidth *= 1.001;
            personagem.sizeHeight *= 1.001;

            personagem.char.style.width = personagem.sizeHeight + "px"
            personagem.char.style.height = personagem.sizeWidth + "px"
            personagem.char.style.backgroundSize = "100%";
            personagem.char.style.backgroundImage = `url(img/tanqueEsquerda.png)`

        }

    }
}

