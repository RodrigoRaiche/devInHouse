
function obterMaiorValor(entrada){
    let valor = entrada[0];
    
    for (let i = 0; i < entrada.length; i++){
        if (entrada[i] < valor){
            valor = entrada[i];
        }
    }

    return valor;

}

function obterMenorValor(entrada){
    let valor = entrada[0];
    
    for (let i = 0; i < entrada.length; i++){
        if (entrada[i] > valor){
            valor = entrada[i];
        }
    }

    return valor;

}


function calcular(entrada) {
    let maiorValor = 0;
    let menorValor = 0;
    let saida = '';

    if ((entrada == null) || (entrada.length === 0)) {
        saida = 'Não é possível calcular'
    }
    else {
        menorValor = obterMaiorValor(entrada); 
        maiorValor = obterMenorValor(entrada) ;
        saida = 'Menor valor: ' + menorValor + ' e o Maior valor: ' + maiorValor;
    }

    return saida;

}


let arrayTeste = [];
arrayTeste = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));

arrayTeste = [];
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));

arrayTeste = [1];
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));

arrayTeste = [1, -1];
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));

arrayTeste = null;
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));

arrayTeste = [-2, -2, -2, -2];
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));

arrayTeste = [20, 10, 30];
console.log('Entrada: ' + arrayTeste + ' - Saída: ' + calcular(arrayTeste));


