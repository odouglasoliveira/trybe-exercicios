// Crie uma função que ligue e desligue um motor de um carro.

// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

let carStatus = 'ligado';

// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

const ligarDesligar = () => (
    carStatus === 'desligado' ? carStatus = 'ligado' : carStatus = 'desligado'
)

console.log(ligarDesligar())
console.log(ligarDesligar())