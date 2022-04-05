function adicionarSomenteNumeros(...informacoes) {
    let soma = 0;
    for (informacao of informacoes){
         if (typeof(informacao) == 'number'){
             soma += informacao;
         }

    } 
    return soma; 
}


let resultado = adicionarSomenteNumeros(2,5,10);
console.log(resultado);

resultado = adicionarSomenteNumeros('A',5,10,'CD', {nome: 'Rodrigo', idade: 25});
console.log(resultado);

resultado = adicionarSomenteNumeros('B','RR', {nome: 'Rodrigo', idade: 25}, true, function(){});
console.log(resultado);
