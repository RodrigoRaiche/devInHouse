const btnProcess = document.querySelector('#process');


btnProcess.addEventListener("click", event => {
    const inputs = document.querySelectorAll('input');
    let resultado = 0;
    inputs.forEach(input => {
        input.disabled = true;
        if (input.value.length != 0) {
            resultado += parseFloat(input.value);
        }
    });
    const divResultado = document.querySelector('#resultado')
    
    const h1Resultado = document.createElement('h1');
    h1Resultado.innerHTML = 'Resultado:' + resultado;
    divResultado.append(h1Resultado);
}


);
