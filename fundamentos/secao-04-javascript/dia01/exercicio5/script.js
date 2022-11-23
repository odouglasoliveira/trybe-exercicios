// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para: Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 1;
const b = 2;

const soma = a+b;
const subtracao = a-b;
const multiplicacao = a*b;
const divisao = a/b;
const modulo = a%b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);


// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const valor1 = 10;
const valor2 = 10;

if (valor1 > valor2) {
    console.log(valor1);
} else if (valor2 > valor1) {
    console.log(valor2);
} else {
    console.log("Os valores são iguais.")
}


// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const valor3 = 20;

if (valor1 > valor2 && valor1 > valor3) {
    console.log(valor1)
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log(valor2)
} else if (valor3 > valor1 && valor3 > valor2) {
    console.log(valor3)
}


// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const valor = -1;

if (valor > 0) {
    console.log("positive")
} else if (valor < 0) {
    console.log("negative")
}


// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const anguloA = -1;
const anguloB = 0;
const anguloC = 0;

const isValid = true;

if (anguloA + anguloB + anguloC === 180) {
    console.log(isValid)
} else if (anguloA + anguloB + anguloC > 0) {
    console.log(!isValid)
} else {
    console.log("Erro, algum ângulo é inválido.")
}

//