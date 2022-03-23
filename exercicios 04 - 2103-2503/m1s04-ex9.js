const pontos = [10, 8, 5, 4, 9, 1, 9, 10, 2, 10];

const totalpontos = pontos.filter(function (ponto) {
     return ponto > 5;
}).reduce(function(soma, ponto){
     return soma += ponto;
}, 0) 
console.log(totalpontos);




