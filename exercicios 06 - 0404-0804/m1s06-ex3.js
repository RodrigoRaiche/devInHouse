function adicionarPrimeiro(array) {
    let novoArray = ['primeiro', ...array]
    return novoArray; 
}


let array = [2,5,10,25,30];
console.log(array);
let resultado = adicionarPrimeiro(array);
console.log(resultado);

