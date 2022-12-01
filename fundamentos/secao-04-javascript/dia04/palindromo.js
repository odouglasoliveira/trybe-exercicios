// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindrome (string) {
    let auxArray = [];
    auxArray = string.split('');
    let invertedArray = [];
    invertedArray = string.split('');

    if (auxArray.join('') === invertedArray.reverse().join('')) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome('arara'));