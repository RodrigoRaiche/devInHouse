const url = "https://randomuser.me/api/?results=4";
const divGeralDadosUsuarios = document.querySelector("#usuarios-info");


async function obterDadosUsuarios() {

    try {
        const resp = await fetch(url);
        const dados = await resp.json();

        while (divGeralDadosUsuarios.firstChild) {
            divGeralDadosUsuarios.removeChild(divGeralDadosUsuarios.firstChild);
        }


        for (usuario of dados.results) {
            const divDadosUsuario = document.createElement("div");
            divDadosUsuario.className = 'divDadosUsuario';
            const divImgUsuario = document.createElement("div");
            divImgUsuario.className = 'divImgUsuario';
            const divImgDadosUsuario = document.createElement("div");
            divImgDadosUsuario.className = 'divImgDadosUsuario';
            const imgUsuario = document.createElement("img");
            const p1Usuario = document.createElement("p");
            const p2Usuario = document.createElement("p");
            const p3Usuario = document.createElement("p");

            imgUsuario.src = usuario.picture.large;
            p1Usuario.innerHTML = 'Name  : ' + usuario.name.title + ' ' + usuario.name.first + ' ' + usuario.name.last;
            p2Usuario.innerHTML = 'E-mail: ' + usuario.email;
            p3Usuario.innerHTML = `Adress: ${usuario.location.street.name} - ${usuario.location.street.number} - ${usuario.location.city} - ${usuario.location.state} - ${usuario.location.country} `


            divImgUsuario.append(imgUsuario)
            divImgDadosUsuario.append(p1Usuario);
            divImgDadosUsuario.append(p2Usuario);
            divImgDadosUsuario.append(p3Usuario);
            divDadosUsuario.append(divImgUsuario);
            divDadosUsuario.append(divImgDadosUsuario);
            divGeralDadosUsuarios.append(divDadosUsuario);


        } 
    }    
    catch (error) {
            console.log(error.message);
        }

    
}

obterDadosUsuarios();