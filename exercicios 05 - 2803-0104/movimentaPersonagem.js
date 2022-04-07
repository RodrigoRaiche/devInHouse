export class movimentaPersonagem {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.char = document.querySelector("#personagem");
        this.char.style.top = y + "px";
        this.char.style.left = x + "px";
        this.sizeWidth  = 60;
        this.sizeHeight = 140;
        this.direction = false;
    }

    move() {
        setInterval(() => {
            switch (this.direction) {
                case "down":
                    this.char.style.top = this.y++ + "px";
                    if (this.y > window.innerHeight - 180) { this.y = window.innerHeight - 180 }
                    break

                case "up":
                    this.char.style.top = this.y-- + "px";
                    if (this.y < 10) { this.y = 0 }
                    break

                case "left":
                    this.char.style.left = this.x-- + "px";
                    if (this.x < 10) { this.x = 0 }
                    break

                case "right":
                    this.char.style.left = this.x++ + "px";
                    if (this.x > window.innerWidth - 200) { this.x = window.innerWidth - 200 }
                    break
            }
        }, 50);
    }



    setDirection(direction) {
        switch (direction) {
            case "ArrowDown":
                this.direction = "down";
                //this.char.style.backgroundImage = `url("./ex_10/down.png")`
                this.char.style.backgroundImage = `url(img/tanqueBaixo.png)`
                this.char.style.backgroundSize = "100%";
                this.char.style.width = this.sizeWidth+'px';
                this.char.style.height = this.sizeHeight+'px';
        
                break

            case "ArrowUp":
                this.direction = "up";
                //this.char.style.backgroundImage = `url("./ex_10/up.png")`
                this.char.style.backgroundImage = `url(img/tanqueCima.png)`
                this.char.style.backgroundSize = "100%";
                this.char.style.width = this.sizeWidth+'px';
                this.char.style.height = this.sizeHeight+'px';
                break

            case "ArrowLeft":
                this.direction = "left";
                //this.char.style.backgroundImage = `url("./ex_10/left.png")`
                this.char.style.backgroundImage = `url(img/tanqueEsquerda.png)`
                this.char.style.backgroundSize = "100%";
                this.char.style.width = this.sizeHeight+'px';
                this.char.style.height = this.sizeWidth+'px';
       
                break

            case "ArrowRight":
                this.direction = "right";
                //this.char.style.backgroundImage = `url("./ex_10/right.png")`
                this.char.style.backgroundImage = `url(img/tanqueDireita.png)`
                this.char.style.backgroundSize = "100%";
                this.char.style.width = this.sizeHeight+'px';
                this.char.style.height = this.sizeWidth+'px';

                break
        }
        this.move();
    }

    stop() {
        this.direction = false;
    }
}
            
        
   
