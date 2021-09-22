//const lista1 = [1,1,2,2,4,5,1,3,5,6,7,8,4,3];

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )

    const moda = listaArray[listaArray.length - 1]
    console.log (moda)

}