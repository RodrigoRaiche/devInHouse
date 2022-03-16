const dadoFormula1 = 1.8;
const dadoFormula2 = 32;

function converteCelsiusFahrenheits(graus){
     return (graus * dadoFormula1) + dadoFormula2;
}

function converteFahrenheitsCelsius(graus){
    return (graus - dadoFormula2) / dadoFormula1;
}

var grausCelsius = 32;
var grausFahrenheits =  converteCelsiusFahrenheits(grausCelsius);
console.log('Calcular ' + grausCelsius.toFixed(2) +' graus Celsius para Fahrenheit : '+grausFahrenheits.toFixed(2));

grausCelsius =  converteFahrenheitsCelsius(grausFahrenheits);
console.log('Calcular ' + grausFahrenheits.toFixed(2) + ' graus Fahrenheit para Celsius : '+grausCelsius.toFixed(2));
