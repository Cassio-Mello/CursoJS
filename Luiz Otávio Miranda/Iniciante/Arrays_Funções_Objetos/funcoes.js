// Função sem parâmetro
function saudacao(){// Declaração da função

    console.log("Olá, seja bem-vindo!");// Corpo da função

}// Fim da declaração da função

saudacao();// Chamada da função


// Função com parâmetro
function saudacaoNome(nome){// Declaração da função com parâmetro

    console.log(`Olá, eja bem-vindo ${nome}!`);// Corpo da função

}// Fim da declaração da função

saudacaoNome("Maria");// Chamada da função com argumento

// Função com retorno
function saudacaoRetorno(nome){// Declaração da função com parâmetro

    return `Olá, seja bem-vindo ${nome}!`;// Corpo da função com retorno

}// Fim da declaração da função
const mensagem = saudacaoRetorno("João");// Chamada da função com argumento e armazenamento do retorno em uma variável
console.log(mensagem);// Exibição da mensagem retornada

// Função com múltiplos parâmetros e retorno
function soma(a, b){// Declaração da função com parâmetros

    const resultado = a + b;// Corpo da função com operação de soma
    return resultado;// Retorno do resultado

}// Fim da declaração da função

const resultado = soma(5, 3);// Chamada da função com argumentos e armazenamento do retorno em uma variável
console.log(`O resultado da soma é: ${resultado}`);// Exibição do resultado retornado

// Função anônima atribuída a uma variável
//a função anônima é uma função que não possui nome e é geralmente atribuída a uma variável ou passada como argumento para outra função.
const multiplicacao = function(x, y){// Declaração da função anônima com parâmetros

    return x * y;// Corpo da função com operação de multiplicação e retorno

};// Fim da declaração da função anônima

//arrow function (função de seta) atribuída a uma variável
const divisao = (x, y) => {// Declaração da arrow function com parâmetros
    return x / y;// Corpo da função com operação de divisão e retorno
};// Fim da declaração da arrow function
