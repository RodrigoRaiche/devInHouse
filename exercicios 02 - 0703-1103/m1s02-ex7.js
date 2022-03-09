nomeDoTime = 'Tabajara F.C.';
nroVitorias = 12;
nroDerrotas = 2;
nroEmpates = 6;
nroPartidas = nroVitorias + nroDerrotas + nroEmpates;
totalPontos =  (nroVitorias * 3)  + (nroDerrotas * 0) + (nroEmpates * 1);

console.log('O time ' + nomeDoTime + ' acumulou ' + totalPontos + ' pontos, após jogar ' + nroPartidas + ' partidas');
