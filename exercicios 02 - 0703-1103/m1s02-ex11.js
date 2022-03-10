var sorteados = [
    [1, 44, 6, 2, 45, 60],
    [10, 21, 55, 25, 34, 44],
    [8, 18, 28, 29, 55, 59],
    [60, 25, 11, 34, 6, 9],
    [55, 43, 25, 12, 7, 11]
];

nroSorte = 25;
qtdNroSortes = 0;

for (var i = 0; i < sorteados.length; i++) {
    for (var j = 0; j < sorteados[i].length; j++) {
        if (sorteados[i][j] === nroSorte) { qtdNroSortes++; }
    }
}

console.log('A quantidade do número da sorte(' + nroSorte + ') de Mike é : ' + qtdNroSortes );

