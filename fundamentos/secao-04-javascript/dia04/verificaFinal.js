// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificafinal (string, final) {
    console.log(string.endsWith(final))
}

verificafinal('trybe', 'trybe')