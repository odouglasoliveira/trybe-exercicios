// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (string) => {
    const words = string.split(' ');
    biggerWord = words[0];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length > biggerWord.length) {
            biggerWord = words[i]
        }
    }
    return console.log(biggerWord)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'