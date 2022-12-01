// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function verificaMaior (Array) {
    let maiorIndex = 0;
    for (let i = 0; i < Array.length; i += 1) {
        if (Array[i] > Array[i - 1]) {
            maiorIndex = i;
        }
    }
    console.log(maiorIndex)
}

verificaMaior([2, 3, 6, 7, 10, 1]);