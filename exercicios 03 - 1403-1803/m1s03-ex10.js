const infUsuario = localStorage.getItem("infUsuario");
let preferencias = [];

if (infUsuario != null) {
    const retorno = JSON.parse(infUsuario);
    preferencias = retorno;

    document.querySelector("#inpColor").value = retorno[retorno.length - 1].corDeFundo;
    defineCorETexto(retorno[retorno.length - 1].corDeFundo
        , retorno[retorno.length - 1].tempo);
    console.log(preferencias);    
}


function defineCorETexto(cor, tempo) {

    document.body.style.background = cor;
    console.log(tempo);
    setTimeout(() => { console.log("aguardando o tempo da cor") }, tempo);
    console.log("passou o tempo da cor");
    //document.body.style.background = preferencias[0].corDeFundo;
   
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

       
        preferencias.push(conjuntoUsuario);

        const conjuntoEmString = JSON.stringify(preferencias);

        localStorage.setItem("infUsuario", conjuntoEmString)

    })