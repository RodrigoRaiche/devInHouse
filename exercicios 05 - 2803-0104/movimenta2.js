export default {
    movimenta: function (elemento, direcao, x, y) {
        switch (direcao) {
            case "desce":
                elemento.style.top = ++x + "px";
                elemento.style.backgroundImage = "url('img/desce.png')";
                elemento.style.backgroundSize = "100%";
          
                break;

            case "sobe":
                elemento.style.top = --x + "px";
                elemento.style.backgroundImage = "url('img/sobe.png')";
                elemento.style.backgroundSize = "100%";
           
                break;

            case "direita":
                elemento.style.left = ++y + "px";
                elemento.style.backgroundImage = "url('img/direita.png')";
                elemento.style.backgroundSize = "100%";
          
                break;

            case "esquerda":
                elemento.style.left = --y + "px";
                elemento.style.backgroundImage = "url('img/esquerda.png')";
                elemento.style.backgroundSize = "100%";
          
                break;

        }
        return{x:x,y:y};
    },
    captura : (teclaPressionada,x,y,limiteXCima, limiteXDesce, LimiteYEsquerda, limiteYDireita) => {
        if (teclaPressionada == "ArrowDown") {
          if (x <= limiteXDesce) {
            return "desce"
          }
          else {
            return false
          }
        
          }
        
          if (teclaPressionada == "ArrowUp") {
            if (x >= limiteXCima) {
              return "sobe"
            }
            else {
              return false
            }
          
            
          }
        
          if (teclaPressionada == "ArrowLeft") {
            if (y >= LimiteYEsquerda) {
              return "esquerda"
            }
            else {
              return false
            }
          
          }
        
          if (teclaPressionada == "ArrowRight") {
            if (y <= limiteYDireita) {
              return "direita"
            }
            else {
              return false
            }
          
           
          }
    }
}


