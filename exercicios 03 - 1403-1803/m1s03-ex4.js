const navegGaleria = document.querySelector('#navGaleria');
const navegVideo = document.querySelector('#navVideos');
const navegPerfil = document.querySelector('#navperfil');

const divGaleria = document.querySelector('#divGaleria');
const divVideo = document.querySelector('#divVideos');
const divPerfil = document.querySelector('#divPerfil');

divGaleria.style.display = "none";
divVideo.style.display = "none";
divPerfil.style.display = "none";


function visualizaGaleria() {
    divGaleria.style.display = "block";
    divVideo.style.display = "none";
    divPerfil.style.display = "none";
}

function visualizaVideo() {
    divGaleria.style.display = "none";
    divVideo.style.display = "block";
    divPerfil.style.display = "none";
}

function visualizaPerfil() {
    divGaleria.style.display = "none";
    divVideo.style.display = "none";
    divPerfil.style.display = "block";
}

navegGaleria.addEventListener("click", visualizaGaleria);
navegVideo.addEventListener("click", visualizaVideo);
navegPerfil.addEventListener("click", visualizaPerfil);
