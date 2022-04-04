function comparePositions(p1, p2) {
    var x1 = p1[0] <= p2[0] ? p1 : p2;
    var x2 = p1[0] <= p2[0] ? p2 : p1;
    return x1[1] >= x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(a, b) {

    let arrayb = [[0, 0], [0, 0]];
    let arraya = [[0, 0], [0, 0]];

    arrayb[0][0] = b.left;
    arrayb[0][1] = (b.left + b.width);
    arrayb[1][0] = b.top;
    arrayb[1][1] = (b.top + b.height);

    arraya[0][0] = a.left;
    arraya[0][1] = (a.left + a.width);
    arraya[1][0] = a.top;
    arraya[1][1] = (a.top + a.height);

    var horizontalMatch = comparePositions(arrayb[0], arraya[0]);
    var verticalMatch = comparePositions(arrayb[1], arraya[1]);
    var match = horizontalMatch && verticalMatch;

    return match;
}

/*
function verifica(a, b) {

    a.bottom = a.top + a.height;
    a.right = a.left + a.width;
    b.bottom = b.top + b.height;
    b.right = b.left + b.width;

    return (
        a.left >= b.right || a.top >= b.bottom ||
        a.right <= b.left || a.bottom <= b.top
    )

}
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getEstilo(xMaximo, yMaximo) {
    return {
        top: getRandomInt(0, xMaximo),
        left: getRandomInt(0, yMaximo),
        height: getRandomInt(10, 500),
        width: getRandomInt(10, 500)
    }

}

function atribuiDiv(estilos, div) {

    div.style.left = estilos.left + 'px';
    div.style.top = estilos.top + 'px';
    div.style.height = estilos.height + 'px';
    div.style.width = estilos.width + 'px';
    document.body.append(div);

}

function geraDiv(arrayEstilos) {
    let y = 0;
    let div;

    arrayEstilos.forEach(function (objeto) {
        div = document.createElement("div");
        div.style.border = "1px solid black";
        div.className = 'div' + y;
        atribuiDiv(objeto, div);
        y++;

    })
}


function GeraRetangulos() {

    let larguraMaxima = 500;
    let alturaMaxima = 300;
    let estilosNovo;
    let arrayEstilos = [];


    let trigger = true;

    if (arrayEstilos.length == 0) {
        estilosNovo = getEstilo(larguraMaxima, alturaMaxima);
        arrayEstilos.push(estilosNovo);
    }


    while (arrayEstilos.length < 5) {
        loop1:
        do {
            estilosNovo = getEstilo(larguraMaxima, alturaMaxima);

            for (x of arrayEstilos) {
                let verificacao = checkCollisions(x, estilosNovo);
                if (verificacao) { continue loop1 }
            }

            arrayEstilos.push(estilosNovo)
            trigger = false;

        } while (trigger);
    }
    geraDiv(arrayEstilos);

}


GeraRetangulos();






