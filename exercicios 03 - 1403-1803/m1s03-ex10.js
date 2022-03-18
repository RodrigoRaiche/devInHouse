const infUsuario = localStorage.getItem("infUsuario")

if (infUsuario != null) {
    const objConjuntoValores = JSON.parse(infUsuario);

    document.querySelector("#inpColor").value = objConjuntoValores.corDeFundo;
    defineCorETexto(objConjuntoValores.corDeFundo
        , objConjuntoValores.tempo);
    

}


function defineCorETexto(cor, tempo) {

    document.body.style.background = cor;
    setTimeout(() => { console.log("aguardando o tempo da cor") }, cor);
    console.log("passou o tempo da cor");
}

var btnIncluir = document.querySelector("#btnIncluir")
btnIncluir.addEventListener("click",
    function () {
        const cor = document.querySelector("#inpColor").value;
        const tempo = document.querySelector("#inpNumber").value;
        defineCorETexto(cor, tempo)
        const conjuntoUsuario = {
            "corDeFundo": cor,
            "tempoCor": tempo,
        }

        const conjuntoEmString = JSON.stringify(conjuntoUsuario);

        localStorage.setItem("infUsuario", conjuntoEmString)

    })