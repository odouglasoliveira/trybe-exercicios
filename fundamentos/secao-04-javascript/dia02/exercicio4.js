let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i = 0; i < numbers.length; i += 1) {
        console.log(numbers[i]);
}


// Some todos os valores contidos no array e imprima o resultado;    

let total = 0;
for (let i = 0; i < numbers.length; i += 1) {
    total = total + numbers[i];
}
console.log(total)


// Calcule e imprima a média aritmética dos valores contidos no array;

total = 0;
for (let i = 0; i < numbers.length; i += 1) {
    total = total + numbers[i];
}
let media = total / numbers.length;
console.log(media)


// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20");
}


// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero)


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numerosImpares = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i])
        numerosImpares = numbers[i]
    }
}
if(numerosImpares === 0) {
    console.log("nenhum valor impar encontrado")
}


// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = 100;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}
console.log(menorNumero)


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let novoArray= [];
for (let i = 1; i <= 25; i += 1) {
    novoArray.push(i)
}

console.log(novoArray)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let i = 0; i < novoArray.length; i += 1) {
    console.log(novoArray[i]/2);
}