export default {
    movimenta: function (elemento, direcao, x, y) {
        switch (direcao) {
            case "desce":
                elemento.style.top = ++x + "px";
                break;

            case "sobe":
                elemento.style.top = --x + "px";
                break;

            case "direita":
                elemento.style.left = ++y + "px";
                break;

            case "esquerda":
                elemento.style.left = --y + "px";
                break;

        }
        return{x:x,y:y};
    },
    captura : (teclaPressionada) => {
        if (teclaPressionada == "ArrowDown") {
            return "desce"
          }
        
          if (teclaPressionada == "ArrowUp") {
            return "sobe"
          }
        
          if (teclaPressionada == "ArrowLeft") {
            return "esquerda"
          }
        
          if (teclaPressionada == "ArrowRight") {
            return "direita"
          }
    }
}
