var extrato = [ 100, -35, -15, -5, 55, -20 ];
var saldo = 0;

console.log('Impressão dos elementos do array em orderm        : ');
for (var i=0; i < extrato.length;i++){
    console.log('Elemento : '+  i + ' -  valor: ' + extrato[i]);
}

console.log('-----------------------------------------------------');

console.log('Impressão dos elementos do array em orderm inversa : ');
for (var i=extrato.length-1; i >= 0;i--){
    console.log('Elemento : '+  i + ' -  valor: ' + extrato[i]);
}

console.log('-----------------------------------------------------');

for (var i=0; i < extrato.length;i++){
    saldo += extrato[i];
}
console.log('Saldo final da conta                               : ' + saldo);

console.log('-----------------------------------------------------');

if (saldo > 0){
    console.log('Saldo positivo');
}
else if (saldo < 0){
    console.log('Saldo negativo');
}
else {console.log('Sua conta está zerada');}