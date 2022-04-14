export function saveLista(lista, total) {
    const listaCompras = {
        'lista' : lista,
        'total' : total
    }

    localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
}

export const listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || {lista: null, valorTotal: 0};;

