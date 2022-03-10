var arr = [12, 67, 23, 32];


console.log('a) Repetição com for (tradicional)');
for (var i = 0; i < arr.length; i++) {
    console.log('Elemento : ' + i + ' -  valor: ' + arr[i]);
}

console.log('-----------------------------------------------------');

console.log('b) Repetição com for .. in');
for (var i in arr) {
    console.log('Elemento : ' + i + ' -  valor: ' + arr[i]);
}

console.log('-----------------------------------------------------');

console.log('c) Repetição com for .. of');
for (var [index, value] of arr.entries()) {
    console.log('Elemento : ' + `${index}` + ' -  valor: ' + `${value}`);
}

console.log('-----------------------------------------------------');

console.log('d) Repetição com while.');
var i = 0;
while (i < arr.length) {
    console.log('Elemento : ' + i + ' -  valor: ' + arr[i]);
    i++;
}

