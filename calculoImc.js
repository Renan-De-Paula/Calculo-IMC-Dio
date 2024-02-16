function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso Ideal";
    } else if (imc >= 25 && imc < 30) {
        return "Obesidade Grau I";
    } else if (imc >= 30 && imc <= 40) {
        return "Obesidade Grau II (severa)";
    } else {
        return "Obesidade Morbida";
    }
}

function main() {
    let peso = 63;
    let altura = 1.63;

    let resultadoCalculo = calcularImc(peso, altura);
    let imc = calcularImc(peso, altura);
    console.log("O Resultado é:  " +  resultadoCalculo.toFixed(2));
    console.log("Sua condição é: " + classificarImc(imc));
}

main()
