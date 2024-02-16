let peso = 63;
let altura = 1.63;
let calculoImc = peso / Math.pow(altura,2);
let classificacao = "Sua condição é: ";
console.log("seu calculo do IMC esta em: " + calculoImc);

if (calculoImc < 18.5) {
    console.log(classificacao + "Abaixo do Peso");
} else if (calculoImc >= 18.5 && calculoImc < 25){
    console.log(classificacao + "Peso Ideal");
}else if (calculoImc >= 25 && calculoImc < 30) {
    console.log(classificacao + "Obesidade Grau I");
} else if (calculoImc >= 30 && calculoImc <= 40) { 
    console.log(classificacao + "Obesidade Grau II (severa)");
} else {
   console.log (classificacao + "Obesidade Morbida");
}