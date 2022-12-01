// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somatorio(number) {
    let result = 0;
    let array = [];
    if(number < 1) {
        console.log("Só é possivel somar numeros acima de 1.")
    } else {
        for (let i = 1; i <= number; i += 1) {
            result += i
            array.push(i)
        }
    }
    console.log(array.join('+') + ' = ' + result)
}

somatorio(5)