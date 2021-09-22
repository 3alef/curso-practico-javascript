// codigo del Cuadrado

const perimetroCuadrado = (lado) => lado * 4
    
const areaCuadrado = (lado) => lado * lado

//codigo del Triangulo

const areaTriangulo = (base, altura) => (base * altura) / 2
const perimetroTriangulo = (ladoA, ladoB, base) => ladoA + ladoB + base



//codigo del Círculo
//diametro
const diametroCirculo = (radio) => radio * 2

// Circunferencia Círculo
const circunferenciaCirculo = (radio) => diametroCirculo(radio) * Math.PI

// area Círculo
const areaCirculo = (radio) => (radio * radio) * Math.PI

//Aqui interactuamos con HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("inputLadoA")
    const valueA = inputA.value
    
    const inputB = document.getElementById("inputLadoB")
    const valueB = inputB.value

    const inputBase = document.getElementById("inputBase")
    const valueBase = inputBase.value

    const perimetro = perimetroTriangulo (valueA, valueB, valueBase)
    alert(perimetro)
    
}

/* function alturaTriangulo (trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error ("No son iguales los lados de los triangulos")
    } else {
        const trianguloPequeñoLadoB = trianguloGrandeLadoBase / 2
        const trianguloPequeñoLadoBase = trianguloGrandeLadoA

        const trianguloPequeñoLadoBCuadrado = trianguloPequeñoLadoB * trianguloPequeñoLadoB
        const trianguloPequeñoLadoBaseCuadrado = trianguloPequeñoLadoBase * trianguloPequeñoLadoBase
        
        const trianguloPequeñoLadoA = Math.sqrt (trianguloPequeñoLadoBaseCuadrado - trianguloPequeñoLadoBCuadrado)
        
        const trianguloGrandeAltura = trianguloPequeñoLadoA
        return trianguloGrandeAltura 

    }
} 
  */
function calcularAreaTriangulo(){    
    const inputBase = document.getElementById("inputBase")
    const valueBase = inputBase.value

    const inputA = document.getElementById("inputAltura")
    const valueAltura = inputA.value
    

    const areaTrian = areaTriangulo(valueBase, valueAltura)
    alert(areaTrian)  
}


//Circunsferencia

function calcularPerimetroCircunsf() {
    const input = document.getElementById("inputCircunsferencia")
    const valueRadio = input.value

    const perimetro = circunferenciaCirculo(valueRadio)
    alert(perimetro) 
}

function calcularAreaCircunsf() {
    const input = document.getElementById("inputCircunsferencia")
    const valueRadio = input.value

    const area = areaCirculo(valueRadio)
    alert(area) 
}