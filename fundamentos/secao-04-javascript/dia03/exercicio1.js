// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let number = 4;
for (let i = number - 1; i > 0; i--) {
    number = number * i
}
console.log(number)


// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'trybe';
let splittedWord = word.split('');
let invertedWord = [];
for (let i = 0; i < splittedWord.length; i++) {
    invertedWord.unshift(splittedWord[i]);
}
console.log(invertedWord.join(''))


// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'css', 'html'];
word = [];
let biggerWord = [];
for (let i = 0; i < array.length; i++) {
    word = array[i].split('');
    if (word.length > biggerWord.length) {
        biggerWord = word;
    }
}
console.log(biggerWord.join(''))

let smallWord = [];
smallWord = array[0].split('');
for (let i = 0; i < array.length; i += 1) {
    word = array[i].split('');
    if (word.length < smallWord.length) {
        smallWord = word
    }
}
console.log(smallWord.join(''))
