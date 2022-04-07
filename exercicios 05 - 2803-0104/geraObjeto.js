export class geraObjeto {
    constructor() {
        this.array = [];
        this.divs = [];
    }

    desenhaRetangulos(qtd){
        let trigger = true;
        
        if (this.array.length == 0) {
            let retangulo0 = this.geraRetangulo();
            this.array.push(retangulo0);
        }

        while (this.array.length < qtd){
            loop1:
            do {
                let retangulo1 = this.geraRetangulo();
                
                for (let x of this.array) {
                    let verificacao = this.verifica(x,retangulo1);
                    if (!verificacao) {continue loop1}
                }
                
                this.array.push(retangulo1)
                trigger = false;

            } while (trigger);
        }       
        let i = 0

        this.array.forEach(elemento => {
            this.geraDiv(elemento, i)
            i++
        })
    }

    geraRetangulo(){
        return {
            top: Math.floor(Math.random() * 1000),
            left: Math.floor(Math.random() * 500),
            height: Math.floor(Math.random() * 490) + 10,
            width: Math.floor(Math.random() * 490) + 10,
        }
    }

    geraDiv(retangulo, i) {
        const div = document.createElement("div");

        div.style.border = "1px solid black"; 
        div.style.left = retangulo.left + "px";
        div.style.top = retangulo.top + "px";
        div.style.height = retangulo.height + "px";
        div.style.width = retangulo.width + "px";
        div.style.margin = "5px";
        div.id = i;
        div.className = "retangulos";

        document.body.append(div);
        this.divs.push(div);

    }

    verifica(a, b) {
        a.bottom = a.top + a.height;
        a.right = a.left + a.width;
        b.bottom = b.top + b.height;
        b.right = b.left + b.width;
    
        return (a.left >= b.right || a.top >= b.bottom || 
            a.right <= b.left || a.bottom <= b.top)
    }
}