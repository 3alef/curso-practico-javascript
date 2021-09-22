// Helpers

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor

        }
    )
    const promedioLista = sumaLista / lista.length;

    return (promedioLista);
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}


// Mediana General
const salarioArgent = argentina.map(
    function (persona) {
        return persona.salary;

    }
);

const salarioArgentSorted = salarioArgent.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralArg = medianaSalarios(salarioArgentSorted);

// Mediana del Top 10%
const spliceStart = (salarioArgentSorted.length * 90) / 100;
const spliceCount = salarioArgentSorted.length - spliceStart;
const salariosConTop10 = salarioArgentSorted.splice(spliceStart, spliceCount);

const medianaTop10Arg = medianaSalarios(salariosConTop10);

console.log({
    medianaGeneralArg,
    medianaTop10Arg

}
);