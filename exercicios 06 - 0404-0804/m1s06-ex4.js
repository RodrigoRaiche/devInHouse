function envolver(...array) {
    let novoArray = ['<html>', ...array, '</html>']
    return novoArray; 
}

const r = envolver('<body>','<div>','<h1>','</h1>','</div>','</body>');
console.log(r); 

