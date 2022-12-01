// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function verificaMaiorNome(array) {
    biggestName = array[0];

    for (let i = 0; i < array.length; i += 1) {
        currentName = array[i]
        if(currentName.length > biggestName.length) {
            biggestName = currentName
        }
    }
    console.log(biggestName)
}

verificaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])