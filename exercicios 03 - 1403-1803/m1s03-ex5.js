const inputTeclado = document.querySelector('#lendoTeclado');



inputTeclado.addEventListener("keyup", function (event) {
    console.log(event.key);
    console.log(event.code);
    switch (true) {
        case event.key === 'a':
            document.body.style.backgroundColor = "yellow";
            break;
        case event.key === 'p':
            document.body.style.backgroundColor = "black";
            break;
        case event.code === 'Space':
            inputTeclado.style.padding = "20px 20px";
            inputTeclado.style.fontSize = "22px";
            break;
        case event.key === 'Enter':
            inputTeclado.style.padding = "1px 2px";
            inputTeclado.style.fontSize = "";


            document.body.style.backgroundColor = "white";
            break;

        default:
            break;
    }

}
);
