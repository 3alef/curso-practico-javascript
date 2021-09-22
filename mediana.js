function calcularMediaAritmetica(lista) {

    lista.sort((a,b)=> {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor

        }
    )
    const promedioLista = sumaLista / lista.length;

    return (promedioLista);


    const mitadLista = parseInt(lista.length / 2);

    function esPar(numerito) {
        if (lista.length % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElem1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElem1y2;

    } else {
        mediana = lista[mitadLista]
    }
}
