export function estiliza(identificador, arraydePropriedade) {
    let elemento = '';

    if (typeof identificador === 'string') {
        elemento = document.querySelector(identificador);
    }

    if (typeof identificador === 'object') {
        elemento = identificador;
    }

    for (let objetoContendoEstilo of arraydePropriedade) {
        for (let estilo in objetoContendoEstilo) {
            elemento.style[estilo] = objetoContendoEstilo[estilo];
        }
    }

}

