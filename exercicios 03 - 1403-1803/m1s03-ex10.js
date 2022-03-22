const infUsuario = localStorage.getItem("infUsuario");
let preferencias = [];

if (infUsuario != null) {
    const retorno = JSON.parse(infUsuario);
    preferencias = retorno;

    var corEmQuestao = 0;

    iniciaSlide();
}

function iniciaSlide() {
    document.body.style.backgroundColor = preferencias[corEmQuestao].corDeFundo;
    
    setTimeout(function () {
        corEmQuestao++;
        console.log(corEmQuestao);
        if (corEmQuestao == preferencias.length) {
            corEmQuestao = 0;
        }
        iniciaSlide();
    }, preferencias[corEmQuestao].tempoCor)

}


function defineCorETexto(cor) {

    document.body.style.background = cor;
    

}

var btnIncluir = document.querySelector("#btnIncluir")
btnIncluir.addEventListener("click",
    function () {
        const cor = document.querySelector("#inpColor").value;
        const tempo = parseInt(document.querySelector("#inpNumber").value) * 1000;
        defineCorETexto(cor)
        const conjuntoUsuario = {
            "corDeFundo": cor,
            "tempoCor": tempo,
        }


        preferencias.push(conjuntoUsuario);

        const conjuntoEmString = JSON.stringify(preferencias);

        localStorage.setItem("infUsuario", conjuntoEmString)

    })