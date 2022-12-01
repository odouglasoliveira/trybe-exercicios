// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(number) {
    let result = 0;
    if(number < 1) {
        console.log("Só é possivel somar numeros acima de 1.")
    } else {
        for (let i = 1; i <= number; i += 1) {
            result += i
        }
    }
    console.log(result)
}

somatorio(5)