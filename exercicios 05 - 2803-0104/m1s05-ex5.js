import { estiliza } from "./utilitarios.js"

const btnProcess = document.querySelector('#process');


btnProcess.addEventListener("click", event => {
    const inputs = document.querySelectorAll('input');

    const spans = document.querySelectorAll('span').forEach((span) => {
        span.remove();
    });

    const arrayDentroFaixa0e1 = [...inputs].filter(input => {
        return (input.length != 0 && (parseFloat(input.value) >= 0 && parseFloat(input.value) <= 1));
    }).forEach((input) => {

        estiliza(input, [{ border: "2px inset rgb(118, 118, 118)" }])

        const divElement = document.getElementById(input.id).parentNode;

        const spanResultado = document.createElement('span');
        const corDinamica = '#' + Math.floor((parseFloat(input.value)) * 16777215).toString(16);

        spanResultado.innerHTML = corDinamica;

        estiliza(spanResultado, [{ backgroundColor: corDinamica }]);

        divElement.append(spanResultado)

    })

    const arrayForaFaixa0e1 = [...inputs].filter(input => {
        return (input.length === 0 || parseFloat(input.value) < 0 || parseFloat(input.value) > 1);
    }).forEach(input => {
        console.log(input.length)
        estiliza(input, [{ border: "2px solid red" }])

    });

}


);

